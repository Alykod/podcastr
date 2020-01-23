webpackHotUpdate("static/development/pages/latest.js",{

/***/ "./pages/latest.js":
/*!*************************!*\
  !*** ./pages/latest.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _services_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/query */ "./services/query.js");
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/pages/latest.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Latest = function Latest() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_services_query__WEBPACK_IMPORTED_MODULE_3__["LatestPodcastQuery"], {
    variables: {
      someId: "1"
    }
  }),
      data = _useQuery.data;

  console.log(newDAta);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "This is the about page"), __jsx("a", {
    className: "button is-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "test")));
};

/* harmony default export */ __webpack_exports__["default"] = (Latest);

/***/ })

})
//# sourceMappingURL=latest.js.68a6206f0c1e5c6a45b7.hot-update.js.map