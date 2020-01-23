webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./services/query.js":
/*!***************************!*\
  !*** ./services/query.js ***!
  \***************************/
/*! exports provided: PodcastsQuery, LatestPodcastQuery, SelectedPodcastQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastsQuery", function() { return PodcastsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestPodcastQuery", function() { return LatestPodcastQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedPodcastQuery", function() { return SelectedPodcastQuery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Podcasts($someTitle: String!) {\n      podcast(title: $someTitle) {\n        description\n        title\n        image {\n          url\n          id\n          mime\n        }\n        id\n        audioFile {\n          url\n          id\n          mime\n        }\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Podcasts($someId: ID!) {\n      podcast(id: $someId) {\n        description\n        title\n        image {\n          url\n          id\n          mime\n        }\n        id\n        audioFile {\n          url\n          id\n          mime\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Podcasts {\n    podcasts {\n      description\n      title\n      image {\n        url\n        id\n        mime\n      }\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PodcastsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var LatestPodcastQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var SelectedPodcastQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());

/***/ })

})
//# sourceMappingURL=podcasts.js.6acda2cd333913b12fa2.hot-update.js.map