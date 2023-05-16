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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_fetchCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/fetchCoins */ \"./pages/api/fetchCoins.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst columns = [\n    {\n        field: \"name\",\n        headerName: \"Name\",\n        width: 250\n    },\n    {\n        field: \"symbol\",\n        headerName: \"Icon\",\n        width: 130\n    },\n    {\n        field: \"current_price\",\n        headerName: \"Current Price\",\n        width: 250\n    },\n    {\n        field: \"highestPrice\",\n        headerName: \"Highest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"lowestPrice\",\n        headerName: \"Lowest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"priceChange\",\n        headerName: \"Price Change (24h)\",\n        width: 250\n    }\n];\nconst Coins = ()=>{\n    _s();\n    const [coins, setCoins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tableHeight, setTableHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchDataP = async ()=>{\n            try {\n                const coinsData = await (0,_api_fetchCoins__WEBPACK_IMPORTED_MODULE_2__.fetchData)(\"coins/markets\");\n                setCoins(coinsData);\n            } catch (error) {\n                console.error(\"Error fetching coins:\", error);\n            }\n        };\n        fetchDataP();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateTableHeight = ()=>{\n            const newTableHeight = window.innerHeight - 64; // Adjust the height based on your layout\n            setTableHeight(newTableHeight);\n        };\n        window.addEventListener(\"resize\", updateTableHeight);\n        updateTableHeight();\n        return ()=>{\n            window.removeEventListener(\"resize\", updateTableHeight);\n        };\n    }, []);\n    const handleRowClick = (params)=>{\n        const coinId = params.row.id;\n        router.push(\"/coins/\".concat(coinId));\n    };\n    const handlePageChange = (params)=>{\n        const { page , pageSize  } = params;\n        const newTableHeight = window.innerHeight - 64 - 56 * (pageSize + 1); // Adjust the height based on your layout and table controls height\n        setTableHeight(newTableHeight);\n    // Add your custom pagination logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"calc(100vh - 64px)\" // Adjust the height as needed\n        ,\n        width: \"fit-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: tableHeight,\n                width: \"100%\"\n            },\n            children: coins.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid, {\n                rows: coins,\n                columns: columns,\n                initialState: {\n                    pagination: {\n                        paginationModel: {\n                            page: 0,\n                            pageSize: 5\n                        }\n                    }\n                },\n                pageSizeOptions: [\n                    5,\n                    10\n                ],\n                autoHeight: true,\n                onPageChange: handlePageChange,\n                onRowClick: handleRowClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                lineNumber: 71,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Coins, \"q8p+4MXHZ0OrR3dSNqD2ye/zOdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\nvar _c;\n$RefreshReg$(_c, \"Coins\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb2lucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDQztBQUNkO0FBQ2E7QUFDSjtBQUNKO0FBRXBDLE1BQU1PLFVBQVU7SUFDZDtRQUFFQyxPQUFPO1FBQVFDLFlBQVk7UUFBUUMsT0FBTztJQUFJO0lBQ2hEO1FBQUVGLE9BQU87UUFBVUMsWUFBWTtRQUFRQyxPQUFPO0lBQUk7SUFDbEQ7UUFBRUYsT0FBTztRQUFpQkMsWUFBWTtRQUFpQkMsT0FBTztJQUFJO0lBQ2xFO1FBQUVGLE9BQU87UUFBZ0JDLFlBQVk7UUFBdUJDLE9BQU87SUFBSTtJQUN2RTtRQUFFRixPQUFPO1FBQWVDLFlBQVk7UUFBc0JDLE9BQU87SUFBSTtJQUNyRTtRQUFFRixPQUFPO1FBQWVDLFlBQVk7UUFBc0JDLE9BQU87SUFBSTtDQUN0RTtBQUVELE1BQU1DLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1lLFNBQVNYLHNEQUFTQTtJQUV4QkwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1pQixhQUFhLFVBQVk7WUFDN0IsSUFBSTtnQkFDRixNQUFNQyxZQUFZLE1BQU1oQiwwREFBU0EsQ0FBQztnQkFDbENXLFNBQVNLO1lBQ1gsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QztRQUNGO1FBRUFGO0lBQ0YsR0FBRyxFQUFFO0lBRUxqQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXFCLG9CQUFvQixJQUFNO1lBQzlCLE1BQU1DLGlCQUFpQkMsT0FBT0MsV0FBVyxHQUFHLElBQUkseUNBQXlDO1lBQ3pGVCxlQUFlTztRQUNqQjtRQUVBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUNsQ0E7UUFFQSxPQUFPLElBQU07WUFDWEUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTSxpQkFBaUIsQ0FBQ0MsU0FBVztRQUNqQyxNQUFNQyxTQUFTRCxPQUFPRSxHQUFHLENBQUNDLEVBQUU7UUFDNUJmLE9BQU9nQixJQUFJLENBQUMsVUFBaUIsT0FBUEg7SUFDeEI7SUFFQSxNQUFNSSxtQkFBbUIsQ0FBQ0wsU0FBVztRQUNuQyxNQUFNLEVBQUVNLEtBQUksRUFBRUMsU0FBUSxFQUFFLEdBQUdQO1FBQzNCLE1BQU1OLGlCQUFpQkMsT0FBT0MsV0FBVyxHQUFHLEtBQUssS0FBTVcsQ0FBQUEsV0FBVyxJQUFJLG1FQUFtRTtRQUN6SXBCLGVBQWVPO0lBQ2Ysd0NBQXdDO0lBQzFDO0lBRUEscUJBQ0UsOERBQUNoQiw4Q0FBR0E7UUFDRjhCLFNBQVE7UUFDUkMsZ0JBQWU7UUFDZkMsWUFBVztRQUNYQyxRQUFPLHFCQUFxQiw4QkFBOEI7O1FBQzFEN0IsT0FBTTtrQkFFTiw0RUFBQzhCO1lBQUlDLE9BQU87Z0JBQUVGLFFBQVF6QjtnQkFBYUosT0FBTztZQUFPO3NCQUM5Q0UsTUFBTThCLE1BQU0sR0FBRyxrQkFDZCw4REFBQ3RDLHNEQUFRQTtnQkFDUHVDLE1BQU0vQjtnQkFDTkwsU0FBU0E7Z0JBQ1RxQyxjQUFjO29CQUNaQyxZQUFZO3dCQUNWQyxpQkFBaUI7NEJBQUVaLE1BQU07NEJBQUdDLFVBQVU7d0JBQUU7b0JBQzFDO2dCQUNGO2dCQUNBWSxpQkFBaUI7b0JBQUM7b0JBQUc7aUJBQUc7Z0JBQ3hCQyxVQUFVO2dCQUNWQyxjQUFjaEI7Z0JBQ2RpQixZQUFZdkI7Ozs7OzBDQUdkLDhEQUFDYTswQkFBSTs7Ozs7eUJBQ047Ozs7Ozs7Ozs7O0FBSVQ7R0F6RU03Qjs7UUFHV04sa0RBQVNBOzs7S0FIcEJNO0FBMkVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvaW5zLmpzPzhjOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGkvZmV0Y2hDb2lucyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgeyBmaWVsZDogJ25hbWUnLCBoZWFkZXJOYW1lOiAnTmFtZScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAnc3ltYm9sJywgaGVhZGVyTmFtZTogJ0ljb24nLCB3aWR0aDogMTMwIH0sXHJcbiAgeyBmaWVsZDogJ2N1cnJlbnRfcHJpY2UnLCBoZWFkZXJOYW1lOiAnQ3VycmVudCBQcmljZScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAnaGlnaGVzdFByaWNlJywgaGVhZGVyTmFtZTogJ0hpZ2hlc3QgUHJpY2UgKDI0aCknLCB3aWR0aDogMjUwIH0sXHJcbiAgeyBmaWVsZDogJ2xvd2VzdFByaWNlJywgaGVhZGVyTmFtZTogJ0xvd2VzdCBQcmljZSAoMjRoKScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAncHJpY2VDaGFuZ2UnLCBoZWFkZXJOYW1lOiAnUHJpY2UgQ2hhbmdlICgyNGgpJywgd2lkdGg6IDI1MCB9LFxyXG5dO1xyXG5cclxuY29uc3QgQ29pbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvaW5zLCBzZXRDb2luc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RhYmxlSGVpZ2h0LCBzZXRUYWJsZUhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YVAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29pbnNEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCdjb2lucy9tYXJrZXRzJyk7XHJcbiAgICAgICAgc2V0Q29pbnMoY29pbnNEYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb2luczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhUCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZVRhYmxlSGVpZ2h0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUYWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDY0OyAvLyBBZGp1c3QgdGhlIGhlaWdodCBiYXNlZCBvbiB5b3VyIGxheW91dFxyXG4gICAgICBzZXRUYWJsZUhlaWdodChuZXdUYWJsZUhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVUYWJsZUhlaWdodCk7XHJcbiAgICB1cGRhdGVUYWJsZUhlaWdodCgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVUYWJsZUhlaWdodCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUm93Q2xpY2sgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBjb25zdCBjb2luSWQgPSBwYXJhbXMucm93LmlkO1xyXG4gICAgcm91dGVyLnB1c2goYC9jb2lucy8ke2NvaW5JZH1gKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgeyBwYWdlLCBwYWdlU2l6ZSB9ID0gcGFyYW1zO1xyXG4gICAgY29uc3QgbmV3VGFibGVIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA2NCAtIDU2ICogKHBhZ2VTaXplICsgMSk7IC8vIEFkanVzdCB0aGUgaGVpZ2h0IGJhc2VkIG9uIHlvdXIgbGF5b3V0IGFuZCB0YWJsZSBjb250cm9scyBoZWlnaHRcclxuICAgIHNldFRhYmxlSGVpZ2h0KG5ld1RhYmxlSGVpZ2h0KTtcclxuICAgIC8vIEFkZCB5b3VyIGN1c3RvbSBwYWdpbmF0aW9uIGxvZ2ljIGhlcmVcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIGhlaWdodD1cImNhbGMoMTAwdmggLSA2NHB4KVwiIC8vIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZFxyXG4gICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcclxuICAgID5cclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHRhYmxlSGVpZ2h0LCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgIHtjb2lucy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgIHJvd3M9e2NvaW5zfVxyXG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU9e3tcclxuICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDUgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s1LCAxMF19XHJcbiAgICAgICAgICAgIGF1dG9IZWlnaHRcclxuICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblJvd0NsaWNrPXtoYW5kbGVSb3dDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvaW5zO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJSZWFjdCIsIkRhdGFHcmlkIiwidXNlUm91dGVyIiwiQm94IiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiQ29pbnMiLCJjb2lucyIsInNldENvaW5zIiwidGFibGVIZWlnaHQiLCJzZXRUYWJsZUhlaWdodCIsInJvdXRlciIsImZldGNoRGF0YVAiLCJjb2luc0RhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJ1cGRhdGVUYWJsZUhlaWdodCIsIm5ld1RhYmxlSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJvd0NsaWNrIiwicGFyYW1zIiwiY29pbklkIiwicm93IiwiaWQiLCJwdXNoIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJkaXYiLCJzdHlsZSIsImxlbmd0aCIsInJvd3MiLCJpbml0aWFsU3RhdGUiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbk1vZGVsIiwicGFnZVNpemVPcHRpb25zIiwiYXV0b0hlaWdodCIsIm9uUGFnZUNoYW5nZSIsIm9uUm93Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coins.js\n"));

/***/ })

});