webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./components/audio/useAudioPlayer.ts":
/*!********************************************!*\
  !*** ./components/audio/useAudioPlayer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useAudioPlayer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      duration = _useState[0],
      setDuration = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      currentTime = _useState2[0],
      setCurrentTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playing = _useState3[0],
      setPlaying = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      clickedTime = _useState4[0],
      setClickedTime = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var audio = document.getElementById("audio");

    var setAudioMeta = function setAudioMeta() {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    var setAudioTime = function setAudioTime() {
      return setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadeddata", setAudioMeta);
    audio.addEventListener("timeupdate", setAudioTime);
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return function () {
      audio.removeEventListener("loadeddata", setAudioMeta);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });
  return {
    currentTime: currentTime,
    duration: duration,
    playing: playing,
    setPlaying: setPlaying,
    setClickedTime: setClickedTime
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useAudioPlayer);

/***/ })

})
//# sourceMappingURL=podcasts.js.2ad6261b297e4ce65e6a.hot-update.js.map