"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/coins/[coinpage]",{

/***/ "./pages/coins/[coinpage].js":
/*!***********************************!*\
  !*** ./pages/coins/[coinpage].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ CoinPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/coin.module.css */ \"./styles/coin.module.css\");\n/* harmony import */ var _styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction CoinPage(param) {\n    let { coin  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const getDescriptionHtml = ()=>{\n        return {\n            __html: coin.description.en\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            className: (_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            maxWidth: \"80vw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/coins\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: \"\\xab Back to all coins\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: coin.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Symbol: \",\n                        coin.symbol\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Current Price\",\n                            value: coin.market_data.current_price.usd ? coin.market_data.current_price.usd.toString() : \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Highest Price (24h)\",\n                            value: coin.high_24h.usd\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Lowest Price (24h)\",\n                            value: coin.low_24h.usd\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (24h)\",\n                            value: coin.price_change_percentage_24h\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (7d)\",\n                            value: coin.price_change_percentage_7d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (14d)\",\n                            value: coin.price_change_percentage_14d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (30d)\",\n                            value: coin.price_change_percentage_30d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (60d)\",\n                            value: coin.price_change_percentage_60d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (200d)\",\n                            value: coin.price_change_percentage_200d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (1y)\",\n                            value: coin.price_change_percentage_1y\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Description: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            dangerouslySetInnerHTML: getDescriptionHtml()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                    onClick: ()=>router.push(\"/coins\"),\n                    children: \"Click me to programmatically navigate or redirect\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(CoinPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CoinPage;\n// Custom PriceBox component\nconst PriceBox = (param)=>{\n    let { label , value  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        p: 1,\n        borderRadius: 8,\n        bgcolor: \"#F3F3F3\",\n        minWidth: 120,\n        textAlign: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = PriceBox;\nvar _c, _c1;\n$RefreshReg$(_c, \"CoinPage\");\n$RefreshReg$(_c1, \"PriceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7OzBCQUVWLDhEQUFDaEM7MEJBQUdROzs7Ozs7MEJBQ0osOERBQUNSOzBCQUFHUzs7Ozs7Ozs7Ozs7O0FBR1Y7TUFqQk1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvaW5zL1tjb2lucGFnZV0uanM/ZDEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY29pbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi9hcGkvZmV0Y2hDb2lucy5qc1wiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvaW5QYWdlKHsgY29pbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb25IdG1sID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHsgX19odG1sOiBjb2luLmRlc2NyaXB0aW9uLmVuIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBoZWlnaHQ9XCIxMDB2aFwiPlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gbWF4V2lkdGg9XCI4MHZ3XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvaW5zXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbD4mbGFxdW87IEJhY2sgdG8gYWxsIGNvaW5zPC9zbWFsbD5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y29pbi5uYW1lfTwvaDI+XHJcbiAgICAgICAgPHA+U3ltYm9sOiB7Y29pbi5zeW1ib2x9PC9wPlxyXG5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPFByaWNlQm94IGxhYmVsPVwiQ3VycmVudCBQcmljZVwiIHZhbHVlPXtjb2luLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UudXNkID8gY29pbi5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZC50b1N0cmluZygpIDogJyd9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJIaWdoZXN0IFByaWNlICgyNGgpXCIgdmFsdWU9e2NvaW4uaGlnaF8yNGgudXNkfSAvPlxyXG4gICAgICAgICAgPFByaWNlQm94IGxhYmVsPVwiTG93ZXN0IFByaWNlICgyNGgpXCIgdmFsdWU9e2NvaW4ubG93XzI0aC51c2R9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDI0aClcIiB2YWx1ZT17Y29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGh9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDdkKVwiIHZhbHVlPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkfSAvPlxyXG4gICAgICAgICAgPFByaWNlQm94IGxhYmVsPVwiUHJpY2UgQ2hhbmdlICgxNGQpXCIgdmFsdWU9e2NvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMTRkfSAvPlxyXG4gICAgICAgICAgPFByaWNlQm94IGxhYmVsPVwiUHJpY2UgQ2hhbmdlICgzMGQpXCIgdmFsdWU9e2NvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkfSAvPlxyXG4gICAgICAgICAgPFByaWNlQm94IGxhYmVsPVwiUHJpY2UgQ2hhbmdlICg2MGQpXCIgdmFsdWU9e2NvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkfSAvPlxyXG4gICAgICAgICAgPFByaWNlQm94IGxhYmVsPVwiUHJpY2UgQ2hhbmdlICgyMDBkKVwiIHZhbHVlPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzIwMGR9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDF5KVwiIHZhbHVlPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5fSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8cD5EZXNjcmlwdGlvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dldERlc2NyaXB0aW9uSHRtbCgpfSAvPjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvY29pbnNcIil9PlxyXG4gICAgICAgICAgQ2xpY2sgbWUgdG8gcHJvZ3JhbW1hdGljYWxseSBuYXZpZ2F0ZSBvciByZWRpcmVjdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBQcmljZUJveCBjb21wb25lbnRcclxuY29uc3QgUHJpY2VCb3ggPSAoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIHA9ezF9XHJcbiAgICAgIGJvcmRlclJhZGl1cz17OH1cclxuICAgICAgYmdjb2xvcj1cIiNGM0YzRjNcIlxyXG4gICAgICBtaW5XaWR0aD17MTIwfVxyXG4gICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8cD57bGFiZWx9PC9wPlxyXG4gICAgICA8cD57dmFsdWV9PC9wPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvaW5zID0gYXdhaXQgZmV0Y2hEYXRhKFwiY29pbnMvbWFya2V0c1wiKTtcclxuICAgIGNvbnN0IHBhdGhzID0gY29pbnMubWFwKChjb2luKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IHBhcmFtczogeyBjb2lucGFnZTogY29pbi5pZC50b1N0cmluZygpIH19O1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXRocyxcclxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNvaW5zOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXRoczogW10sXHJcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2luID0gYXdhaXQgZmV0Y2hEYXRhKGBjb2lucy8ke3BhcmFtcy5jb2lucGFnZX1gKTtcclxuXHJcbiAgICBpZiAoIWNvaW4pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNvaW4sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY29pbjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJCb3giLCJDb2luUGFnZSIsImNvaW4iLCJyb3V0ZXIiLCJnZXREZXNjcmlwdGlvbkh0bWwiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsImVuIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicCIsImhyZWYiLCJzbWFsbCIsImgyIiwidGl0bGUiLCJuYW1lIiwic3ltYm9sIiwiUHJpY2VCb3giLCJsYWJlbCIsInZhbHVlIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwidG9TdHJpbmciLCJoaWdoXzI0aCIsImxvd18yNGgiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV83ZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzE0ZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzIwMGQiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeSIsInNwYW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsImJnY29sb3IiLCJtaW5XaWR0aCIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coins/[coinpage].js\n"));

/***/ })

});