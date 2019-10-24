webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/layout/TeamPage.jsx":
/*!****************************************!*\
  !*** ./components/layout/TeamPage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/SectionTitle */ "./components/common/SectionTitle.jsx");
/* harmony import */ var _common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/TeamGallery */ "./components/common/TeamGallery.jsx");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _TeamPage_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TeamPage.scss */ "./components/layout/TeamPage.scss");
/* harmony import */ var _TeamPage_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_TeamPage_scss__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/home/nathan/workspace/entsoc/entsoc-website/components/layout/TeamPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var groupPhoto = 'static/team_images/group_photo.jpg';
var W18 = 'static/team_images/W18/';
var S19 = 'static/team_images/S19/';
var F19 = 'static/team_images/F19/';

var JPGPath = function JPGPath(termPath) {
  return function (fullName) {
    return termPath + fullName + '.jpg';
  };
};

var W18JPGPath = JPGPath(W18);
var S19JPGPath = JPGPath(S19);
var F19JPGPath = JPGPath(F19); // F19

var leadership = {
  W18: [{
    image: W18JPGPath('FardeenChowdhury'),
    name: 'Fardeen Chowdhury',
    title: 'Co-president/ VP S&F'
  }, {
    image: W18JPGPath('ChrisTran'),
    name: 'Chris Tran',
    title: 'Co-president/ VP Design'
  }, {
    image: W18JPGPath('SaraAhmed'),
    name: 'Sara Ahmed',
    title: 'VP Marketing'
  }, {
    image: W18JPGPath('AmyTai'),
    name: 'Amy Tai',
    title: 'VP Operations'
  }, {
    image: W18JPGPath('NathanKnight'),
    name: 'Nathan Knight',
    title: 'VP Technical'
  }],
  S19: [{
    image: S19JPGPath('AmyTai'),
    name: 'Amy Tai',
    title: 'Co-President'
  }, {
    image: S19JPGPath('SaraAhmed'),
    name: 'Sara Ahmed',
    title: 'Co-President'
  }, {
    image: S19JPGPath('NathanKoo'),
    name: 'Nathan Koo',
    title: 'VP Operations'
  }, {
    image: S19JPGPath('ZoeNahmaish'),
    name: 'Zoe Nahmiash',
    title: 'VP S&F'
  }, {
    image: S19JPGPath('RidhiPatel'),
    name: 'Ridhi Patel',
    title: 'VP Design'
  }, {
    image: S19JPGPath('NathanKnight'),
    name: 'Nathan Knight',
    title: 'VP Technical'
  }],
  F19: [{
    image: F19JPGPath('NathanKoo'),
    name: 'Nathan Koo',
    title: 'Co-President'
  }, {
    image: F19JPGPath('ZoeNahmiash'),
    name: 'Zoe Nahmiash',
    title: 'Co-President'
  }, {
    image: F19JPGPath('NathanKnight'),
    name: 'Nathan Knight',
    title: 'VP Technical'
  }]
};
var dev = {
  W18: [{
    image: W18JPGPath('AhrarMonsur'),
    name: 'Ahrar Monsur',
    title: 'Project Janus Lead'
  }, {
    image: W18JPGPath('JillWang'),
    name: 'Jill Wang',
    title: 'Developer'
  }, {
    image: W18JPGPath('KatieDSouza'),
    name: 'Katie D\'Souza',
    title: 'Developer'
  }, {
    image: W18JPGPath('LeeMa'),
    name: 'Lee Ma',
    title: 'Developer'
  }, {
    image: W18JPGPath('RiyaWalia'),
    name: 'Riya Walia',
    title: 'Developer'
  }, {
    image: W18JPGPath('SaumyaGupta'),
    name: 'Saumya Gupta',
    title: 'Developer'
  }, {
    image: W18JPGPath('YousufAfroze'),
    name: 'Yousuf Afroze',
    title: 'Developer'
  }, {
    image: W18JPGPath('BryenXie'),
    name: 'Bryen Xie',
    title: 'Developer'
  }],
  S19: [{
    image: S19JPGPath('KatieDSouza'),
    name: 'Katie D\'Souza',
    title: 'Project Janus Lead'
  }, {
    image: S19JPGPath('JillWang'),
    name: 'Jill Wang',
    title: 'Website Lead'
  }, {
    image: S19JPGPath('Ildar Nasirov'),
    name: 'Ildar Nasirov',
    title: 'Developer'
  }, {
    image: S19JPGPath('LeeMa'),
    name: 'Lee Ma',
    title: 'Developer'
  }],
  F19: [{
    image: F19JPGPath('KatieDSouza'),
    name: 'Katie D\'Souza',
    title: 'Project Janus Lead'
  }, {
    image: F19JPGPath('JillWang'),
    name: 'Jill Wang',
    title: 'Website Lead'
  }, {
    image: F19JPGPath('LeeMa'),
    name: 'Lee Ma',
    title: 'Developer'
  }]
};
var marketing = {
  W18: [{
    image: W18JPGPath('MeganDietrich'),
    name: 'Megan Dietrich',
    title: 'Project Lead'
  }, {
    image: W18JPGPath('EmilyLiu'),
    name: 'Emily Liu',
    title: 'Project Lead'
  }, {
    image: W18JPGPath('KyleRowe'),
    name: 'Kyle Rowe',
    title: 'Marketing Coordinator'
  }, {
    image: W18JPGPath('KalilMagtoto'),
    name: 'Kalil Magtoto',
    title: 'Marketing Coordinator'
  }],
  S19: [{
    image: S19JPGPath('LunaKawano'),
    name: 'Luna Kawano',
    title: 'Marketing Growth Lead'
  }, {
    image: S19JPGPath('KyleRowe'),
    name: 'Kyle Rowe',
    title: 'Marketing Analytics Lead '
  }, {
    image: S19JPGPath('MeganDietrich'),
    name: 'Megan Dietrich',
    title: 'Content Marketing Lead'
  }, {
    image: S19JPGPath('MithushaSasitharan'),
    name: 'Mithusha Sasitharan',
    title: 'Marketing Coordinator'
  }, {
    image: S19JPGPath('EmilyLiu'),
    name: 'Emily Liu',
    title: 'Marketing Coordinator'
  }],
  F19: [{
    image: F19JPGPath('RebeccaFu'),
    name: 'Rebecca Fu',
    title: 'Marketing Coordinator'
  }, {
    image: F19JPGPath('JeffreyJiang'),
    name: 'Jeffrey Jiang',
    title: 'Marketing Coordinator'
  }]
};
var SF = {
  W18: [{
    image: W18JPGPath('ZoeNahmiash'),
    name: 'Zoe Nahmiash',
    title: 'Project Lead'
  }, {
    image: W18JPGPath('AkashBedi'),
    name: 'Akash Bedi',
    title: 'Project Lead'
  }, {
    image: W18JPGPath('VinitSoni'),
    name: 'Vinit Soni',
    title: 'S&F Coordinator'
  }, {
    image: W18JPGPath('TiffanyLi'),
    name: 'Tiffany Li',
    title: 'S&F Coordinator'
  }],
  S19: [{
    image: S19JPGPath('TiffanyLi'),
    name: 'Tiffany Li',
    title: 'S&F Coordinator'
  }],
  F19: [{
    image: F19JPGPath('GogilanSelvarajah'),
    name: 'Gogilan Selvarajah',
    title: 'S&F Coordinator'
  }, {
    image: F19JPGPath('Kanish'),
    name: 'Kanish',
    title: 'S&F Coordinator'
  }, {
    image: F19JPGPath('ReemElkateb'),
    name: 'Reem Elkateb',
    title: 'S&F Coordinator'
  }, {
    image: F19JPGPath('TarekElNaggar'),
    name: 'Tarek El Naggar',
    title: 'S&F Coordinator'
  }]
};
var design = {
  W18: [{
    image: W18JPGPath('CelineLee'),
    name: 'Celine Lee ',
    title: 'Project Lead'
  }, {
    image: W18JPGPath('DanielLee'),
    name: 'Daniel Lee',
    title: 'Design Coordinator'
  }, {
    image: W18JPGPath('EmmaTsai'),
    name: 'Emma Tsai',
    title: 'Design Coordinator'
  }],
  S19: [{
    image: S19JPGPath('NikharDhingra'),
    name: 'Nikhar Dhingra',
    title: 'Design Lead'
  }, {
    image: S19JPGPath('EmmaTsai'),
    name: 'Emma Tsai',
    title: 'Design Coordinator'
  }],
  F19: [{
    image: F19JPGPath('EmilyLiu'),
    name: 'Emily Liu',
    title: 'Design Coordinator'
  }, {
    image: F19JPGPath('CatherineHoang'),
    name: 'CatherineHoang',
    title: 'Design Coordinator'
  }]
};
var operations = {
  W18: [{
    image: W18JPGPath('MichelBourgeois'),
    name: 'Michel Bourgeois',
    title: 'Operations Coordinator'
  }, {
    image: W18JPGPath('NathanKoo'),
    name: 'Nathan Koo',
    title: 'Operations Coordinator'
  }, {
    image: W18JPGPath('RebeccaFu'),
    name: 'Rebecca Fu',
    title: 'Operations Coordinator'
  }],
  S19: [{
    image: S19JPGPath('JohnMcElroy'),
    name: 'John McElroy',
    title: 'Event Outreach Lead'
  }, {
    image: S19JPGPath('GogilanSelvarajah'),
    name: 'Gogilan Selvarajah',
    title: 'Operations Coordinator'
  }, {
    image: S19JPGPath('RebeccaFu'),
    name: 'Rebecca Fu',
    title: 'Operations Coordinator'
  }, {
    image: S19JPGPath('NishantHooda'),
    name: 'Nishant Hooda',
    title: 'Operations Coordinator'
  }, {
    image: S19JPGPath('BlessingUkiri'),
    name: 'Blessing Ukiri',
    title: 'Operations Coordinator'
  }],
  F19: [{
    image: F19JPGPath('NerishaRamakrishnan'),
    name: 'Nerisha Ramakrishnan',
    title: 'Operations Coordinator'
  }]
};

var createTeam = function createTeam(term, value, idx) {
  return __jsx(TabPanel, {
    value: value,
    index: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "team-sections-container",
    id: "vertical-tabpanel-".concat(term),
    "aria-labelledby": "vertical-tab-".concat(term),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Leadership"), __jsx(_common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    members: leadership[term],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(_common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Creative"), __jsx(_common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    members: design[term],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx(_common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Marketing"), __jsx(_common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    members: marketing[term],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(_common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Sponsorship & Finance"), __jsx(_common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    members: SF[term],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx(_common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Technical"), __jsx(_common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    members: dev[term],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(_common_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Operations"), __jsx(_common_TeamGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
    members: operations[term],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })));
};

var createProp = function createProp(term) {
  return {
    id: "vertical-tab-".concat(term),
    'aria-controls': "vertical-tabpanel-".concat(term),
    className: 'team-tab'
  };
};

function TeamPage() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var isMobile = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])('(max-width:768pxpx)');
  return __jsx("div", {
    className: "team-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("img", {
    id: "groupPhoto",
    src: groupPhoto,
    alt: "Team Photo, Fall 2018",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx("div", {
    className: "intro-text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3",
    color: "primary",
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "About Us"), __jsx("div", {
    className: "body-text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "We\u2019re a group of students at the University of Waterloo that is dedicated to promoting entrepreneurship in the Kitchener-Waterloo region."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5",
    align: "center",
    style: {
      marginTop: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "We\u2019re proud to be an extremely diverse group of people with have that span design, marketing, operations, development, finance, and sponsorship."))), __jsx("div", {
    className: "meet-the-team-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3",
    color: "primary",
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Meet the Team"), __jsx("div", {
    className: "team-tabs-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "team-tabs",
    orientation: isMobile || true ? 'vertical' : 'horizontal',
    variant: isMobile || true ? 'scrollable' : 'fullWidth',
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: "F19"
  }, createProp('F19'), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: "S19"
  }, createProp('S19'), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: "W18"
  }, createProp('W18'), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }))), createTeam('F19', value, 0), createTeam('S19', value, 1), createTeam('W18', value, 2))));
}

/***/ })

})
//# sourceMappingURL=about.js.396a4b9474e7dd6d11b4.hot-update.js.map