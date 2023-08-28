/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/components/Content/Content.js":
/*!*******************************************!*\
  !*** ./src/components/Content/Content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DynamicFooter/DynamicFooter */ "./src/components/DynamicFooter/DynamicFooter.js");
/* harmony import */ var _MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainSection/MainSection */ "./src/components/MainSection/MainSection.js");





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", { id: "content" }, [
    (0,_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    (0,_DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  ]);

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ "./src/components/DynamicFooter/CopyrightContainer.js":
/*!************************************************************!*\
  !*** ./src/components/DynamicFooter/CopyrightContainer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_custom-components/Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-logic/data/data-page-config */ "./src/page-logic/data/data-page-config.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS


// COMPONENT METHODS
// function someMethod() {
//   //
// }

// TEMPLATE VARIABLES
const dynamicYear = new Date().getFullYear();

const CopyrightContainer = () => {
  const githubLink = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "a",
    {
      href: "https://github.com/carlin-mitchell/" + _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__.githubInfo.repoName,
    },
    [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")]
  );

  const copyrightInfo = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`,
  });

  const otherClasses = "";
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "div",
    { className: "copyright-container" + " " + otherClasses },
    // add child elements to the array below
    [copyrightInfo, githubLink]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyrightContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/DynamicFooter.js":
/*!*******************************************************!*\
  !*** ./src/components/DynamicFooter/DynamicFooter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyrightContainer */ "./src/components/DynamicFooter/CopyrightContainer.js");
/* harmony import */ var _SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteAttributions/AttributionsContainer */ "./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js");
/* harmony import */ var _TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TOPLinkContainer */ "./src/components/DynamicFooter/TOPLinkContainer.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const DynamicFooter = () => {
  const otherClasses = "bg-gray-dark-3 text-white";
  const footer = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "footer",
    {
      id: "footer",
      className: "" + " " + otherClasses,
    },
    [(0,_CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])()]
  );
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicFooter);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js":
/*!********************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/AttributionsContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_custom-components/Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_custom-components/ExpandablePanel/ExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_custom-components/ExpandablePanel/NonExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js");
/* harmony import */ var _IconsExplanation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconsExplanation */ "./src/components/DynamicFooter/SiteAttributions/IconsExplanation.js");
// COMPONENT IMPORTS








// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const AttributionsContainer = () => {
  const otherClasses = "";
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "div",
    { className: "attributions-container" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
        title: "Site Attributions",
        children: [
          (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
            title: "Icons",
            children: [
              (0,_custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__["default"])({
                title: "Github",
                href: "https://github.com/logos",
                children: [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")],
              }),
              (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
                title: "All other Icons",
                children: [(0,_IconsExplanation__WEBPACK_IMPORTED_MODULE_4__["default"])()],
              }),
            ],
          }),
        ],
      }),
    ]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributionsContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/IconsExplanation.js":
/*!***************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/IconsExplanation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const IconsExplanation = () => {
  const inkscapeLink = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    href: "https://inkscape.org/",
    innerText: "Inkscape",
  });
  const icoMoonLink = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    href: "https://icomoon.io/",
    innerText: "IcoMoon",
  });

  const div = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    innerHTML: `All other icons were created by me using ${inkscapeLink.outerHTML} and converting them to a font with ${icoMoonLink.outerHTML}`,
  });

  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "div",
    { className: "icons-explanation" + " " + otherClasses, innerHTML: `` },
    // add child elements to the array below
    [div]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconsExplanation);


/***/ }),

/***/ "./src/components/DynamicFooter/TOPLinkContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/DynamicFooter/TOPLinkContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const topLink = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    href: "https://www.theodinproject.com/",
    className: "top-link",
    innerText: "The Odin Project",
  });

  const otherClasses = "";
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "div",
    {
      className: "top-container" + " " + otherClasses,
      innerText: "Inspired By:",
    },
    // add child elements to the array below
    [topLink]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOPContainer);


/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Header = () => {
  const h1 = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("h1", { innerText: "This is the header" });

  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "header",
    {
      id: "header",
      className: "header" + " " + otherClasses,
    },
    [h1]
  );
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/MainSection/MainSection.js":
/*!***************************************************!*\
  !*** ./src/components/MainSection/MainSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_1__.Element)(
    "main",
    {
      id: "main-section",
      className: "" + " " + otherClasses,
    },
    // add child elements to the array below
    []
  );
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainSection);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js":
/*!******************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanelTitle */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js");
/* harmony import */ var _ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandablePanelContent */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS







// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanel = (props) => {
  console.log(props);
  const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const { title, children } = props;
  const otherClasses = "";
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__["default"])({ title, componentId }),
      (0,_ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__["default"])({ children, componentId }),
    ]
  );
  return panel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanel);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js":
/*!*************************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanelContent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _ExpandablePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _NonExpandablePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NonExpandablePanel */ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { children, componentId } = props;
  children = children ? children : [];

  const content = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", { className: "content" }, [...children]);
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "div",
    {
      id: `expandable-content-${componentId}`,
      className: "expandable-panel-content" + " " + otherClasses,
    },
    // add child elements to the array below
    [content]
  );
  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelContent);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js":
/*!***********************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/ExpandablePanelTitle.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
function toggleExpansion(componentId) {
  const expansionContent = document.getElementById(
    `expandable-content-${componentId}`
  );
  const toggleExpansionButton = document.getElementById(
    `expandable-content-button-${componentId}`
  );
  expansionContent.classList.toggle("expanded");
  toggleExpansionButton.classList.toggle("expanded");
}

const ExpandablePanelTitle = (props) => {
  const { title, componentId } = props;

  const expandButton = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "button",
    {
      id: `expandable-content-button-${componentId}`,
      onclick() {
        toggleExpansion(componentId);
      },
    },
    [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")]
  );

  const otherClasses = "";
  const titleDiv = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "div",
    { className: "expandable-panel-title" + " " + otherClasses },
    [
      (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
        className: "display-i-b",
        innerText: title,
        onclick() {
          toggleExpansion(componentId);
        },
      }),
      expandButton,
    ]
  );

  return titleDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelTitle);


/***/ }),

/***/ "./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js":
/*!*********************************************************************************!*\
  !*** ./src/components/_custom-components/ExpandablePanel/NonExpandablePanel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NonExpandablePanel = (props) => {
  let { title, href, children } = props;
  children = children ? children : [];

  const otherClasses = "";

  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)(
    "a",
    {
      className: `${otherClasses} non-expandable-panel ${
        href ? "is-link" : ""
      }`,
      innerText: title,
    },
    // add child elements to the array below
    [...children]
  );
  if (href) {
    panel.href = href;
  }
  return panel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NonExpandablePanel);


/***/ }),

/***/ "./src/components/_custom-components/Icon.js":
/*!***************************************************!*\
  !*** ./src/components/_custom-components/Icon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Icon = (iconClass) => {
  const icon = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("i", { className: `icon ${iconClass} display-i-b` });
  return icon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ "./src/components/_elements/Elements.js":
/*!**********************************************!*\
  !*** ./src/components/_elements/Elements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   Article: () => (/* binding */ Article),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   Body: () => (/* binding */ Body),
/* harmony export */   Br: () => (/* binding */ Br),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Div: () => (/* binding */ Div),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   H1: () => (/* binding */ H1),
/* harmony export */   H2: () => (/* binding */ H2),
/* harmony export */   H3: () => (/* binding */ H3),
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   Hr: () => (/* binding */ Hr),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   Img: () => (/* binding */ Img),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Li: () => (/* binding */ Li),
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   Ol: () => (/* binding */ Ol),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   Span: () => (/* binding */ Span),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Ul: () => (/* binding */ Ul)
/* harmony export */ });
/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
const Element = (typeStr, propsObj, childArr = null) => {
  if (childArr && !Array.isArray(childArr)) {
    childArr = [childArr];
  }

  const parentElement = Object.assign(
    document.createElement(typeStr),
    propsObj
  );

  if (childArr) {
    childArr.forEach((child) => parentElement.appendChild(child));
  }

  return parentElement;
};

//  COMMON ELEMENTS
const A = (props, children) =>
  Element("a", props ? { ...props } : {}, children ? [...children] : []);

const Article = (props, children) =>
  Element("article", props ? { ...props } : {}, children ? [...children] : []);

const B = (props, children) =>
  Element("b", props ? { ...props } : {}, children ? [...children] : []);

const Body = (props, children) =>
  Element("body", props ? { ...props } : {}, children ? [...children] : []);

const Button = (props, children) =>
  Element("button", props ? { ...props } : {}, children ? [...children] : []);

const Br = (props, children) =>
  Element("br", props ? { ...props } : {}, children ? [...children] : []);

const Div = (props, children) =>
  Element("div", props ? { ...props } : {}, children ? [...children] : []);

const Footer = (props, children) =>
  Element("footer", props ? { ...props } : {}, children ? [...children] : []);

const Form = (props, children) =>
  Element("form", props ? { ...props } : {}, children ? [...children] : []);

const H1 = (props, children) =>
  Element("h1", props ? { ...props } : {}, children ? [...children] : []);

const H2 = (props, children) =>
  Element("h2", props ? { ...props } : {}, children ? [...children] : []);

const H3 = (props, children) =>
  Element("h3", props ? { ...props } : {}, children ? [...children] : []);

const Header = (props, children) =>
  Element("header", props ? { ...props } : {}, children ? [...children] : []);

const Hr = (props, children) =>
  Element("hr", props ? { ...props } : {}, children ? [...children] : []);

const I = (props, children) =>
  Element("i", props ? { ...props } : {}, children ? [...children] : []);

const Img = (props, children) =>
  Element("img", props ? { ...props } : {}, children ? [...children] : []);

const Input = (props, children) =>
  Element("input", props ? { ...props } : {}, children ? [...children] : []);

const Label = (props, children) =>
  Element("label", props ? { ...props } : {}, children ? [...children] : []);

const Li = (props, children) =>
  Element("li", props ? { ...props } : {}, children ? [...children] : []);

const Main = (props, children) =>
  Element("main", props ? { ...props } : {}, children ? [...children] : []);

const Ol = (props, children) =>
  Element("ol", props ? { ...props } : {}, children ? [...children] : []);

const P = (props, children) =>
  Element("p", props ? { ...props } : {}, children ? [...children] : []);

const Strong = (props, children) =>
  Element("strong", props ? { ...props } : {}, children ? [...children] : []);

const Span = (props, children) =>
  Element("span", props ? { ...props } : {}, children ? [...children] : []);

const Ul = (props, children) =>
  Element("ul", props ? { ...props } : {}, children ? [...children] : []);


/***/ }),

/***/ "./src/page-logic/data/data-page-config.js":
/*!*************************************************!*\
  !*** ./src/page-logic/data/data-page-config.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   githubInfo: () => (/* binding */ githubInfo)
/* harmony export */ });
const githubInfo = {
  repoName: "boilerplate-webpack",
};


/***/ }),

/***/ "./src/page-logic/ui/ui-initial-state.js":
/*!***********************************************!*\
  !*** ./src/page-logic/ui/ui-initial-state.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyInitialState: () => (/* binding */ applyInitialState)
/* harmony export */ });
/* harmony import */ var _ui_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-page */ "./src/page-logic/ui/ui-page.js");


function applyInitialState() {
  (0,_ui_page__WEBPACK_IMPORTED_MODULE_0__.applyWindowListeners)();
  // clickCarouselPlay();
}


/***/ }),

/***/ "./src/page-logic/ui/ui-page.js":
/*!**************************************!*\
  !*** ./src/page-logic/ui/ui-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyWindowListeners: () => (/* binding */ applyWindowListeners)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");


const breakPoints = {
  xs: 0,
  sm: 480,
  md: 720,
  lg: 960,
  xl: 1200,
};

function applyWindowListeners() {
  window.onresize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (e) {
    //
  });
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   generateTestContentArr: () => (/* binding */ generateTestContentArr),
/* harmony export */   truncateAndAddEllipse: () => (/* binding */ truncateAndAddEllipse)
/* harmony export */ });
/* harmony import */ var _components_elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_elements/Elements */ "./src/components/_elements/Elements.js");


const truncateAndAddEllipse = (string, numCharsToKeep) => {
  return string.slice(0, numCharsToKeep).trimEnd() + "...";
};

const debounce = function (fn) {
  // setup a timer
  let timeout;

  // return a function to run debounced
  return function () {
    //setup args

    let context = this;
    let args = arguments;

    // if there is a timer cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args);
    });
  };
};

function capitalize(string) {
  if (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  return string;
}

function generateTestContentArr(numChildren) {
  return Array(numChildren)
    .fill(0)
    .map((elem) =>
      (0,_components_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("p", {
        className: "display-b mb-1",
        innerText:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam ad, maxime enim sequi sunt quo facilis illo eveniet laudantium quae repellendus dolorum omnis minima ducimus architecto! Beatae, vel assumenda.",
      })
    );
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _components_Content_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Content/Content */ "./src/components/Content/Content.js");
/* harmony import */ var _page_logic_ui_ui_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-logic/ui/ui-initial-state */ "./src/page-logic/ui/ui-initial-state.js");




document.body.appendChild((0,_components_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"])());

(0,_page_logic_ui_ui_initial_state__WEBPACK_IMPORTED_MODULE_2__.applyInitialState)();

// debugging
const debugging = true;
if (debugging) {
  //
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDc0I7QUFDa0I7O0FBRXJFLDBCQUEwQix1RUFBTzs7QUFFakMsa0ZBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9Db3B5cmlnaHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0ljb25zRXhwbGFuYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1RPUExpbmtDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JY29uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2VsZW1lbnRzL0VsZW1lbnRzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktaW5pdGlhbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IER5bmFtaWNGb290ZXIgZnJvbSBcIi4uL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3RlclwiO1xuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuLi9NYWluU2VjdGlvbi9NYWluU2VjdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjb250ZW50XCIgfSwgW1xuICAgIEhlYWRlcigpLFxuICAgIE1haW5TZWN0aW9uKCksXG4gICAgRHluYW1pY0Zvb3RlcigpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5pbXBvcnQgeyBnaXRodWJJbmZvIH0gZnJvbSBcIi4uLy4uL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnXCI7XG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG4vLyBURU1QTEFURSBWQVJJQUJMRVNcbmNvbnN0IGR5bmFtaWNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBDb3B5cmlnaHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBFbGVtZW50KFxuICAgIFwiYVwiLFxuICAgIHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC9cIiArIGdpdGh1YkluZm8ucmVwb05hbWUsXG4gICAgfSxcbiAgICBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV1cbiAgKTtcblxuICBjb25zdCBjb3B5cmlnaHRJbmZvID0gRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1pbmZvIGRpc3BsYXktaS1iXCIsXG4gICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7ZHluYW1pY1llYXJ9YCxcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtjb3B5cmlnaHRJbmZvLCBnaXRodWJMaW5rXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ29weXJpZ2h0Q29udGFpbmVyIGZyb20gXCIuL0NvcHlyaWdodENvbnRhaW5lclwiO1xuaW1wb3J0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRPUENvbnRhaW5lciBmcm9tIFwiLi9UT1BMaW5rQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBEeW5hbWljRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGVcIjtcbiAgY29uc3QgZm9vdGVyID0gRWxlbWVudChcbiAgICBcImZvb3RlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImZvb3RlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbQ29weXJpZ2h0Q29udGFpbmVyKCksIFRPUENvbnRhaW5lcigpLCBBdHRyaWJ1dGlvbnNDb250YWluZXIoKV1cbiAgKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuaW1wb3J0IEljb25zRXhwbGFuYXRpb24gZnJvbSBcIi4vSWNvbnNFeHBsYW5hdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQXR0cmlidXRpb25zQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IFwiYXR0cmlidXRpb25zLWNvbnRhaW5lclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgdGl0bGU6IFwiU2l0ZSBBdHRyaWJ1dGlvbnNcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiSWNvbnNcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIE5vbkV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nb3NcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgb3RoZXIgSWNvbnNcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb25zRXhwbGFuYXRpb24oKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0aW9uc0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbnNFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaW5rc2NhcGVMaW5rID0gRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9pbmtzY2FwZS5vcmcvXCIsXG4gICAgaW5uZXJUZXh0OiBcIklua3NjYXBlXCIsXG4gIH0pO1xuICBjb25zdCBpY29Nb29uTGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vaWNvbW9vbi5pby9cIixcbiAgICBpbm5lclRleHQ6IFwiSWNvTW9vblwiLFxuICB9KTtcblxuICBjb25zdCBkaXYgPSBFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpbm5lckhUTUw6IGBBbGwgb3RoZXIgaWNvbnMgd2VyZSBjcmVhdGVkIGJ5IG1lIHVzaW5nICR7aW5rc2NhcGVMaW5rLm91dGVySFRNTH0gYW5kIGNvbnZlcnRpbmcgdGhlbSB0byBhIGZvbnQgd2l0aCAke2ljb01vb25MaW5rLm91dGVySFRNTH1gLFxuICB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImljb25zLWV4cGxhbmF0aW9uXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcywgaW5uZXJIVE1MOiBgYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbZGl2XVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zRXhwbGFuYXRpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFRPUENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgdG9wTGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcInRvcC1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIEJ5OlwiLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFt0b3BMaW5rXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVE9QQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gRWxlbWVudChcImgxXCIsIHsgaW5uZXJUZXh0OiBcIlRoaXMgaXMgdGhlIGhlYWRlclwiIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZSBwLTJcIjtcbiAgY29uc3QgaGVhZGVyID0gRWxlbWVudChcbiAgICBcImhlYWRlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImhlYWRlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcImhlYWRlclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbaDFdXG4gICk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXN0Q29udGVudEFyciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBtYWluID0gRWxlbWVudChcbiAgICBcIm1haW5cIixcbiAgICB7XG4gICAgICBpZDogXCJtYWluLXNlY3Rpb25cIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpblNlY3Rpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBjb21wb25lbnRJZCA9IHV1aWR2NCgpO1xuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhbmVsID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7IGNsYXNzTmFtZTogXCJleHBhbmRhYmxlLXBhbmVsXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWxUaXRsZSh7IHRpdGxlLCBjb21wb25lbnRJZCB9KSxcbiAgICAgIEV4cGFuZGFibGVQYW5lbENvbnRlbnQoeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxDb250YWluZXIgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsXCI7XG5pbXBvcnQgTm9uRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyIGZyb20gXCIuL05vbkV4cGFuZGFibGVQYW5lbFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBjb250ZW50ID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSwgWy4uLmNoaWxkcmVuXSk7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtY29udGVudFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2NvbnRlbnRdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCkge1xuICBjb25zdCBleHBhbnNpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgY29uc3QgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGV4cGFuc2lvbkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB0b2dnbGVFeHBhbnNpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxUaXRsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZXhwYW5kQnV0dG9uID0gRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIFtJY29uKFwiaWNvbi11cC1kb3duXCIpXVxuICApO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHRpdGxlRGl2ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtdGl0bGVcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgW1xuICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGV4cGFuZEJ1dHRvbixcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHRpdGxlRGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsVGl0bGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE5vbkV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyB0aXRsZSwgaHJlZiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuXG4gIGNvbnN0IHBhbmVsID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGAke290aGVyQ2xhc3Nlc30gbm9uLWV4cGFuZGFibGUtcGFuZWwgJHtcbiAgICAgICAgaHJlZiA/IFwiaXMtbGlua1wiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFsuLi5jaGlsZHJlbl1cbiAgKTtcbiAgaWYgKGhyZWYpIHtcbiAgICBwYW5lbC5ocmVmID0gaHJlZjtcbiAgfVxuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb25FeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb24gPSAoaWNvbkNsYXNzKSA9PiB7XG4gIGNvbnN0IGljb24gPSBFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogYGljb24gJHtpY29uQ2xhc3N9IGRpc3BsYXktaS1iYCB9KTtcbiAgcmV0dXJuIGljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZG9tIGVsZW1lbnQgd2l0aCBpdHMgaW5pdGlhbCBhdHRyaWJ1dGVzIGFuZCBjaGlsZCBlbGVtZW50cyBkZWZpbmVkIGJ5IGEgcGFzc2VkLWluIG9iamVjdCBhbmQgYXJyYXkgb2YgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlU3RyIHRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSByZXR1cm5lZCB5b3Ugd291bGQgdXNlIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzT2JqIChvcHRpb25hbCkgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvIGhhdmVcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkQXJyIChvcHRpb25hbCkgYW4gb2YgZWxlbWVudCBvYmplY3RzIHRvIGJlIGFwcGVuZGVkIGFzIGNoaWxkcmVuIHRvIHRoaXMgZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjcmVhdGVkIGluIG1lbW9yeVxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudCA9ICh0eXBlU3RyLCBwcm9wc09iaiwgY2hpbGRBcnIgPSBudWxsKSA9PiB7XG4gIGlmIChjaGlsZEFyciAmJiAhQXJyYXkuaXNBcnJheShjaGlsZEFycikpIHtcbiAgICBjaGlsZEFyciA9IFtjaGlsZEFycl07XG4gIH1cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgaWYgKGNoaWxkQXJyKSB7XG4gICAgY2hpbGRBcnIuZm9yRWFjaCgoY2hpbGQpID0+IHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuLy8gIENPTU1PTiBFTEVNRU5UU1xuZXhwb3J0IGNvbnN0IEEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFydGljbGVcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYm9keVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnV0dG9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERpdiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkaXZcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvb3RlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvcm1cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDMgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDNcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhlYWRlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW1nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImltZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbnB1dFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsYWJlbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMaSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgUCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJwXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFN0cm9uZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzdHJvbmdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzcGFuXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcbiIsImV4cG9ydCBjb25zdCBnaXRodWJJbmZvID0ge1xuICByZXBvTmFtZTogXCJib2lsZXJwbGF0ZS13ZWJwYWNrXCIsXG59O1xuIiwiaW1wb3J0IHsgYXBwbHlXaW5kb3dMaXN0ZW5lcnMgfSBmcm9tIFwiLi91aS1wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgLy8gY2xpY2tDYXJvdXNlbFBsYXkoKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQW5kQWRkRWxsaXBzZSA9IChzdHJpbmcsIG51bUNoYXJzVG9LZWVwKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbnVtQ2hhcnNUb0tlZXApLnRyaW1FbmQoKSArIFwiLi4uXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gc2V0dXAgYSB0aW1lclxuICBsZXQgdGltZW91dDtcblxuICAvLyByZXR1cm4gYSBmdW5jdGlvbiB0byBydW4gZGVib3VuY2VkXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy9zZXR1cCBhcmdzXG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIHRpbWVyIGNhbmNlbCBpdFxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgdGhlIG5ldyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXN0Q29udGVudEFycihudW1DaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkobnVtQ2hpbGRyZW4pXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChlbGVtKSA9PlxuICAgICAgRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1iIG1iLTFcIixcbiAgICAgICAgaW5uZXJUZXh0OlxuICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3IsIHVsbGFtIGFkLCBtYXhpbWUgZW5pbSBzZXF1aSBzdW50IHF1byBmYWNpbGlzIGlsbG8gZXZlbmlldCBsYXVkYW50aXVtIHF1YWUgcmVwZWxsZW5kdXMgZG9sb3J1bSBvbW5pcyBtaW5pbWEgZHVjaW11cyBhcmNoaXRlY3RvISBCZWF0YWUsIHZlbCBhc3N1bWVuZGEuXCIsXG4gICAgICB9KVxuICAgICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50XCI7XG5pbXBvcnQgeyBhcHBseUluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3BhZ2UtbG9naWMvdWkvdWktaW5pdGlhbC1zdGF0ZVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbmFwcGx5SW5pdGlhbFN0YXRlKCk7XG5cbi8vIGRlYnVnZ2luZ1xuY29uc3QgZGVidWdnaW5nID0gdHJ1ZTtcbmlmIChkZWJ1Z2dpbmcpIHtcbiAgLy9cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==