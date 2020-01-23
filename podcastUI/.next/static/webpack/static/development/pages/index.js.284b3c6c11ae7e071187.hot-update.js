webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/podcastCard.tsx":
/*!************************************!*\
  !*** ./components/podcastCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/components/podcastCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // style={{width: "100%", height: "10vh"}}

var PodcastCard = function PodcastCard(_ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      id = _ref.id;
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      margin: "5vh 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    style: {
      height: '20vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    style: {
      height: '100%',
      objectFit: "cover"
    },
    src: cardUrlHandler(image.url),
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, description)));
};

var cardUrlHandler = function cardUrlHandler(url) {
  return "http://localhost:1337/".concat(url);
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastCard);

/***/ })

})
//# sourceMappingURL=index.js.284b3c6c11ae7e071187.hot-update.js.map