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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DynamicFooter/DynamicFooter */ "./src/components/DynamicFooter/DynamicFooter.js");
/* harmony import */ var _MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainSection/MainSection */ "./src/components/MainSection/MainSection.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "content" }, [
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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
/* harmony import */ var _base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-elements/Icon */ "./src/components/base-elements/Icon.js");
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
  const githubLink = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    {
      href: "https://github.com/carlin-mitchell/" + _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__.githubInfo.repoName,
    },
    [(0,_base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")]
  );

  const copyrightInfo = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`,
  });

  const otherClasses = "";
  const container = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
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
  const footer = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "./src/components/Element.js");
/* harmony import */ var _base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base-elements/Icon */ "./src/components/base-elements/Icon.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _data_attributions_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/attributions-data */ "./src/components/DynamicFooter/SiteAttributions/data/attributions-data.js");
/* harmony import */ var _ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpandablePanel/ExpandablePanel */ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExpandablePanel/NonExpandablePanel */ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/NonExpandablePanel.js");
// COMPONENT IMPORTS









const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const AttributionsContainer = () => {
  const panelTitle = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    {
      className: "expandable-panel-title",
      innerText: "Site Attributions",
    },
    [(0,_base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")]
  );

  const otherClasses = "";
  const container = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    { className: "attributions-container" + " " + otherClasses },
    // add child elements to the array below
    [
      ..._data_attributions_data__WEBPACK_IMPORTED_MODULE_2__.attributionData.map((obj) => {
        if (obj.subItems) {
          console.log(obj.name, "expandable");
          return (0,_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_3__["default"])(obj);
        } else {
          console.log(obj.name, "non expandable");
          return (0,_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
        }
      }),
    ]
  );
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributionsContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanel.js":
/*!******************************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanel.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Element */ "./src/components/Element.js");
/* harmony import */ var _ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanelTitle */ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanelTitle.js");
/* harmony import */ var _ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandablePanelContent */ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanelContent.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS







// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContainer = (props) => {
  const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const { name, subItems } = props;
  const otherClasses = "";
  const panel = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [
      (0,_ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__["default"])({ name, componentId }),
      (0,_ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__["default"])({ subItems, componentId }),
    ]
  );
  return panel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandablePanelContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanelContent.js":
/*!*************************************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanelContent.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Element */ "./src/components/Element.js");
/* harmony import */ var _ExpandablePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandablePanel */ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanel.js");
/* harmony import */ var _NonExpandablePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NonExpandablePanel */ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/NonExpandablePanel.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { subItems, componentId } = props;
  subItems = subItems ? subItems : [];
  console.log(subItems);
  const otherClasses = "";

  const content = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: "content" }, [
    ...subItems.map((obj) => {
      if (obj.name.toLowerCase() === "other icons") {
        return (0,_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
      } else if (obj.subItems && obj.subItems.length) {
        return (0,_ExpandablePanel__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
      } else {
        return (0,_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])(obj);
      }
    }),
  ]);
  const parentElement = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
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

/***/ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanelTitle.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/ExpandablePanelTitle.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Element */ "./src/components/Element.js");
/* harmony import */ var _base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-elements/Icon */ "./src/components/base-elements/Icon.js");
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
  const { name, componentId } = props;
  console.log(props);

  const expandButton = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    {
      id: `expandable-content-button-${componentId}`,
      onclick() {
        toggleExpansion(componentId);
      },
    },
    [(0,_base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")]
  );

  const otherClasses = "";
  const titleDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "div",
    { className: "expandable-panel-title" + " " + otherClasses },
    [
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: "display-i-b",
        innerText: name,
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

/***/ "./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/NonExpandablePanel.js":
/*!*********************************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/ExpandablePanel/NonExpandablePanel.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Element */ "./src/components/Element.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base-elements/Icon */ "./src/components/base-elements/Icon.js");
// COMPONENT IMPORTS





const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NonExpandablePanelContainer = (props) => {
  let { name, icons, href } = props;
  icons = icons ? icons : [];

  const otherClasses = "";
  const panel = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "a",
    {
      className: `${otherClasses} non-expandable-panel ${
        href ? "is-link" : ""
      }`,
      innerText: name,
    },
    // add child elements to the array below
    [...icons.map((icon) => (0,_base_elements_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon))]
  );
  if (href) {
    panel.href = href;
  }
  return panel;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NonExpandablePanelContainer);


/***/ }),

/***/ "./src/components/DynamicFooter/SiteAttributions/data/attributions-data.js":
/*!*********************************************************************************!*\
  !*** ./src/components/DynamicFooter/SiteAttributions/data/attributions-data.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributionData: () => (/* binding */ attributionData)
/* harmony export */ });
const attributionData = [
  {
    name: "Site Attributions",
    subItems: [
      {
        name: "Icons",
        subItems: [
          {
            name: "Github",
            subItems: [],
            icons: ["icon-github-cat"],
            href: "https://github.com/logos",
          },
          {
            name: "Other Icons",
            subItems: [true],
          },
        ],
      },
    ],
  },
];


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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const topLink = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
    href: "https://www.theodinproject.com/",
    className: "top-link",
    innerText: "The Odin Project",
  });

  const otherClasses = "";
  const container = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
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

/***/ "./src/components/Element.js":
/*!***********************************!*\
  !*** ./src/components/Element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);


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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Header = () => {
  const h1 = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", { innerText: "This is the header" });

  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = (0,_Element__WEBPACK_IMPORTED_MODULE_1__["default"])(
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

/***/ "./src/components/base-elements/Icon.js":
/*!**********************************************!*\
  !*** ./src/components/base-elements/Icon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "./src/components/Element.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Icon = (iconClass) => {
  const icon = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("i", { className: `icon ${iconClass} display-i-b` });
  return icon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


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
/* harmony import */ var _components_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Element */ "./src/components/Element.js");


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
      (0,_components_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRyx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQXBJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMGdCQUEwZ0I7QUFDMWdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0RBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRztBQUNZOztBQUV2QztBQUNBO0FBQ0EsK0NBQStDLCtDQUFHLEtBQUs7O0FBRXZEO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLHlEQUFTO0FBQ2xCOztBQUVBLGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCYzs7QUFFL0I7QUFDQSxxQ0FBcUMsaURBQUs7QUFDMUM7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZCO0FBQ2lDO0FBQ0s7QUFDcUI7QUFDTjs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixvREFBTyxVQUFVLGVBQWU7QUFDbEQsSUFBSSwwREFBTTtBQUNWLElBQUksb0VBQVc7QUFDZixJQUFJLHdFQUFhO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnZCO0FBQ2lDO0FBQ1E7O0FBRXpDO0FBQ29FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG9EQUFPO0FBQzVCO0FBQ0E7QUFDQSxvREFBb0QseUVBQVU7QUFDOUQsS0FBSztBQUNMLEtBQUssK0RBQUk7QUFDVDs7QUFFQSx3QkFBd0Isb0RBQU87QUFDL0I7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRCxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0EsTUFBTSx1REFBdUQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDbEM7QUFDaUM7QUFDcUI7QUFDdUI7QUFDL0I7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixvREFBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLLCtEQUFrQixJQUFJLDZEQUFZLElBQUksbUZBQXFCO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCN0I7QUFDb0M7QUFDUTtBQUNSOztBQUV1Qjs7QUFFYztBQUNNOztBQUUvRSxvQkFBb0IsZ0RBQU07O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSywrREFBSTtBQUNUOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0EsTUFBTSwwREFBMEQ7QUFDaEU7QUFDQTtBQUNBLFNBQVMsb0VBQWU7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQiw0RUFBd0I7QUFDekMsVUFBVTtBQUNWO0FBQ0EsaUJBQWlCLCtFQUEyQjtBQUM1QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEckM7QUFDdUM7O0FBRW1CO0FBQ0k7O0FBRTFCOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdEQUFNO0FBQzVCLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0EsZ0JBQWdCLG9EQUFPO0FBQ3ZCO0FBQ0EsTUFBTSxvREFBb0Q7QUFDMUQ7QUFDQTtBQUNBLE1BQU0saUVBQW9CLEdBQUcsbUJBQW1CO0FBQ2hELE1BQU0sbUVBQXNCLEdBQUcsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHdCQUF3QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3hDO0FBQ3VDO0FBQ2tCO0FBQ007O0FBRS9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9EQUFPLFVBQVUsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQSxlQUFlLCtEQUEyQjtBQUMxQyxRQUFRO0FBQ1IsZUFBZSw0REFBd0I7QUFDdkMsUUFBUTtBQUNSLGVBQWUsK0RBQTJCO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLG9EQUFPO0FBQy9CO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDdEM7QUFDdUM7QUFDUTs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG9CQUFvQjtBQUM5Qjs7QUFFQSx1QkFBdUIsb0RBQU87QUFDOUI7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEtBQUssK0RBQUk7QUFDVDs7QUFFQTtBQUNBLG1CQUFtQixvREFBTztBQUMxQjtBQUNBLE1BQU0sMERBQTBEO0FBQ2hFO0FBQ0EsTUFBTSxvREFBTztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxvQkFBb0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRwQztBQUN1Qzs7QUFFSDtBQUNXOztBQUUvQyxvQkFBb0IsZ0RBQU07QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCOztBQUVBO0FBQ0EsZ0JBQWdCLG9EQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLDRCQUE0QiwrREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsMkJBQTJCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JDcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixvREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLG9EQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvQjVCO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnZCO0FBQ2lDOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxvREFBTyxTQUFTLGlDQUFpQzs7QUFFOUQ7QUFDQSxpQkFBaUIsb0RBQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdEI7QUFDcUQ7QUFDcEI7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsb0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjNCO0FBQ2lDOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxvREFBTyxRQUFRLG1CQUFtQixXQUFXLGNBQWM7QUFDMUU7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCYjtBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUQ7O0FBRTFDO0FBQ1AsRUFBRSw4REFBb0I7QUFDdEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0x1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IsZ0RBQVE7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7O0FBRXBDO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBTztBQUNiO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNzQjtBQUNrQjs7QUFFckUsMEJBQTBCLHVFQUFPOztBQUVqQyxrRkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0NvcHlyaWdodENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9kYXRhL2F0dHJpYnV0aW9ucy1kYXRhLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9UT1BMaW5rQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL2Jhc2UtZWxlbWVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1wYWdlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgRHluYW1pY0Zvb3RlciBmcm9tIFwiLi4vRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSBcIi4uL01haW5TZWN0aW9uL01haW5TZWN0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gRWxlbWVudChcImRpdlwiLCB7IGlkOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgSGVhZGVyKCksXG4gICAgTWFpblNlY3Rpb24oKSxcbiAgICBEeW5hbWljRm9vdGVyKCksXG4gIF0pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL2Jhc2UtZWxlbWVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5pbXBvcnQgeyBnaXRodWJJbmZvIH0gZnJvbSBcIi4uLy4uL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnXCI7XG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG4vLyBURU1QTEFURSBWQVJJQUJMRVNcbmNvbnN0IGR5bmFtaWNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBDb3B5cmlnaHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBFbGVtZW50KFxuICAgIFwiYVwiLFxuICAgIHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC9cIiArIGdpdGh1YkluZm8ucmVwb05hbWUsXG4gICAgfSxcbiAgICBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV1cbiAgKTtcblxuICBjb25zdCBjb3B5cmlnaHRJbmZvID0gRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1pbmZvIGRpc3BsYXktaS1iXCIsXG4gICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7ZHluYW1pY1llYXJ9YCxcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtjb3B5cmlnaHRJbmZvLCBnaXRodWJMaW5rXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9FbGVtZW50XCI7XG5pbXBvcnQgQ29weXJpZ2h0Q29udGFpbmVyIGZyb20gXCIuL0NvcHlyaWdodENvbnRhaW5lclwiO1xuaW1wb3J0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciBmcm9tIFwiLi9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lclwiO1xuaW1wb3J0IFRPUENvbnRhaW5lciBmcm9tIFwiLi9UT1BMaW5rQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBEeW5hbWljRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGVcIjtcbiAgY29uc3QgZm9vdGVyID0gRWxlbWVudChcbiAgICBcImZvb3RlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImZvb3RlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbQ29weXJpZ2h0Q29udGFpbmVyKCksIFRPUENvbnRhaW5lcigpLCBBdHRyaWJ1dGlvbnNDb250YWluZXIoKV1cbiAgKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL0VsZW1lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9iYXNlLWVsZW1lbnRzL0ljb25cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IGF0dHJpYnV0aW9uRGF0YSB9IGZyb20gXCIuL2RhdGEvYXR0cmlidXRpb25zLWRhdGFcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRhaW5lciBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsXCI7XG5pbXBvcnQgTm9uRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFuZWxUaXRsZSA9IEVsZW1lbnQoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtdGl0bGVcIixcbiAgICAgIGlubmVyVGV4dDogXCJTaXRlIEF0dHJpYnV0aW9uc1wiLFxuICAgIH0sXG4gICAgW0ljb24oXCJpY29uLXVwLWRvd25cIildXG4gICk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImF0dHJpYnV0aW9ucy1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIC4uLmF0dHJpYnV0aW9uRGF0YS5tYXAoKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLnN1Ykl0ZW1zKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cob2JqLm5hbWUsIFwiZXhwYW5kYWJsZVwiKTtcbiAgICAgICAgICByZXR1cm4gRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cob2JqLm5hbWUsIFwibm9uIGV4cGFuZGFibGVcIik7XG4gICAgICAgICAgcmV0dXJuIE5vbkV4cGFuZGFibGVQYW5lbENvbnRhaW5lcihvYmopO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbnNDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL0VsZW1lbnRcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgeyBuYW1lLCBzdWJJdGVtcyB9ID0gcHJvcHM7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhbmVsID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7IGNsYXNzTmFtZTogXCJleHBhbmRhYmxlLXBhbmVsXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWxUaXRsZSh7IG5hbWUsIGNvbXBvbmVudElkIH0pLFxuICAgICAgRXhwYW5kYWJsZVBhbmVsQ29udGVudCh7IHN1Ykl0ZW1zLCBjb21wb25lbnRJZCB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRhaW5lciBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWxDb250YWluZXIgZnJvbSBcIi4vTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IHN1Ykl0ZW1zLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG4gIHN1Ykl0ZW1zID0gc3ViSXRlbXMgPyBzdWJJdGVtcyA6IFtdO1xuICBjb25zb2xlLmxvZyhzdWJJdGVtcyk7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG5cbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGVudFwiIH0sIFtcbiAgICAuLi5zdWJJdGVtcy5tYXAoKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwib3RoZXIgaWNvbnNcIikge1xuICAgICAgICByZXR1cm4gTm9uRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyKG9iaik7XG4gICAgICB9IGVsc2UgaWYgKG9iai5zdWJJdGVtcyAmJiBvYmouc3ViSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBFeHBhbmRhYmxlUGFuZWxDb250YWluZXIob2JqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBOb25FeHBhbmRhYmxlUGFuZWxDb250YWluZXIob2JqKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgXSk7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtY29udGVudFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2NvbnRlbnRdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vRWxlbWVudFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uLy4uL2Jhc2UtZWxlbWVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKSB7XG4gIGNvbnN0IGV4cGFuc2lvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBjb25zdCB0b2dnbGVFeHBhbnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgZXhwYW5zaW9uQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG5cbiAgY29uc3QgZXhwYW5kQnV0dG9uID0gRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIFtJY29uKFwiaWNvbi11cC1kb3duXCIpXVxuICApO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHRpdGxlRGl2ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtdGl0bGVcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgW1xuICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IG5hbWUsXG4gICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZXhwYW5kQnV0dG9uLFxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gdGl0bGVEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxUaXRsZTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vRWxlbWVudFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uLy4uL2Jhc2UtZWxlbWVudHMvSWNvblwiO1xuXG5jb25zdCBjb21wb25lbnRJZCA9IHV1aWR2NCgpO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE5vbkV4cGFuZGFibGVQYW5lbENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBuYW1lLCBpY29ucywgaHJlZiB9ID0gcHJvcHM7XG4gIGljb25zID0gaWNvbnMgPyBpY29ucyA6IFtdO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhbmVsID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGAke290aGVyQ2xhc3Nlc30gbm9uLWV4cGFuZGFibGUtcGFuZWwgJHtcbiAgICAgICAgaHJlZiA/IFwiaXMtbGlua1wiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBpbm5lclRleHQ6IG5hbWUsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgWy4uLmljb25zLm1hcCgoaWNvbikgPT4gSWNvbihpY29uKSldXG4gICk7XG4gIGlmIChocmVmKSB7XG4gICAgcGFuZWwuaHJlZiA9IGhyZWY7XG4gIH1cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9uRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyO1xuIiwiZXhwb3J0IGNvbnN0IGF0dHJpYnV0aW9uRGF0YSA9IFtcbiAge1xuICAgIG5hbWU6IFwiU2l0ZSBBdHRyaWJ1dGlvbnNcIixcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkljb25zXCIsXG4gICAgICAgIHN1Ykl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJHaXRodWJcIixcbiAgICAgICAgICAgIHN1Ykl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGljb25zOiBbXCJpY29uLWdpdGh1Yi1jYXRcIl0sXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dvc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJPdGhlciBJY29uc1wiLFxuICAgICAgICAgICAgc3ViSXRlbXM6IFt0cnVlXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgVE9QQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0b3BMaW5rID0gRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IFwidG9wLWNvbnRhaW5lclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgICBpbm5lclRleHQ6IFwiSW5zcGlyZWQgQnk6XCIsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW3RvcExpbmtdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUT1BDb250YWluZXI7XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnRcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaDEgPSBFbGVtZW50KFwiaDFcIiwgeyBpbm5lclRleHQ6IFwiVGhpcyBpcyB0aGUgaGVhZGVyXCIgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlIHAtMlwiO1xuICBjb25zdCBoZWFkZXIgPSBFbGVtZW50KFxuICAgIFwiaGVhZGVyXCIsXG4gICAge1xuICAgICAgaWQ6IFwiaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IFwiaGVhZGVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIFtoMV1cbiAgKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZW5lcmF0ZVRlc3RDb250ZW50QXJyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IG1haW4gPSBFbGVtZW50KFxuICAgIFwibWFpblwiLFxuICAgIHtcbiAgICAgIGlkOiBcIm1haW4tc2VjdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2VjdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vRWxlbWVudFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbiA9IChpY29uQ2xhc3MpID0+IHtcbiAgY29uc3QgaWNvbiA9IEVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBgaWNvbiAke2ljb25DbGFzc30gZGlzcGxheS1pLWJgIH0pO1xuICByZXR1cm4gaWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJleHBvcnQgY29uc3QgZ2l0aHViSW5mbyA9IHtcbiAgcmVwb05hbWU6IFwiYm9pbGVycGxhdGUtd2VicGFja1wiLFxufTtcbiIsImltcG9ydCB7IGFwcGx5V2luZG93TGlzdGVuZXJzIH0gZnJvbSBcIi4vdWktcGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlJbml0aWFsU3RhdGUoKSB7XG4gIGFwcGx5V2luZG93TGlzdGVuZXJzKCk7XG4gIC8vIGNsaWNrQ2Fyb3VzZWxQbGF5KCk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5jb25zdCBicmVha1BvaW50cyA9IHtcbiAgeHM6IDAsXG4gIHNtOiA0ODAsXG4gIG1kOiA3MjAsXG4gIGxnOiA5NjAsXG4gIHhsOiAxMjAwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5V2luZG93TGlzdGVuZXJzKCkge1xuICB3aW5kb3cub25yZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoZSkge1xuICAgIC8vXG4gIH0pO1xufVxuIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9FbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCB0cnVuY2F0ZUFuZEFkZEVsbGlwc2UgPSAoc3RyaW5nLCBudW1DaGFyc1RvS2VlcCkgPT4ge1xuICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIG51bUNoYXJzVG9LZWVwKS50cmltRW5kKCkgKyBcIi4uLlwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIHNldHVwIGEgdGltZXJcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgLy8gcmV0dXJuIGEgZnVuY3Rpb24gdG8gcnVuIGRlYm91bmNlZFxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vc2V0dXAgYXJnc1xuXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgYSB0aW1lciBjYW5jZWwgaXRcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVvdXQpO1xuICAgIH1cblxuICAgIC8vIHNldHVwIHRoZSBuZXcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAgICB0aW1lb3V0ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVzdENvbnRlbnRBcnIobnVtQ2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5KG51bUNoaWxkcmVuKVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoZWxlbSkgPT5cbiAgICAgIEVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImRpc3BsYXktYiBtYi0xXCIsXG4gICAgICAgIGlubmVyVGV4dDpcbiAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yLCB1bGxhbSBhZCwgbWF4aW1lIGVuaW0gc2VxdWkgc3VudCBxdW8gZmFjaWxpcyBpbGxvIGV2ZW5pZXQgbGF1ZGFudGl1bSBxdWFlIHJlcGVsbGVuZHVzIGRvbG9ydW0gb21uaXMgbWluaW1hIGR1Y2ltdXMgYXJjaGl0ZWN0byEgQmVhdGFlLCB2ZWwgYXNzdW1lbmRhLlwiLFxuICAgICAgfSlcbiAgICApO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudFwiO1xuaW1wb3J0IHsgYXBwbHlJbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGVcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuXG5hcHBseUluaXRpYWxTdGF0ZSgpO1xuXG4vLyBkZWJ1Z2dpbmdcbmNvbnN0IGRlYnVnZ2luZyA9IHRydWU7XG5pZiAoZGVidWdnaW5nKSB7XG4gIC8vXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=