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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ CoinPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/coin.module.css */ \"./styles/coin.module.css\");\n/* harmony import */ var _styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction CoinPage(param) {\n    let { coin  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const getDescriptionHtml = ()=>{\n        return {\n            __html: coin.description.en\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            className: (_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            maxWidth: \"80vw\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/coins\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            children: \"\\xab Back to all coins\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: coin.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Symbol: \",\n                        coin.symbol\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    marginBottom: \"0.5rem\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Current Price\",\n                            value: coin.market_data.current_price.usd ? coin.market_data.current_price.usd.toString() : \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Highest Price (24h)\",\n                            value: coin.high_24h.usd\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Lowest Price (24h)\",\n                            value: coin.low_24h.usd\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (24h)\",\n                            value: coin.price_change_percentage_24h\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (7d)\",\n                            value: coin.price_change_percentage_7d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (14d)\",\n                            value: coin.price_change_percentage_14d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (30d)\",\n                            value: coin.price_change_percentage_30d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (60d)\",\n                            value: coin.price_change_percentage_60d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (200d)\",\n                            value: coin.price_change_percentage_200d\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PriceBox, {\n                            label: \"Price Change (1y)\",\n                            value: coin.price_change_percentage_1y\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Description: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            dangerouslySetInnerHTML: getDescriptionHtml()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_coin_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                    onClick: ()=>router.push(\"/coins\"),\n                    children: \"Click me to programmatically navigate or redirect\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(CoinPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CoinPage;\n// Custom PriceBox component\nconst PriceBox = (param)=>{\n    let { label , value  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        p: 1,\n        borderRadius: 8,\n        border: \"1px solid white\" // Add a thin white border\n        ,\n        bgcolor: \"rgba(255, 255, 255, 0.2)\" // Make the box transparent\n        ,\n        width: 200,\n        height: 60,\n        textAlign: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginBottom: \"0.2rem\",\n                    fontSize: \"14px\"\n                },\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginTop: \"0.2rem\",\n                    fontSize: \"16px\"\n                },\n                children: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alkin\\\\Downloads\\\\Archive-84c4\\\\Frontend\\\\pages\\\\coins\\\\[coinpage].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = PriceBox;\nvar _c, _c1;\n$RefreshReg$(_c, \"CoinPage\");\n$RefreshReg$(_c1, \"PriceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQTBCOztRQUNuREMsU0FBUSwyQkFBMkIsMkJBQTJCOztRQUM5REMsT0FBTztRQUNQckMsUUFBUTtRQUNSc0MsV0FBVTs7MEJBRVYsOERBQUNsQztnQkFBRW1DLE9BQU87b0JBQUU1QixjQUFjO29CQUFVNkIsVUFBVTtnQkFBTzswQkFBSTNCOzs7Ozs7WUFBVTswQkFDbkUsOERBQUNUO2dCQUFFbUMsT0FBTztvQkFBRUUsV0FBVztvQkFBVUQsVUFBVTtnQkFBTzswQkFBSTFCOzs7Ozs7WUFBVTs7Ozs7OztBQUd0RTtNQW5CTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29pbnMvW2NvaW5wYWdlXS5qcz9kMTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uL2FwaS9mZXRjaENvaW5zLmpzXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29pblBhZ2UoeyBjb2luIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXREZXNjcmlwdGlvbkh0bWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4geyBfX2h0bWw6IGNvaW4uZGVzY3JpcHRpb24uZW4gfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBtYXhXaWR0aD1cIjgwdndcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29pbnNcIj5cclxuICAgICAgICAgICAgPHNtYWxsPiZsYXF1bzsgQmFjayB0byBhbGwgY29pbnM8L3NtYWxsPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntjb2luLm5hbWV9PC9oMj5cclxuICAgICAgICA8cD5TeW1ib2w6IHtjb2luLnN5bWJvbH08L3A+XHJcblxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWFyZ2luQm90dG9tPVwiMC41cmVtXCI+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJDdXJyZW50IFByaWNlXCIgdmFsdWU9e2NvaW4ubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2QgPyBjb2luLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UudXNkLnRvU3RyaW5nKCkgOiAnJ30gLz5cclxuICAgICAgICAgIDxQcmljZUJveCBsYWJlbD1cIkhpZ2hlc3QgUHJpY2UgKDI0aClcIiB2YWx1ZT17Y29pbi5oaWdoXzI0aC51c2R9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJMb3dlc3QgUHJpY2UgKDI0aClcIiB2YWx1ZT17Y29pbi5sb3dfMjRoLnVzZH0gLz5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxQcmljZUJveCBsYWJlbD1cIlByaWNlIENoYW5nZSAoMjRoKVwiIHZhbHVlPXtjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aH0gLz5cclxuICAgICAgICAgIDxQcmljZUJveCBsYWJlbD1cIlByaWNlIENoYW5nZSAoN2QpXCIgdmFsdWU9e2NvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2R9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDE0ZClcIiB2YWx1ZT17Y29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xNGR9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDMwZClcIiB2YWx1ZT17Y29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGR9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDYwZClcIiB2YWx1ZT17Y29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGR9IC8+XHJcbiAgICAgICAgICA8UHJpY2VCb3ggbGFiZWw9XCJQcmljZSBDaGFuZ2UgKDIwMGQpXCIgdmFsdWU9e2NvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjAwZH0gLz5cclxuICAgICAgICAgIDxQcmljZUJveCBsYWJlbD1cIlByaWNlIENoYW5nZSAoMXkpXCIgdmFsdWU9e2NvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXl9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxwPkRlc2NyaXB0aW9uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Z2V0RGVzY3JpcHRpb25IdG1sKCl9IC8+PC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9jb2luc1wiKX0+XHJcbiAgICAgICAgICBDbGljayBtZSB0byBwcm9ncmFtbWF0aWNhbGx5IG5hdmlnYXRlIG9yIHJlZGlyZWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIFByaWNlQm94IGNvbXBvbmVudFxyXG5jb25zdCBQcmljZUJveCA9ICh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgcD17MX1cclxuICAgICAgYm9yZGVyUmFkaXVzPXs4fVxyXG4gICAgICBib3JkZXI9XCIxcHggc29saWQgd2hpdGVcIiAvLyBBZGQgYSB0aGluIHdoaXRlIGJvcmRlclxyXG4gICAgICBiZ2NvbG9yPVwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCIgLy8gTWFrZSB0aGUgYm94IHRyYW5zcGFyZW50XHJcbiAgICAgIHdpZHRoPXsyMDB9IC8vIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkXHJcbiAgICAgIGhlaWdodD17NjB9IC8vIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZFxyXG4gICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwLjJyZW0nLCBmb250U2l6ZTogJzE0cHgnIH19PntsYWJlbH08L3A+IHsvKiBBZGp1c3QgdGhlIGZvbnRTaXplIHZhbHVlICovfVxyXG4gICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcwLjJyZW0nLCBmb250U2l6ZTogJzE2cHgnIH19Pnt2YWx1ZX08L3A+IHsvKiBBZGp1c3QgdGhlIGZvbnRTaXplIHZhbHVlICovfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29pbnMgPSBhd2FpdCBmZXRjaERhdGEoXCJjb2lucy9tYXJrZXRzXCIpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBjb2lucy5tYXAoKGNvaW4pID0+IHtcclxuICAgICAgcmV0dXJuIHsgcGFyYW1zOiB7IGNvaW5wYWdlOiBjb2luLmlkLnRvU3RyaW5nKCkgfX07XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhdGhzLFxyXG4gICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY29pbnM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhdGhzOiBbXSxcclxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvaW4gPSBhd2FpdCBmZXRjaERhdGEoYGNvaW5zLyR7cGFyYW1zLmNvaW5wYWdlfWApO1xyXG5cclxuICAgIGlmICghY29pbikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY29pbixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb2luOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInN0eWxlcyIsIkJveCIsIkNvaW5QYWdlIiwiY29pbiIsInJvdXRlciIsImdldERlc2NyaXB0aW9uSHRtbCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiZW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJwIiwiaHJlZiIsInNtYWxsIiwiaDIiLCJ0aXRsZSIsIm5hbWUiLCJzeW1ib2wiLCJtYXJnaW5Cb3R0b20iLCJQcmljZUJveCIsImxhYmVsIiwidmFsdWUiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJ0b1N0cmluZyIsImhpZ2hfMjRoIiwibG93XzI0aCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMTRkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjAwZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5Iiwic3BhbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmdjb2xvciIsIndpZHRoIiwidGV4dEFsaWduIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coins/[coinpage].js\n"));

/***/ })

});