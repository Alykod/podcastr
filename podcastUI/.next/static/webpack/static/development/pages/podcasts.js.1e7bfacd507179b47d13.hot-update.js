webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./components/audio/audioPlayer.tsx":
/*!******************************************!*\
  !*** ./components/audio/audioPlayer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAudioPlayer */ "./components/audio/useAudioPlayer.ts");
/* harmony import */ var _audioBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioBar */ "./components/audio/audioBar.tsx");
/* harmony import */ var _PlayPause__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayPause */ "./components/audio/PlayPause.tsx");
/* harmony import */ var _audio_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio.scss */ "./components/audio/audio.scss");
/* harmony import */ var _audio_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_audio_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/components/audio/audioPlayer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var AudioPlayer = function AudioPlayer(_ref) {
  var url = _ref.url,
      id = _ref.id,
      mime = _ref.mime;

  var _useAudioPlayer = Object(_useAudioPlayer__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      currentTime = _useAudioPlayer.currentTime,
      duration = _useAudioPlayer.duration,
      playing = _useAudioPlayer.playing,
      setPlaying = _useAudioPlayer.setPlaying,
      setClickedTime = _useAudioPlayer.setClickedTime; // const [volume, setVolume] = useState(0.5);
  // const [playRate, setPlayRate] = useState(1);
  // const [play, setPlay] = useState(false);


  return (// <div >
    //     <audio controls>
    //         <source src={url} type={mime} id={id} />
    //     </audio>
    // </div>
    __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("audio", {
      id: "audio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("source", {
      src: cardUrlHandler(url),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("div", {
      className: "controls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, playing ? __jsx(_PlayPause__WEBPACK_IMPORTED_MODULE_4__["Pause"], {
      handleClick: function handleClick() {
        return setPlaying(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }) : __jsx(_PlayPause__WEBPACK_IMPORTED_MODULE_4__["Play"], {
      handleClick: function handleClick() {
        return setPlaying(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx(_audioBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      duration: duration,
      currentTime: currentTime,
      onTimeUpdate: setClickedTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

var cardUrlHandler = function cardUrlHandler(url) {
  return "http://localhost:1337/".concat(url);
};

/***/ })

})
//# sourceMappingURL=podcasts.js.1e7bfacd507179b47d13.hot-update.js.map