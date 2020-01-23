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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/components/podcastCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // style={{width: "100%", height: "10vh"}}

var PodcastCard = function PodcastCard(_ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      id = _ref.id;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/podcasts?title=".concat(title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return handleSelectedPodcast();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      margin: "5vh 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    style: {
      height: '20vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    style: {
      height: '100%',
      objectFit: "cover",
      width: '100%'
    },
    src: cardUrlHandler(image.url),
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, description)))));
};

var cardUrlHandler = function cardUrlHandler(url) {
  return "http://localhost:1337/".concat(url);
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastCard);

/***/ })

})
//# sourceMappingURL=index.js.d9b5e979983e6aec841d.hot-update.js.map