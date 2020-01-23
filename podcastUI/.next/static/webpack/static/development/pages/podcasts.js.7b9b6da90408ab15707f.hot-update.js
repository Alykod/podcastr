webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./pages/podcasts.tsx":
/*!****************************!*\
  !*** ./pages/podcasts.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _services_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/query */ "./services/query.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/pages/podcasts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var PodcastPage = function PodcastPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_services_query__WEBPACK_IMPORTED_MODULE_4__["SelectedPodcastQuery"], {
    variables: {
      someTitle: router.query.title
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      podcast = _useState[0],
      setPodcast = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    debugger;

    if (data && !lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEqual(data.podcasts, podcast)) {
      setPodcast(data);
    }
  }, [data]);

  var handleLayout = function handleLayout() {
    return __jsx("section", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_6__["Tile"], {
      isAncestor: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_6__["Tile"], {
      isParent: true,
      isVertical: true,
      "is-4": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("img", {
      style: {
        height: '100%',
        objectFit: "cover",
        width: '100%'
      },
      src: cardUrlHandler(podcast.image.url),
      alt: podcast.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_6__["Tile"], {
      isParent: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_6__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, podcast.title), __jsx("audio", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("source", {
      src: cardUrlHandler(podcast.audioFile.url),
      type: podcast.audioFile.mime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_6__["Content"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, podcast.description))))));
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, podcast ? null : handleLayout());
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastPage);

var cardUrlHandler = function cardUrlHandler(url) {
  return "http://localhost:1337/".concat(url);
};

/***/ })

})
//# sourceMappingURL=podcasts.js.7b9b6da90408ab15707f.hot-update.js.map