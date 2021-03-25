webpackHotUpdate_N_E("pages/janus",{

/***/ "./components/janus/DropDownMenu.jsx":
/*!*******************************************!*\
  !*** ./components/janus/DropDownMenu.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ \"./node_modules/@material-ui/core/esm/ClickAwayListener/index.js\");\n/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grow */ \"./node_modules/@material-ui/core/esm/Grow/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Popper */ \"./node_modules/@material-ui/core/esm/Popper/index.js\");\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuList */ \"./node_modules/@material-ui/core/esm/MenuList/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ \"./node_modules/@material-ui/icons/ArrowDropDown.js\");\n/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _DropDownMenu_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DropDownMenu.scss */ \"./components/janus/DropDownMenu.scss\");\n/* harmony import */ var _DropDownMenu_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_DropDownMenu_scss__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _DropDownMenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DropDownMenuItem */ \"./components/janus/DropDownMenuItem.jsx\");\n/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Clear */ \"./node_modules/@material-ui/icons/Clear.js\");\n/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Check */ \"./node_modules/@material-ui/icons/Check.js\");\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/katie/Developer/entsoc-website/components/janus/DropDownMenu.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__[\"makeStyles\"])(function (theme) {\n  return {\n    toggleDropdown: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({\n      marginLeft: '20px',\n      paddingLeft: '20px',\n      paddingRight: '20px',\n      textTransform: 'none',\n      fontStyle: 'normal',\n      fontWeight: 'normal',\n      fontSize: '15px',\n      lineHeight: '18px',\n      boxShadow: [\"inset 2px 0 0 0px #E7E8EF\", // gray left border\n      \"inset -2px 0 0 0px #E7E8EF\", // gray right border\n      \"inset 0 2px 0 0px #E7E8EF\", // gray top border\n      \"inset 0 -2px 0 0px #E7E8EF\" // gray bottom border\n      ],\n      borderRadius: 0\n    }, theme.breakpoints.down('sm'), {\n      marginTop: 10\n    }),\n    menuPopper: {\n      zIndex: 1\n    },\n    menuList: {\n      width: '100%',\n      minWidth: '100%'\n    }\n  };\n});\n\nvar DropDownMenu = function DropDownMenu(props) {\n  _s();\n\n  var title = props.title,\n      items = props.items,\n      onSelect = props.onSelect,\n      multiselectable = props.multiselectable,\n      initialSelectedIndices = props.initialSelectedIndices,\n      getSelectedMenuItemColour = props.getSelectedMenuItemColour,\n      scrollable = props.scrollable;\n  var styles = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),\n      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(initialSelectedIndices),\n      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState3, 2),\n      selectedItemIndices = _React$useState4[0],\n      setSelectedItemIndices = _React$useState4[1];\n\n  var anchorRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(null);\n\n  var handleToggle = function handleToggle() {\n    setOpen(function (prevOpen) {\n      return !prevOpen;\n    });\n  };\n\n  var handleClose = function handleClose(event) {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  var handleItemSelection = function handleItemSelection(selectedItemIndex) {\n    if (!multiselectable) {\n      setSelectedItemIndices([selectedItemIndex]);\n    } else if (selectedItemIndices.includes(selectedItemIndex)) {\n      setSelectedItemIndices(selectedItemIndices.filter(function (i) {\n        return i !== selectedItemIndex;\n      }));\n    } else {\n      setSelectedItemIndices([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(selectedItemIndices), [selectedItemIndex]));\n    }\n  };\n\n  var handleItemClick = function handleItemClick(event, index) {\n    var selectedItem = items[index];\n    onSelect(selectedItem.key);\n    handleItemSelection(index);\n    handleClose(event);\n  };\n\n  var handleListKeyDown = function handleListKeyDown(event) {\n    if (event.key === \"Tab\") {\n      event.preventDefault();\n      setOpen(false);\n    }\n  }; // return focus to the button when we transitioned from !open -> open\n\n\n  var prevOpen = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(open);\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    if (prevOpen.current === true && open === false) {\n      anchorRef.current.focus();\n    }\n\n    prevOpen.current = open;\n  }, [open]);\n\n  var growProps = function growProps(_ref) {\n    var placement = _ref.placement;\n    return _objectSpread(_objectSpread({}, scrollable && {\n      maxHeight: '500px',\n      overflow: 'scroll'\n    }), {}, {\n      transformOrigin: placement === \"bottom\" ? \"center bottom\" : \"center bottom\"\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: styles.toggleDropdown,\n    ref: anchorRef,\n    \"aria-controls\": open ? \"menu-list-grow\" : undefined,\n    \"aria-haspopup\": \"true\",\n    onClick: handleToggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, title, \" \", __jsx(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 17\n    }\n  })), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    open: open,\n    anchorEl: anchorRef.current,\n    role: undefined,\n    transition: true,\n    className: styles.menuPopper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, function (_ref2) {\n    var TransitionProps = _ref2.TransitionProps,\n        placement = _ref2.placement;\n    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, TransitionProps, {\n      style: growProps(placement),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 11\n      }\n    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onClickAway: handleClose,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 15\n      }\n    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      className: styles.menuList,\n      disablePadding: true,\n      dense: true,\n      disableGutters: true,\n      autoFocusItem: open,\n      id: \"menu-list-grow\",\n      onKeyDown: handleListKeyDown,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 17\n      }\n    }, items && items.map(function (item, index) {\n      return __jsx(_DropDownMenuItem__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n        key: item.key,\n        selected: selectedItemIndices.includes(index),\n        onClick: function onClick(event) {\n          return handleItemClick(event, index);\n        },\n        text: item.text,\n        SelectedIcon: multiselectable ? _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_16___default.a : _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_17___default.a,\n        selectedColour: getSelectedMenuItemColour(index, item.key),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 21\n        }\n      });\n    })))));\n  }));\n};\n\n_s(DropDownMenu, \"8R3PmZ6TH/P2G3DjBGeEbkTRAog=\", false, function () {\n  return [useStyles];\n});\n\n_c = DropDownMenu;\nDropDownMenu.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,\n  items: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({\n    key: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,\n    text: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired\n  })),\n  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired,\n  multiselectable: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,\n  initialSelectedIndices: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number),\n  getSelectedMenuItemColour: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired // will pass index, item.key to this function\n\n};\nDropDownMenu.defaultProps = {\n  multiselectable: false,\n  initialSelectedIndices: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDownMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"DropDownMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qYW51cy9Ecm9wRG93bk1lbnUuanN4PzQ0MWEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidG9nZ2xlRHJvcGRvd24iLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1hcmdpblRvcCIsIm1lbnVQb3BwZXIiLCJ6SW5kZXgiLCJtZW51TGlzdCIsIndpZHRoIiwibWluV2lkdGgiLCJEcm9wRG93bk1lbnUiLCJwcm9wcyIsInRpdGxlIiwiaXRlbXMiLCJvblNlbGVjdCIsIm11bHRpc2VsZWN0YWJsZSIsImluaXRpYWxTZWxlY3RlZEluZGljZXMiLCJnZXRTZWxlY3RlZE1lbnVJdGVtQ29sb3VyIiwic2Nyb2xsYWJsZSIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdGVkSXRlbUluZGljZXMiLCJzZXRTZWxlY3RlZEl0ZW1JbmRpY2VzIiwiYW5jaG9yUmVmIiwidXNlUmVmIiwiaGFuZGxlVG9nZ2xlIiwicHJldk9wZW4iLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlSXRlbVNlbGVjdGlvbiIsInNlbGVjdGVkSXRlbUluZGV4IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiaGFuZGxlSXRlbUNsaWNrIiwiaW5kZXgiLCJzZWxlY3RlZEl0ZW0iLCJrZXkiLCJoYW5kbGVMaXN0S2V5RG93biIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiZm9jdXMiLCJncm93UHJvcHMiLCJwbGFjZW1lbnQiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsInRyYW5zZm9ybU9yaWdpbiIsInVuZGVmaW5lZCIsIlRyYW5zaXRpb25Qcm9wcyIsIm1hcCIsIml0ZW0iLCJ0ZXh0IiwiQ2xlYXJJY29uIiwiQ2hlY2tJY29uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzaGFwZSIsImZ1bmMiLCJib29sIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLGtCQUFjLEVBQUU7QUFDZEMsZ0JBQVUsRUFBRSxNQURBO0FBRVpDLGlCQUFXLEVBQUUsTUFGRDtBQUdaQyxrQkFBWSxFQUFFLE1BSEY7QUFJWkMsbUJBQWEsRUFBRSxNQUpIO0FBS1pDLGVBQVMsRUFBRSxRQUxDO0FBTVpDLGdCQUFVLEVBQUUsUUFOQTtBQU9aQyxjQUFRLEVBQUUsTUFQRTtBQVFaQyxnQkFBVSxFQUFFLE1BUkE7QUFTWkMsZUFBUyxFQUFFLDhCQUNvQjtBQURwQixvQ0FFcUI7QUFGckIsbUNBR29CO0FBSHBCLG1DQUlxQjtBQUpyQixPQVRDO0FBZVpDLGtCQUFZLEVBQUU7QUFmRixPQWdCWFgsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQWhCVyxFQWdCb0I7QUFDOUJDLGVBQVMsRUFBRTtBQURtQixLQWhCcEIsQ0FEdUI7QUFxQnJDQyxjQUFVLEVBQUU7QUFDVkMsWUFBTSxFQUFFO0FBREUsS0FyQnlCO0FBd0JyQ0MsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxNQURDO0FBRVJDLGNBQVEsRUFBRTtBQUZGO0FBeEIyQixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUE4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QUE7QUFBQSxRQURRO0FBQUEsS0FBVixDQVZGLENBREYsQ0FERixDQUpGLENBREQ7QUFBQSxHQURILENBVkYsQ0FERjtBQStDRCxDQXhIRDs7R0FBTWpDLFk7VUFXV3RCLFM7OztLQVhYc0IsWTtBQTBITkEsWUFBWSxDQUFDa0QsU0FBYixHQUF5QjtBQUN2QmhELE9BQUssRUFBRWlELGtEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREQ7QUFFdkJsRCxPQUFLLEVBQUVnRCxrREFBUyxDQUFDRyxPQUFWLENBQWtCSCxrREFBUyxDQUFDSSxLQUFWLENBQWdCO0FBQ3ZDdEIsT0FBRyxFQUFFa0Isa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEaUI7QUFFdkNOLFFBQUksRUFBRUksa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFGZ0IsR0FBaEIsQ0FBbEIsQ0FGZ0I7QUFNdkJqRCxVQUFRLEVBQUUrQyxrREFBUyxDQUFDSyxJQUFWLENBQWVILFVBTkY7QUFPdkJoRCxpQkFBZSxFQUFFOEMsa0RBQVMsQ0FBQ00sSUFQSjtBQVF2Qm5ELHdCQUFzQixFQUFFNkMsa0RBQVMsQ0FBQ0csT0FBVixDQUFrQkgsa0RBQVMsQ0FBQ08sTUFBNUIsQ0FSRDtBQVN2Qm5ELDJCQUF5QixFQUFFNEMsa0RBQVMsQ0FBQ0ssSUFBVixDQUFlSCxVQVRuQixDQVMrQjs7QUFUL0IsQ0FBekI7QUFZQXJELFlBQVksQ0FBQzJELFlBQWIsR0FBNEI7QUFDMUJ0RCxpQkFBZSxFQUFFLEtBRFM7QUFFMUJDLHdCQUFzQixFQUFFO0FBRkUsQ0FBNUI7QUFLZU4sMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2phbnVzL0Ryb3BEb3duTWVudS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCBHcm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBQb3BwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcbmltcG9ydCBNZW51TGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdCc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vRHJvcERvd25NZW51LnNjc3MnO1xuaW1wb3J0IERyb3BEb3duTWVudUl0ZW0gZnJvbSBcImNvbXBvbmVudHMvamFudXMvRHJvcERvd25NZW51SXRlbVwiO1xuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdG9nZ2xlRHJvcGRvd246IHtcbiAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICcyMHB4JyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICBib3hTaGFkb3c6IFtcbiAgICAgIGBpbnNldCAycHggMCAwIDBweCAjRTdFOEVGYCwgLy8gZ3JheSBsZWZ0IGJvcmRlclxuICAgICAgYGluc2V0IC0ycHggMCAwIDBweCAjRTdFOEVGYCwgLy8gZ3JheSByaWdodCBib3JkZXJcbiAgICAgIGBpbnNldCAwIDJweCAwIDBweCAjRTdFOEVGYCwgLy8gZ3JheSB0b3AgYm9yZGVyXG4gICAgICBgaW5zZXQgMCAtMnB4IDAgMHB4ICNFN0U4RUZgLCAvLyBncmF5IGJvdHRvbSBib3JkZXJcbiAgICBdLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgfSxcbiAgfSxcbiAgbWVudVBvcHBlcjoge1xuICAgIHpJbmRleDogMSxcbiAgfSxcbiAgbWVudUxpc3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1pbldpZHRoOiAnMTAwJSdcbiAgfVxufSkpO1xuXG5jb25zdCBEcm9wRG93bk1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGl0ZW1zLFxuICAgIG9uU2VsZWN0LFxuICAgIG11bHRpc2VsZWN0YWJsZSxcbiAgICBpbml0aWFsU2VsZWN0ZWRJbmRpY2VzLFxuICAgIGdldFNlbGVjdGVkTWVudUl0ZW1Db2xvdXIsXG4gICAgc2Nyb2xsYWJsZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkSXRlbUluZGljZXMsIHNldFNlbGVjdGVkSXRlbUluZGljZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFNlbGVjdGVkSW5kaWNlcyk7XG5cbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSXRlbVNlbGVjdGlvbiA9IChzZWxlY3RlZEl0ZW1JbmRleCkgPT4ge1xuICAgIGlmICghbXVsdGlzZWxlY3RhYmxlKSB7XG4gICAgICBzZXRTZWxlY3RlZEl0ZW1JbmRpY2VzKFtzZWxlY3RlZEl0ZW1JbmRleF0pXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEl0ZW1JbmRpY2VzLmluY2x1ZGVzKHNlbGVjdGVkSXRlbUluZGV4KSkge1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtSW5kaWNlcyhzZWxlY3RlZEl0ZW1JbmRpY2VzLmZpbHRlcihpID0+IGkgIT09IHNlbGVjdGVkSXRlbUluZGV4KSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtSW5kaWNlcyhbLi4uc2VsZWN0ZWRJdGVtSW5kaWNlcywgc2VsZWN0ZWRJdGVtSW5kZXhdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgb25TZWxlY3Qoc2VsZWN0ZWRJdGVtLmtleSk7XG4gICAgaGFuZGxlSXRlbVNlbGVjdGlvbihpbmRleCk7XG4gICAgaGFuZGxlQ2xvc2UoZXZlbnQpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlTGlzdEtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmV0dXJuIGZvY3VzIHRvIHRoZSBidXR0b24gd2hlbiB3ZSB0cmFuc2l0aW9uZWQgZnJvbSAhb3BlbiAtPiBvcGVuXG4gIGNvbnN0IHByZXZPcGVuID0gUmVhY3QudXNlUmVmKG9wZW4pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuO1xuICB9LCBbb3Blbl0pO1xuXG5cbiAgY29uc3QgZ3Jvd1Byb3BzID0gKHtwbGFjZW1lbnR9KSA9PiAoe1xuICAgIC4uLihzY3JvbGxhYmxlICYmIHtcbiAgICAgIG1heEhlaWdodDogJzUwMHB4JyxcbiAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJ1xuICAgIH0pLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogcGxhY2VtZW50ID09PSBcImJvdHRvbVwiID8gXCJjZW50ZXIgYm90dG9tXCIgOiBcImNlbnRlciBib3R0b21cIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVEcm9wZG93bn1cbiAgICAgICAgcmVmPXthbmNob3JSZWZ9XG4gICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyBcIm1lbnUtbGlzdC1ncm93XCIgOiB1bmRlZmluZWR9XG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9IDxBcnJvd0Ryb3BEb3duSWNvbi8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxQb3BwZXIgb3Blbj17b3Blbn0gYW5jaG9yRWw9e2FuY2hvclJlZi5jdXJyZW50fSByb2xlPXt1bmRlZmluZWR9IHRyYW5zaXRpb24gY2xhc3NOYW1lPXtzdHlsZXMubWVudVBvcHBlcn0+XG4gICAgICAgIHsoe1RyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50fSkgPT4gKFxuICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgICAgc3R5bGU9e2dyb3dQcm9wcyhwbGFjZW1lbnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgPE1lbnVMaXN0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51TGlzdH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVQYWRkaW5nXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUd1dHRlcnNcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e29wZW59XG4gICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW1zICYmXG4gICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wRG93bk1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJdGVtSW5kaWNlcy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVJdGVtQ2xpY2soZXZlbnQsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWRJY29uPXttdWx0aXNlbGVjdGFibGUgPyBDbGVhckljb24gOiBDaGVja0ljb259XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvdXI9e2dldFNlbGVjdGVkTWVudUl0ZW1Db2xvdXIoaW5kZXgsIGl0ZW0ua2V5KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRHJvcERvd25NZW51LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAga2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSksXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtdWx0aXNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBpbml0aWFsU2VsZWN0ZWRJbmRpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgZ2V0U2VsZWN0ZWRNZW51SXRlbUNvbG91cjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gd2lsbCBwYXNzIGluZGV4LCBpdGVtLmtleSB0byB0aGlzIGZ1bmN0aW9uXG59O1xuXG5Ecm9wRG93bk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBtdWx0aXNlbGVjdGFibGU6IGZhbHNlLFxuICBpbml0aWFsU2VsZWN0ZWRJbmRpY2VzOiBbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25NZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/janus/DropDownMenu.jsx\n");

/***/ })

})