webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./components/audio/PlayPause.tsx":
false,

/***/ "./components/audio/audioBar.tsx":
false,

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
/* harmony import */ var _audio_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.scss */ "./components/audio/audio.scss");
/* harmony import */ var _audio_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_audio_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/components/audio/audioPlayer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var AudioPlayer = function AudioPlayer(_ref) {
  var url = _ref.url,
      id = _ref.id,
      mime = _ref.mime;
  // const {currentTime, duration, playing, setPlaying, setClickedTime} = useAudioPlayer();
  // const [volume, setVolume] = useState(0.5);
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
      controls: true,
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
    })))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

var cardUrlHandler = function cardUrlHandler(url) {
  return "http://localhost:1337/".concat(url);
};

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
false,

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js":
false,

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false

})
//# sourceMappingURL=podcasts.js.7d657472f713c87bacb0.hot-update.js.map