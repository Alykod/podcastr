webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_context_podcastContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context/podcastContext */ "./components/context/podcastContext.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components_podcastCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/podcastCard */ "./components/podcastCard.tsx");
/* harmony import */ var _services_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/query */ "./services/query.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



// import apollo, { withApollo } from '../lib/apollo'
// import PodcastsList from '../components/apolloLayout';



 // interface Podcasts {
//   title: String,
//   id: String,
//   description: String,
//   // image: ImageObject
// }

var Index = function Index() {
  var podcastContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context_podcastContext__WEBPACK_IMPORTED_MODULE_3__["default"]);

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_services_query__WEBPACK_IMPORTED_MODULE_6__["PodcastsQuery"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(loading),
      loadingStatus = _useState[0],
      setLoadingStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      podcastData = _useState2[0],
      setPodcastData = _useState2[1];

  console.log("data", data); // useEffect(()=> {
  //     if(podcastContext.podcastState.currentPodcast == "") {
  //         podcastContext.updateCurrentPodcast('test')
  //         // podcastContext.dispatch({type: UPDATE_CURRENT_PODCAST, value: 'test'})
  //     }
  // }, [])

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (data && !lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEqual(data.podcasts, podcastData)) {
      setPodcastData(data);
    }
  }, [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoadingStatus(loading);
  }, [loading]);

  var handleCardsMapping = function handleCardsMapping() {
    return podcastData && podcastData.podcasts.map(function (podcast) {
      __jsx(_components_podcastCard__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, podcast, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    });
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, handleCardsMapping(), ";", __jsx("p", {
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
//# sourceMappingURL=index.js.c3a5583e2d81d04f8ea9.hot-update.js.map