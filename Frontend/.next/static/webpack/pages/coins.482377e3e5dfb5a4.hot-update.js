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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_fetchCoins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/fetchCoins */ \"./pages/api/fetchCoins.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: \",\n        \"px;\\n  width: 100%;\\n\\n  .MuiDataGrid-root .MuiDataGrid-columnHeader {\\n    color: white;\\n  }\\n\\n  .MuiDataGrid-root .MuiDataGrid-columnHeaderTitle {\\n    color: white;\\n  }\\n\\n  .MuiDataGrid-root .MuiDataGrid-cell {\\n    color: white;\\n  }\\n\\n  .MuiDataGrid-root .MuiTablePagination-caption,\\n  .MuiDataGrid-root .MuiTablePagination-select,\\n  .MuiDataGrid-root .MuiTablePagination-actions button {\\n    color: white;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  color: white;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst columns = [\n    {\n        field: \"name\",\n        headerName: \"Name\",\n        width: 250\n    },\n    {\n        field: \"symbol\",\n        headerName: \"Icon\",\n        width: 130\n    },\n    {\n        field: \"current_price\",\n        headerName: \"Current Price\",\n        width: 250\n    },\n    {\n        field: \"highestPrice\",\n        headerName: \"Highest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"lowestPrice\",\n        headerName: \"Lowest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"priceChange\",\n        headerName: \"Price Change (24h)\",\n        width: 250\n    }\n];\nconst FullScreenContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = FullScreenContainer;\nconst CenteredContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = CenteredContainer;\nconst TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), (param)=>{\n    let { tableHeight  } = param;\n    return tableHeight;\n});\n_c2 = TableWrapper;\nconst LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = LoadingContainer;\nconst Coins = ()=>{\n    _s();\n    const [coins, setCoins] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [tableHeight, setTableHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchDataP = async ()=>{\n            try {\n                const coinsData = await (0,_api_fetchCoins__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"coins/markets\");\n                setCoins(coinsData);\n            } catch (error) {\n                console.error(\"Error fetching coins:\", error);\n            }\n        };\n        fetchDataP();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateTableHeight = ()=>{\n            const newTableHeight = window.innerHeight - 64; // Adjust the height based on your layout\n            setTableHeight(newTableHeight);\n        };\n        window.addEventListener(\"resize\", updateTableHeight);\n        updateTableHeight();\n        return ()=>{\n            window.removeEventListener(\"resize\", updateTableHeight);\n        };\n    }, []);\n    const handleRowClick = (params)=>{\n        const coinId = params.row.id;\n        router.push(\"/coins/\".concat(coinId));\n    };\n    const handlePageChange = (params)=>{\n        const { page , pageSize  } = params;\n        const newTableHeight = window.innerHeight - 64 - 56 * (pageSize + 1); // Adjust the height based on your layout and table controls height\n        setTableHeight(newTableHeight);\n    // Add your custom pagination logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FullScreenContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CenteredContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TableWrapper, {\n                tableHeight: tableHeight,\n                children: coins.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__.DataGrid, {\n                    rows: coins,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 5\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        5,\n                        10\n                    ],\n                    autoHeight: true,\n                    onPageChange: handlePageChange,\n                    onRowClick: handleRowClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                    lineNumber: 107,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingContainer, {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                    lineNumber: 121,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Coins, \"q8p+4MXHZ0OrR3dSNqD2ye/zOdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c4 = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FullScreenContainer\");\n$RefreshReg$(_c1, \"CenteredContainer\");\n$RefreshReg$(_c2, \"TableWrapper\");\n$RefreshReg$(_c3, \"LoadingContainer\");\n$RefreshReg$(_c4, \"Coins\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0E7OztNQUhwQlc7QUF1RU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29pbnMuanM/OGM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL2FwaS9mZXRjaENvaW5zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgeyBmaWVsZDogJ25hbWUnLCBoZWFkZXJOYW1lOiAnTmFtZScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAnc3ltYm9sJywgaGVhZGVyTmFtZTogJ0ljb24nLCB3aWR0aDogMTMwIH0sXHJcbiAgeyBmaWVsZDogJ2N1cnJlbnRfcHJpY2UnLCBoZWFkZXJOYW1lOiAnQ3VycmVudCBQcmljZScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAnaGlnaGVzdFByaWNlJywgaGVhZGVyTmFtZTogJ0hpZ2hlc3QgUHJpY2UgKDI0aCknLCB3aWR0aDogMjUwIH0sXHJcbiAgeyBmaWVsZDogJ2xvd2VzdFByaWNlJywgaGVhZGVyTmFtZTogJ0xvd2VzdCBQcmljZSAoMjRoKScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAncHJpY2VDaGFuZ2UnLCBoZWFkZXJOYW1lOiAnUHJpY2UgQ2hhbmdlICgyNGgpJywgd2lkdGg6IDI1MCB9LFxyXG5dO1xyXG5cclxuY29uc3QgRnVsbFNjcmVlbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDZW50ZXJlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuYDtcclxuXHJcbmNvbnN0IFRhYmxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAkeyh7IHRhYmxlSGVpZ2h0IH0pID0+IHRhYmxlSGVpZ2h0fXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuTXVpRGF0YUdyaWQtcm9vdCAuTXVpRGF0YUdyaWQtY29sdW1uSGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5NdWlEYXRhR3JpZC1yb290IC5NdWlEYXRhR3JpZC1jb2x1bW5IZWFkZXJUaXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuTXVpRGF0YUdyaWQtcm9vdCAuTXVpRGF0YUdyaWQtY2VsbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuTXVpRGF0YUdyaWQtcm9vdCAuTXVpVGFibGVQYWdpbmF0aW9uLWNhcHRpb24sXHJcbiAgLk11aURhdGFHcmlkLXJvb3QgLk11aVRhYmxlUGFnaW5hdGlvbi1zZWxlY3QsXHJcbiAgLk11aURhdGFHcmlkLXJvb3QgLk11aVRhYmxlUGFnaW5hdGlvbi1hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9hZGluZ0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBDb2lucyA9ICgpID0+IHtcclxuICBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGFibGVIZWlnaHQsIHNldFRhYmxlSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhUCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb2luc0RhdGEgPSBhd2FpdCBmZXRjaERhdGEoJ2NvaW5zL21hcmtldHMnKTtcclxuICAgICAgICBzZXRDb2lucyhjb2luc0RhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvaW5zOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGFQKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlVGFibGVIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1RhYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNjQ7IC8vIEFkanVzdCB0aGUgaGVpZ2h0IGJhc2VkIG9uIHlvdXIgbGF5b3V0XHJcbiAgICAgIHNldFRhYmxlSGVpZ2h0KG5ld1RhYmxlSGVpZ2h0KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVRhYmxlSGVpZ2h0KTtcclxuICAgIHVwZGF0ZVRhYmxlSGVpZ2h0KCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVRhYmxlSGVpZ2h0KTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb3dDbGljayA9IChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IGNvaW5JZCA9IHBhcmFtcy5yb3cuaWQ7XHJcbiAgICByb3V0ZXIucHVzaChgL2NvaW5zLyR7Y29pbklkfWApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2UsIHBhZ2VTaXplIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBuZXdUYWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDY0IC0gNTYgKiAocGFnZVNpemUgKyAxKTsgLy8gQWRqdXN0IHRoZSBoZWlnaHQgYmFzZWQgb24geW91ciBsYXlvdXQgYW5kIHRhYmxlIGNvbnRyb2xzIGhlaWdodFxyXG4gICAgc2V0VGFibGVIZWlnaHQobmV3VGFibGVIZWlnaHQpO1xyXG4gICAgLy8gQWRkIHlvdXIgY3VzdG9tIHBhZ2luYXRpb24gbG9naWMgaGVyZVxyXG4gIH07XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPEZ1bGxTY3JlZW5Db250YWluZXI+XHJcbiAgICAgIDxDZW50ZXJlZENvbnRhaW5lcj5cclxuICAgICAgICA8VGFibGVXcmFwcGVyIHRhYmxlSGVpZ2h0PXt0YWJsZUhlaWdodH0+XHJcbiAgICAgICAgICB7Y29pbnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgcm93cz17Y29pbnN9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICBpbml0aWFsU3RhdGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGVsOiB7IHBhZ2U6IDAsIHBhZ2VTaXplOiA1IH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbNSwgMTBdfVxyXG4gICAgICAgICAgICAgIGF1dG9IZWlnaHRcclxuICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25Sb3dDbGljaz17aGFuZGxlUm93Q2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TG9hZGluZ0NvbnRhaW5lcj5Mb2FkaW5nLi4uPC9Mb2FkaW5nQ29udGFpbmVyPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1RhYmxlV3JhcHBlcj5cclxuICAgICAgPC9DZW50ZXJlZENvbnRhaW5lcj5cclxuICAgIDwvRnVsbFNjcmVlbkNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29pbnM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsInN0eWxlZCIsIkRhdGFHcmlkIiwidXNlUm91dGVyIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiRnVsbFNjcmVlbkNvbnRhaW5lciIsImRpdiIsIkNlbnRlcmVkQ29udGFpbmVyIiwiVGFibGVXcmFwcGVyIiwidGFibGVIZWlnaHQiLCJMb2FkaW5nQ29udGFpbmVyIiwiQ29pbnMiLCJjb2lucyIsInNldENvaW5zIiwic2V0VGFibGVIZWlnaHQiLCJyb3V0ZXIiLCJmZXRjaERhdGFQIiwiY29pbnNEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXBkYXRlVGFibGVIZWlnaHQiLCJuZXdUYWJsZUhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSb3dDbGljayIsInBhcmFtcyIsImNvaW5JZCIsInJvdyIsImlkIiwicHVzaCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJsZW5ndGgiLCJyb3dzIiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2VTaXplT3B0aW9ucyIsImF1dG9IZWlnaHQiLCJvblBhZ2VDaGFuZ2UiLCJvblJvd0NsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/coins.js\n"));

/***/ })

});