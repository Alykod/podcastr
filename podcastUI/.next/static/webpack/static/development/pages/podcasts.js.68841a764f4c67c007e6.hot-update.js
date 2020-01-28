webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./components/audio/audioBar.tsx":
/*!***************************************!*\
  !*** ./components/audio/audioBar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/components/audio/audioBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Bar(props) {
  var duration = props.duration,
      currentTime = props.currentTime,
      onTimeUpdate = props.onTimeUpdate;

  var calculateTime = function calculateTime(e) {
    var clickPositionInPage = e.pageX;
    var bar = document.querySelector(".bar__progress");
    var barStart = bar.getBoundingClientRect().left + window.scrollX;
    var barWidth = bar.offsetWidth;
    var clickPositionInBar = clickPositionInPage - barStart;
    var timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
    debugger;
  };

  var handleTimeDrag = function handleTimeDrag(e) {
    onTimeUpdate(calculateTime(e));
  };

  return __jsx("div", {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, currentTime), __jsx("progress", {
    id: "progress",
    className: "progressBar",
    value: currentTime,
    max: duration,
    onMouseDown: function onMouseDown(e) {
      return handleTimeDrag(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, duration));
}

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ })

})
//# sourceMappingURL=podcasts.js.68841a764f4c67c007e6.hot-update.js.map