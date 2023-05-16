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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_fetchCoins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/fetchCoins */ \"./pages/api/fetchCoins.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: \",\n        \"px;\\n  width: 100%;\\n\\n  .MuiDataGrid-cell {\\n    color: white;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  color: white;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst columns = [\n    {\n        field: \"name\",\n        headerName: \"Name\",\n        width: 250\n    },\n    {\n        field: \"symbol\",\n        headerName: \"Icon\",\n        width: 130\n    },\n    {\n        field: \"current_price\",\n        headerName: \"Current Price\",\n        width: 250\n    },\n    {\n        field: \"highestPrice\",\n        headerName: \"Highest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"lowestPrice\",\n        headerName: \"Lowest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"priceChange\",\n        headerName: \"Price Change (24h)\",\n        width: 250\n    }\n];\nconst FullScreenContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = FullScreenContainer;\nconst CenteredContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = CenteredContainer;\nconst TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), (param)=>{\n    let { tableHeight  } = param;\n    return tableHeight;\n});\n_c2 = TableWrapper;\nconst LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = LoadingContainer;\nconst Coins = ()=>{\n    _s();\n    const [coins, setCoins] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [tableHeight, setTableHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchDataP = async ()=>{\n            try {\n                const coinsData = await (0,_api_fetchCoins__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"coins/markets\");\n                setCoins(coinsData);\n            } catch (error) {\n                console.error(\"Error fetching coins:\", error);\n            }\n        };\n        fetchDataP();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateTableHeight = ()=>{\n            const newTableHeight = window.innerHeight - 64; // Adjust the height based on your layout\n            setTableHeight(newTableHeight);\n        };\n        window.addEventListener(\"resize\", updateTableHeight);\n        updateTableHeight();\n        return ()=>{\n            window.removeEventListener(\"resize\", updateTableHeight);\n        };\n    }, []);\n    const handleRowClick = (params)=>{\n        const coinId = params.row.id;\n        router.push(\"/coins/\".concat(coinId));\n    };\n    const handlePageChange = (params)=>{\n        const { page , pageSize  } = params;\n        const newTableHeight = window.innerHeight - 64 - 56 * (pageSize + 1); // Adjust the height based on your layout and table controls height\n        setTableHeight(newTableHeight);\n    // Add your custom pagination logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FullScreenContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CenteredContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TableWrapper, {\n                tableHeight: tableHeight,\n                children: coins.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__.DataGrid, {\n                    rows: coins,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 5\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        5,\n                        10\n                    ],\n                    autoHeight: true,\n                    onPageChange: handlePageChange,\n                    onRowClick: handleRowClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingContainer, {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Coins, \"q8p+4MXHZ0OrR3dSNqD2ye/zOdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c4 = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FullScreenContainer\");\n$RefreshReg$(_c1, \"CenteredContainer\");\n$RefreshReg$(_c2, \"TableWrapper\");\n$RefreshReg$(_c3, \"LoadingContainer\");\n$RefreshReg$(_c4, \"Coins\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7O01BSHBCVztBQXVFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb2lucy5qcz84YzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vYXBpL2ZldGNoQ29pbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDI1MCB9LFxyXG4gIHsgZmllbGQ6ICdzeW1ib2wnLCBoZWFkZXJOYW1lOiAnSWNvbicsIHdpZHRoOiAxMzAgfSxcclxuICB7IGZpZWxkOiAnY3VycmVudF9wcmljZScsIGhlYWRlck5hbWU6ICdDdXJyZW50IFByaWNlJywgd2lkdGg6IDI1MCB9LFxyXG4gIHsgZmllbGQ6ICdoaWdoZXN0UHJpY2UnLCBoZWFkZXJOYW1lOiAnSGlnaGVzdCBQcmljZSAoMjRoKScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAnbG93ZXN0UHJpY2UnLCBoZWFkZXJOYW1lOiAnTG93ZXN0IFByaWNlICgyNGgpJywgd2lkdGg6IDI1MCB9LFxyXG4gIHsgZmllbGQ6ICdwcmljZUNoYW5nZScsIGhlYWRlck5hbWU6ICdQcmljZSBDaGFuZ2UgKDI0aCknLCB3aWR0aDogMjUwIH0sXHJcbl07XHJcblxyXG5jb25zdCBGdWxsU2NyZWVuQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENlbnRlcmVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODAlO1xyXG5gO1xyXG5cclxuY29uc3QgVGFibGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6ICR7KHsgdGFibGVIZWlnaHQgfSkgPT4gdGFibGVIZWlnaHR9cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5NdWlEYXRhR3JpZC1jZWxsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IENvaW5zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2lucywgc2V0Q29pbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0YWJsZUhlaWdodCwgc2V0VGFibGVIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGFQID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvaW5zRGF0YSA9IGF3YWl0IGZldGNoRGF0YSgnY29pbnMvbWFya2V0cycpO1xyXG4gICAgICAgIHNldENvaW5zKGNvaW5zRGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29pbnM6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YVAoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVUYWJsZUhlaWdodCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbmV3VGFibGVIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA2NDsgLy8gQWRqdXN0IHRoZSBoZWlnaHQgYmFzZWQgb24geW91ciBsYXlvdXRcclxuICAgICAgc2V0VGFibGVIZWlnaHQobmV3VGFibGVIZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlVGFibGVIZWlnaHQpO1xyXG4gICAgdXBkYXRlVGFibGVIZWlnaHQoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlVGFibGVIZWlnaHQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJvd0NsaWNrID0gKHBhcmFtcykgPT4ge1xyXG4gICAgY29uc3QgY29pbklkID0gcGFyYW1zLnJvdy5pZDtcclxuICAgIHJvdXRlci5wdXNoKGAvY29pbnMvJHtjb2luSWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IHsgcGFnZSwgcGFnZVNpemUgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IG5ld1RhYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNjQgLSA1NiAqIChwYWdlU2l6ZSArIDEpOyAvLyBBZGp1c3QgdGhlIGhlaWdodCBiYXNlZCBvbiB5b3VyIGxheW91dCBhbmQgdGFibGUgY29udHJvbHMgaGVpZ2h0XHJcbiAgICBzZXRUYWJsZUhlaWdodChuZXdUYWJsZUhlaWdodCk7XHJcbiAgICAvLyBBZGQgeW91ciBjdXN0b20gcGFnaW5hdGlvbiBsb2dpYyBoZXJlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGdWxsU2NyZWVuQ29udGFpbmVyPlxyXG4gICAgICA8Q2VudGVyZWRDb250YWluZXI+ICAgICAgXHJcbiAgICAgIDxUYWJsZVdyYXBwZXIgdGFibGVIZWlnaHQ9e3RhYmxlSGVpZ2h0fT5cclxuICAgICAgICB7Y29pbnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICByb3dzPXtjb2luc31cclxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlPXt7XHJcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGVsOiB7IHBhZ2U6IDAsIHBhZ2VTaXplOiA1IH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbNSwgMTBdfVxyXG4gICAgICAgICAgICBhdXRvSGVpZ2h0XHJcbiAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgb25Sb3dDbGljaz17aGFuZGxlUm93Q2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TG9hZGluZ0NvbnRhaW5lcj5Mb2FkaW5nLi4uPC9Mb2FkaW5nQ29udGFpbmVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvVGFibGVXcmFwcGVyPlxyXG4gICAgICA8L0NlbnRlcmVkQ29udGFpbmVyPlxyXG4gICAgPC9GdWxsU2NyZWVuQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2lucztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hEYXRhIiwic3R5bGVkIiwiRGF0YUdyaWQiLCJ1c2VSb3V0ZXIiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJGdWxsU2NyZWVuQ29udGFpbmVyIiwiZGl2IiwiQ2VudGVyZWRDb250YWluZXIiLCJUYWJsZVdyYXBwZXIiLCJ0YWJsZUhlaWdodCIsIkxvYWRpbmdDb250YWluZXIiLCJDb2lucyIsImNvaW5zIiwic2V0Q29pbnMiLCJzZXRUYWJsZUhlaWdodCIsInJvdXRlciIsImZldGNoRGF0YVAiLCJjb2luc0RhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJ1cGRhdGVUYWJsZUhlaWdodCIsIm5ld1RhYmxlSGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJvd0NsaWNrIiwicGFyYW1zIiwiY29pbklkIiwicm93IiwiaWQiLCJwdXNoIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJwYWdlU2l6ZSIsImxlbmd0aCIsInJvd3MiLCJpbml0aWFsU3RhdGUiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbk1vZGVsIiwicGFnZVNpemVPcHRpb25zIiwiYXV0b0hlaWdodCIsIm9uUGFnZUNoYW5nZSIsIm9uUm93Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coins.js\n"));

/***/ })

});