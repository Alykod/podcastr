webpackHotUpdate("static/development/pages/index.js",{

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
    podcastData.lengt;
    return __jsx(_components_podcastCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Hello Next.js"));
}; //reason get initial props is not used in this situation, is due to the fact that it would not work with hooks. When react suspense is out, this might be updated. 


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e91f262223c6dcaeddb5.hot-update.js.map