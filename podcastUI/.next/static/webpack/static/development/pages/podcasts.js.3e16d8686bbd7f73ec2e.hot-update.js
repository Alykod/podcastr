webpackHotUpdate("static/development/pages/podcasts.js",{

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
false,

/***/ "./node_modules/apollo-client/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
false,

/***/ "./node_modules/graphql-tag/src/index.js":
false,

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
false,

/***/ "./node_modules/graphql/error/syntaxError.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToStringTag.mjs":
false,

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
false,

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
false,

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
false,

/***/ "./node_modules/graphql/language/blockString.mjs":
false,

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
false,

/***/ "./node_modules/graphql/language/kinds.mjs":
false,

/***/ "./node_modules/graphql/language/lexer.mjs":
false,

/***/ "./node_modules/graphql/language/location.mjs":
false,

/***/ "./node_modules/graphql/language/parser.mjs":
false,

/***/ "./node_modules/graphql/language/printLocation.mjs":
false,

/***/ "./node_modules/graphql/language/source.mjs":
false,

/***/ "./node_modules/graphql/language/tokenKind.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
false,

/***/ "./node_modules/zen-observable/index.js":
false,

/***/ "./node_modules/zen-observable/lib/Observable.js":
false,

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context_podcastContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/podcastContext */ "./components/context/podcastContext.js");
var _jsxFileName = "/Users/kod/Desktop/podcastframework/podcastUI/pages/podcasts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var PodcastPage = function PodcastPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var PodcastSelectedContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context_podcastContext__WEBPACK_IMPORTED_MODULE_5__["default"]); // const { data, loading, error } = useQuery(SelectedPodcastQuery, { variables: { someTitle: router.query.title } })

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      podcast = _useState[0],
      setPodcast = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    debugger;

    if (data && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(data.podcasts, podcast)) {
      setPodcast(data);
    }
  }, [data]);

  var handleLayout = function handleLayout() {
    return __jsx("section", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__["Tile"], {
      isAncestor: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__["Tile"], {
      isParent: true,
      isVertical: true,
      "is-4": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
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
        lineNumber: 36
      },
      __self: this
    })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__["Tile"], {
      isParent: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, podcast.title), __jsx("audio", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("source", {
      src: cardUrlHandler(podcast.audioFile.url),
      type: podcast.audioFile.mime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_4__["Content"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, podcast.description))))));
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, podcast ? handleLayout() : null);
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastPage);

var cardUrlHandler = function cardUrlHandler(url) {
  return "http://localhost:1337/".concat(url);
};

/***/ }),

/***/ "./services/query.js":
false

})
//# sourceMappingURL=podcasts.js.3e16d8686bbd7f73ec2e.hot-update.js.map