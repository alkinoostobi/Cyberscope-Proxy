"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/coins",{

/***/ "./pages/coins.js":
/*!************************!*\
  !*** ./pages/coins.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_fetchCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/fetchCoins */ \"./pages/api/fetchCoins.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst columns = [\n    {\n        field: \"name\",\n        headerName: \"Name\",\n        width: 250\n    },\n    {\n        field: \"symbol\",\n        headerName: \"Icon\",\n        width: 130\n    },\n    {\n        field: \"current_price\",\n        headerName: \"Current Price\",\n        width: 250\n    },\n    {\n        field: \"highestPrice\",\n        headerName: \"Highest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"lowestPrice\",\n        headerName: \"Lowest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"priceChange\",\n        headerName: \"Price Change (24h)\",\n        width: 250\n    }\n];\nconst Coins = ()=>{\n    _s();\n    const [coins, setCoins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tableHeight, setTableHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchDataP = async ()=>{\n            try {\n                const coinsData = await (0,_api_fetchCoins__WEBPACK_IMPORTED_MODULE_2__.fetchData)(\"coins/markets\");\n                setCoins(coinsData);\n            } catch (error) {\n                console.error(\"Error fetching coins:\", error);\n            }\n        };\n        fetchDataP();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateTableHeight = ()=>{\n            const newTableHeight = window.innerHeight - 64; // Adjust the height based on your layout\n            setTableHeight(newTableHeight);\n        };\n        window.addEventListener(\"resize\", updateTableHeight);\n        updateTableHeight();\n        return ()=>{\n            window.removeEventListener(\"resize\", updateTableHeight);\n        };\n    }, []);\n    const handleRowClick = (params)=>{\n        const coinId = params.row.id;\n        router.push(\"/coins/\".concat(coinId));\n    };\n    const handlePageChange = (params)=>{\n        const { page , pageSize  } = params;\n        const newTableHeight = window.innerHeight - 64 - 56 * (pageSize + 1); // Adjust the height based on your layout and table controls height\n        setTableHeight(newTableHeight);\n    // Add your custom pagination logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"calc(100vh - 64px)\" // Adjust the height as needed\n        ,\n        width: \"fit-content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: tableHeight,\n                    width: \"100%\"\n                },\n                children: [\n                    \" \",\n                    coins.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid, {\n                        rows: coins,\n                        columns: columns,\n                        initialState: {\n                            pagination: {\n                                paginationModel: {\n                                    page: 0,\n                                    pageSize: 5\n                                }\n                            }\n                        },\n                        pageSizeOptions: [\n                            5,\n                            10\n                        ],\n                        autoHeight: true,\n                        onPageChange: handlePageChange,\n                        onRowClick: handleRowClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                        lineNumber: 70,\n                        columnNumber: 34\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \" Loading... \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                        lineNumber: 85,\n                        columnNumber: 19\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n        lineNumber: 61,\n        columnNumber: 14\n    }, undefined);\n};\n_s(Coins, \"q8p+4MXHZ0OrR3dSNqD2ye/zOdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\nvar _c;\n$RefreshReg$(_c, \"Coins\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGkvZmV0Y2hDb2lucyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDI1MCB9LFxyXG4gICAgeyBmaWVsZDogJ3N5bWJvbCcsIGhlYWRlck5hbWU6ICdJY29uJywgd2lkdGg6IDEzMCB9LFxyXG4gICAgeyBmaWVsZDogJ2N1cnJlbnRfcHJpY2UnLCBoZWFkZXJOYW1lOiAnQ3VycmVudCBQcmljZScsIHdpZHRoOiAyNTAgfSxcclxuICAgIHsgZmllbGQ6ICdoaWdoZXN0UHJpY2UnLCBoZWFkZXJOYW1lOiAnSGlnaGVzdCBQcmljZSAoMjRoKScsIHdpZHRoOiAyNTAgfSxcclxuICAgIHsgZmllbGQ6ICdsb3dlc3RQcmljZScsIGhlYWRlck5hbWU6ICdMb3dlc3QgUHJpY2UgKDI0aCknLCB3aWR0aDogMjUwIH0sXHJcbiAgICB7IGZpZWxkOiAncHJpY2VDaGFuZ2UnLCBoZWFkZXJOYW1lOiAnUHJpY2UgQ2hhbmdlICgyNGgpJywgd2lkdGg6IDI1MCB9LFxyXG5dO1xyXG5cclxuY29uc3QgQ29pbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0YWJsZUhlaWdodCwgc2V0VGFibGVIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YVAgPSBhc3luYygpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvaW5zRGF0YSA9IGF3YWl0IGZldGNoRGF0YSgnY29pbnMvbWFya2V0cycpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29pbnMoY29pbnNEYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvaW5zOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZldGNoRGF0YVAoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRhYmxlSGVpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDY0OyAvLyBBZGp1c3QgdGhlIGhlaWdodCBiYXNlZCBvbiB5b3VyIGxheW91dFxyXG4gICAgICAgICAgICBzZXRUYWJsZUhlaWdodChuZXdUYWJsZUhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVRhYmxlSGVpZ2h0KTtcclxuICAgICAgICB1cGRhdGVUYWJsZUhlaWdodCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlVGFibGVIZWlnaHQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm93Q2xpY2sgPSAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29pbklkID0gcGFyYW1zLnJvdy5pZDtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NvaW5zLyR7Y29pbklkfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZSwgcGFnZVNpemUgfSA9IHBhcmFtcztcclxuICAgICAgICBjb25zdCBuZXdUYWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDY0IC0gNTYgKiAocGFnZVNpemUgKyAxKTsgLy8gQWRqdXN0IHRoZSBoZWlnaHQgYmFzZWQgb24geW91ciBsYXlvdXQgYW5kIHRhYmxlIGNvbnRyb2xzIGhlaWdodFxyXG4gICAgICAgIHNldFRhYmxlSGVpZ2h0KG5ld1RhYmxlSGVpZ2h0KTtcclxuICAgICAgICAvLyBBZGQgeW91ciBjdXN0b20gcGFnaW5hdGlvbiBsb2dpYyBoZXJlXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoIDxcclxuICAgICAgICBCb3ggZGlzcGxheSA9IFwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcyA9IFwiY2VudGVyXCJcclxuICAgICAgICBoZWlnaHQgPSBcImNhbGMoMTAwdmggLSA2NHB4KVwiIC8vIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZFxyXG4gICAgICAgIHdpZHRoID0gXCJmaXQtY29udGVudFwiID5cclxuICAgICAgICA8XHJcbiAgICAgICAgZGl2IHN0eWxlID0ge1xyXG4gICAgICAgICAgICB7IGhlaWdodDogdGFibGVIZWlnaHQsIHdpZHRoOiAnMTAwJScgfSB9ID4ge1xyXG4gICAgICAgICAgICBjb2lucy5sZW5ndGggPiAwID8gKCA8XHJcbiAgICAgICAgICAgICAgICBEYXRhR3JpZCByb3dzID0geyBjb2lucyB9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zID0geyBjb2x1bW5zIH1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBbNSwgMTBdIH1cclxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHQgb25QYWdlQ2hhbmdlID0geyBoYW5kbGVQYWdlQ2hhbmdlIH1cclxuICAgICAgICAgICAgICAgIG9uUm93Q2xpY2sgPSB7IGhhbmRsZVJvd0NsaWNrIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoIDxcclxuICAgICAgICAgICAgICAgIGRpdiA+IExvYWRpbmcuLi4gPCAvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSA8XHJcbiAgICAgICAgL2Rpdj4gPFxyXG4gICAgICAgIC9Cb3g+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29pbnM7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hEYXRhIiwiUmVhY3QiLCJEYXRhR3JpZCIsInVzZVJvdXRlciIsIkJveCIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsIkNvaW5zIiwiY29pbnMiLCJzZXRDb2lucyIsInRhYmxlSGVpZ2h0Iiwic2V0VGFibGVIZWlnaHQiLCJyb3V0ZXIiLCJmZXRjaERhdGFQIiwiY29pbnNEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXBkYXRlVGFibGVIZWlnaHQiLCJuZXdUYWJsZUhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSb3dDbGljayIsInBhcmFtcyIsImNvaW5JZCIsInJvdyIsImlkIiwicHVzaCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZGl2Iiwic3R5bGUiLCJsZW5ndGgiLCJyb3dzIiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2VTaXplT3B0aW9ucyIsImF1dG9IZWlnaHQiLCJvblBhZ2VDaGFuZ2UiLCJvblJvd0NsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/coins.js\n"));

/***/ })

});