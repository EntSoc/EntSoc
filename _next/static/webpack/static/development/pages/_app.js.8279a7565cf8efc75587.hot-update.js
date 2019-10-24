webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Theme.js":
/*!*****************************!*\
  !*** ./components/Theme.js ***!
  \*****************************/
/*! exports provided: Colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony import */ var _material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/index */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0__);

var Colors = {
  main: '#B31E36',
  dark: '#4f0e18',
  divider: '#D3D3D3'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles_index__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: Colors.main,
      dark: Colors.dark
    }
  },
  overrides: {
    MuiButtonBase: {
      root: {
        display: 'block',
        width: '100%',
        justifyContent: 'flex-end'
      }
    },
    MuiDrawer: {
      paper: {
        background: Colors.main,
        color: 'white',
        top: '20vh',
        display: 'inline-block',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      },
      paperAnchorRight: {
        left: '20vh'
      }
    },
    MuiTab: {
      root: {
        backgroundColor: '#fff',
        "&$selected": {
          backgroundColor: Colors.main,
          color: 'white'
        }
      }
    },
    MuiTabs: {
      vertical: {
        borderRight: "1px solid ".concat(Colors.divider),
        width: '100%'
      },
      flexContainerVertical: {
        maxWidth: '95%'
      }
    },
    MuiSvgIcon: {
      root: {
        width: '50%',
        height: '50%'
      }
    },
    MuiFab: {
      extended: {
        backgroundColor: '#EB5660',
        padding: '0 24px',
        '&:hover': {
          backgroundColor: '#FB7D85'
        }
      },
      label: {
        color: '#FFF',
        fontSize: 17
      }
    }
  },
  typography: {
    fontFamily: ['"Montserrat", sans-serif'],
    title: {
      fontWeight: 400,
      fontSize: 27,
      lineHeight: 1.5
    },
    caption: {
      fontSize: 14,
      lineHeight: 1.4
    },
    h3: {
      fontWeight: 600,
      fontSize: 35,
      lineHeight: 1.2
    },
    // for button
    h4: {
      fontSize: 21,
      color: '#fff'
    },
    h5: {
      fontSize: 22,
      lineHeight: 1.4,
      fontWeight: 500
    },
    h6: {
      fontSize: 22,
      lineHeight: 1.3
    },
    body1: {
      fontWeight: 400,
      fontSize: 25,
      lineHeight: 3,
      color: '#fff'
    },
    body2: {
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.4
    },
    overline: {
      fontSize: 14,
      lineHeight: 1.4
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 400
    },
    subtitle2: {
      fontSize: 13,
      lineHeight: 1.4,
      fontWeight: 400,
      color: '#fff'
    }
  }
}));

/***/ })

})
//# sourceMappingURL=_app.js.8279a7565cf8efc75587.hot-update.js.map