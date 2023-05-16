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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_fetchCoins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/fetchCoins */ \"./pages/api/fetchCoins.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 80%;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  height: \",\n        \"px;\\n  width: 100%;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst columns = [\n    {\n        field: \"name\",\n        headerName: \"Name\",\n        width: 250\n    },\n    {\n        field: \"symbol\",\n        headerName: \"Icon\",\n        width: 130\n    },\n    {\n        field: \"current_price\",\n        headerName: \"Current Price\",\n        width: 250\n    },\n    {\n        field: \"highestPrice\",\n        headerName: \"Highest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"lowestPrice\",\n        headerName: \"Lowest Price (24h)\",\n        width: 250\n    },\n    {\n        field: \"priceChange\",\n        headerName: \"Price Change (24h)\",\n        width: 250\n    }\n];\nconst FullScreenContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = FullScreenContainer;\nconst CenteredContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = CenteredContainer;\nconst TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2(), (param)=>{\n    let { tableHeight  } = param;\n    return tableHeight;\n});\n_c2 = TableWrapper;\nconst LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = LoadingContainer;\nconst Coins = ()=>{\n    _s();\n    const [coins, setCoins] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [tableHeight, setTableHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchDataP = async ()=>{\n            try {\n                const coinsData = await (0,_api_fetchCoins__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"coins/markets\");\n                setCoins(coinsData);\n            } catch (error) {\n                console.error(\"Error fetching coins:\", error);\n            }\n        };\n        fetchDataP();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const updateTableHeight = ()=>{\n            const newTableHeight = window.innerHeight - 64; // Adjust the height based on your layout\n            setTableHeight(newTableHeight);\n        };\n        window.addEventListener(\"resize\", updateTableHeight);\n        updateTableHeight();\n        return ()=>{\n            window.removeEventListener(\"resize\", updateTableHeight);\n        };\n    }, []);\n    const handleRowClick = (params)=>{\n        const coinId = params.row.id;\n        router.push(\"/coins/\".concat(coinId));\n    };\n    const handlePageChange = (params)=>{\n        const { page , pageSize  } = params;\n        const newTableHeight = window.innerHeight - 64 - 56 * (pageSize + 1); // Adjust the height based on your layout and table controls height\n        setTableHeight(newTableHeight);\n    // Add your custom pagination logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FullScreenContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CenteredContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TableWrapper, {\n                tableHeight: tableHeight,\n                children: coins.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__.DataGrid, {\n                    rows: coins,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 5\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        5,\n                        10\n                    ],\n                    autoHeight: true,\n                    onPageChange: handlePageChange,\n                    onRowClick: handleRowClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingContainer, {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alkinoos Fragiadis\\\\Documents\\\\GitHub\\\\Cyberscope-Proxy\\\\Frontend\\\\pages\\\\coins.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Coins, \"q8p+4MXHZ0OrR3dSNqD2ye/zOdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c4 = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"FullScreenContainer\");\n$RefreshReg$(_c1, \"CenteredContainer\");\n$RefreshReg$(_c2, \"TableWrapper\");\n$RefreshReg$(_c3, \"LoadingContainer\");\n$RefreshReg$(_c4, \"Coins\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7O01BSHBCVztBQXVFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb2lucy5qcz84YzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vYXBpL2ZldGNoQ29pbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDI1MCB9LFxyXG4gIHsgZmllbGQ6ICdzeW1ib2wnLCBoZWFkZXJOYW1lOiAnSWNvbicsIHdpZHRoOiAxMzAgfSxcclxuICB7IGZpZWxkOiAnY3VycmVudF9wcmljZScsIGhlYWRlck5hbWU6ICdDdXJyZW50IFByaWNlJywgd2lkdGg6IDI1MCB9LFxyXG4gIHsgZmllbGQ6ICdoaWdoZXN0UHJpY2UnLCBoZWFkZXJOYW1lOiAnSGlnaGVzdCBQcmljZSAoMjRoKScsIHdpZHRoOiAyNTAgfSxcclxuICB7IGZpZWxkOiAnbG93ZXN0UHJpY2UnLCBoZWFkZXJOYW1lOiAnTG93ZXN0IFByaWNlICgyNGgpJywgd2lkdGg6IDI1MCB9LFxyXG4gIHsgZmllbGQ6ICdwcmljZUNoYW5nZScsIGhlYWRlck5hbWU6ICdQcmljZSBDaGFuZ2UgKDI0aCknLCB3aWR0aDogMjUwIH0sXHJcbl07XHJcblxyXG5jb25zdCBGdWxsU2NyZWVuQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENlbnRlcmVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODAlO1xyXG5gO1xyXG5jb25zdCBUYWJsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogJHsoeyB0YWJsZUhlaWdodCB9KSA9PiB0YWJsZUhlaWdodH1weDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IExvYWRpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBDb2lucyA9ICgpID0+IHtcclxuICBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGFibGVIZWlnaHQsIHNldFRhYmxlSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhUCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb2luc0RhdGEgPSBhd2FpdCBmZXRjaERhdGEoJ2NvaW5zL21hcmtldHMnKTtcclxuICAgICAgICBzZXRDb2lucyhjb2luc0RhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvaW5zOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGFQKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlVGFibGVIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1RhYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNjQ7IC8vIEFkanVzdCB0aGUgaGVpZ2h0IGJhc2VkIG9uIHlvdXIgbGF5b3V0XHJcbiAgICAgIHNldFRhYmxlSGVpZ2h0KG5ld1RhYmxlSGVpZ2h0KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVRhYmxlSGVpZ2h0KTtcclxuICAgIHVwZGF0ZVRhYmxlSGVpZ2h0KCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVRhYmxlSGVpZ2h0KTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb3dDbGljayA9IChwYXJhbXMpID0+IHtcclxuICAgIGNvbnN0IGNvaW5JZCA9IHBhcmFtcy5yb3cuaWQ7XHJcbiAgICByb3V0ZXIucHVzaChgL2NvaW5zLyR7Y29pbklkfWApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2UsIHBhZ2VTaXplIH0gPSBwYXJhbXM7XHJcbiAgICBjb25zdCBuZXdUYWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDY0IC0gNTYgKiAocGFnZVNpemUgKyAxKTsgLy8gQWRqdXN0IHRoZSBoZWlnaHQgYmFzZWQgb24geW91ciBsYXlvdXQgYW5kIHRhYmxlIGNvbnRyb2xzIGhlaWdodFxyXG4gICAgc2V0VGFibGVIZWlnaHQobmV3VGFibGVIZWlnaHQpO1xyXG4gICAgLy8gQWRkIHlvdXIgY3VzdG9tIHBhZ2luYXRpb24gbG9naWMgaGVyZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnVsbFNjcmVlbkNvbnRhaW5lcj5cclxuICAgICAgPENlbnRlcmVkQ29udGFpbmVyPlxyXG4gICAgICA8VGFibGVXcmFwcGVyIHRhYmxlSGVpZ2h0PXt0YWJsZUhlaWdodH0+XHJcbiAgICAgICAge2NvaW5zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgcm93cz17Y29pbnN9XHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZT17e1xyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogNSB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzUsIDEwXX1cclxuICAgICAgICAgICAgYXV0b0hlaWdodFxyXG4gICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uUm93Q2xpY2s9e2hhbmRsZVJvd0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExvYWRpbmdDb250YWluZXI+TG9hZGluZy4uLjwvTG9hZGluZ0NvbnRhaW5lcj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1RhYmxlV3JhcHBlcj5cclxuICAgICAgPC9DZW50ZXJlZENvbnRhaW5lcj5cclxuICAgIDwvRnVsbFNjcmVlbkNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29pbnM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsInN0eWxlZCIsIkRhdGFHcmlkIiwidXNlUm91dGVyIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiRnVsbFNjcmVlbkNvbnRhaW5lciIsImRpdiIsIkNlbnRlcmVkQ29udGFpbmVyIiwiVGFibGVXcmFwcGVyIiwidGFibGVIZWlnaHQiLCJMb2FkaW5nQ29udGFpbmVyIiwiQ29pbnMiLCJjb2lucyIsInNldENvaW5zIiwic2V0VGFibGVIZWlnaHQiLCJyb3V0ZXIiLCJmZXRjaERhdGFQIiwiY29pbnNEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXBkYXRlVGFibGVIZWlnaHQiLCJuZXdUYWJsZUhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSb3dDbGljayIsInBhcmFtcyIsImNvaW5JZCIsInJvdyIsImlkIiwicHVzaCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwicGFnZVNpemUiLCJsZW5ndGgiLCJyb3dzIiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2VTaXplT3B0aW9ucyIsImF1dG9IZWlnaHQiLCJvblBhZ2VDaGFuZ2UiLCJvblJvd0NsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/coins.js\n"));

/***/ })

});