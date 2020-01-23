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

var PodcastCard = function PodcastCard(props) {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: "50vw",
      height: "30vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "image is-3by1",
    src: props.image.url,
    alt: props.title,
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
  }, props.title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.description)));
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastCard);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_context_podcastContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/podcastContext */ "./components/context/podcastContext.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components_podcastCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/podcastCard */ "./components/podcastCard.tsx");
/* harmony import */ var _services_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/query */ "./services/query.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



// import apollo, { withApollo } from '../lib/apollo'
// import PodcastsList from '../components/apolloLayout';



 // interface Podcasts {
//   title: String,
//   id: String,
//   description: String,
//   // image: ImageObject
// }

var Index = function Index() {
  var podcastContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context_podcastContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_services_query__WEBPACK_IMPORTED_MODULE_5__["PodcastsQuery"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(loading),
      loadingStatus = _useState[0],
      setLoadingStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      podcastData = _useState2[0],
      setPodcastData = _useState2[1];

  console.log("data", data); // useEffect(()=> {
  //     if(podcastContext.podcastState.currentPodcast == "") {
  //         podcastContext.updateCurrentPodcast('test')
  //         // podcastContext.dispatch({type: UPDATE_CURRENT_PODCAST, value: 'test'})
  //     }
  // }, [])

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data && !lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isEqual(data.podcasts, podcastData)) {
      setPodcastData(data);
    }
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoadingStatus(loading);
  }, [loading]);

  var handleCardsMapping = function handleCardsMapping() {
    return __jsx(_components_podcastCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    });
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Hello Next.js"));
}; //reason get initial props is not used in this situation, is due to the fact that it would not work with hooks. When react suspense is out, this might be updated. 


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.18cc688d176c979da8b7.hot-update.js.map