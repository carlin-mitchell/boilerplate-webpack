/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  const content = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    id: "content"
  }, [(0,_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_DynamicFooter_DynamicFooter__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
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
  const githubLink = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    href: "https://github.com/carlin-mitchell/" + _page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__.githubInfo.repoName
  }, [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")]);
  const copyrightInfo = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`
  });
  const otherClasses = "";
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "copyright-container" + " " + otherClasses
  },
  // add child elements to the array below
  [copyrightInfo, githubLink]);
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
  const footer = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("footer", {
    id: "footer",
    className: "" + " " + otherClasses
  }, [(0,_CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
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
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "attributions-container" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
    title: "Site Attributions",
    children: [(0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
      title: "Icons",
      children: [(0,_custom_components_ExpandablePanel_NonExpandablePanel__WEBPACK_IMPORTED_MODULE_3__["default"])({
        title: "Github",
        href: "https://github.com/logos",
        children: [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")]
      }), (0,_custom_components_ExpandablePanel_ExpandablePanel__WEBPACK_IMPORTED_MODULE_2__["default"])({
        title: "All other Icons",
        children: [(0,_IconsExplanation__WEBPACK_IMPORTED_MODULE_4__["default"])()]
      })]
    })]
  })]);
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
    innerText: "Inkscape"
  });
  const icoMoonLink = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    href: "https://icomoon.io/",
    innerText: "IcoMoon"
  });
  const div = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    innerHTML: `All other icons were created by me using ${inkscapeLink.outerHTML} and converting them to a font with ${icoMoonLink.outerHTML}`
  });
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "icons-explanation" + " " + otherClasses,
    innerHTML: ``
  },
  // add child elements to the array below
  [div]);
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
    innerText: "The Odin Project"
  });
  const otherClasses = "";
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "top-container" + " " + otherClasses,
    innerText: "Inspired By:"
  },
  // add child elements to the array below
  [topLink]);
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
  const h1 = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("h1", {
    innerText: "This is the header"
  });
  const otherClasses = "bg-gray-dark-3 text-white p-2";
  const header = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("header", {
    id: "header",
    className: "header" + " " + otherClasses
  }, [h1]);
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
/* harmony import */ var _custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_custom-components/CustomIconsDisplay/CustomIconsDisplay */ "./src/components/_custom-components/CustomIconsDisplay/CustomIconsDisplay.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_2__.Main)({
    id: "main-section",
    className: "" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])()]);
  return main;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainSection);

/***/ }),

/***/ "./src/components/_custom-components/CustomIconsDisplay/CustomIconsDisplay.js":
/*!************************************************************************************!*\
  !*** ./src/components/_custom-components/CustomIconsDisplay/CustomIconsDisplay.js ***!
  \************************************************************************************/
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
// function someMethod() {
//   //
// }

const CustomIconsDisplay = () => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerText: ``,
    className: `custom-icons-display`
  },
  // add child elements to the array below
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-hamburger-menu"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-pause"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-pencil"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-plus-sign"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-plus-sign rotate-45"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-trash"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle rotate-180"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle-short rotate-90"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle-short"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow rotate-180"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short rotate-270"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down"), (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down rotate-90")]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomIconsDisplay);

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

const ExpandablePanel = props => {
  console.log(props);
  const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    title,
    children
  } = props;
  const otherClasses = "";
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    className: "expandable-panel" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_ExpandablePanelTitle__WEBPACK_IMPORTED_MODULE_1__["default"])({
    title,
    componentId
  }), (0,_ExpandablePanelContent__WEBPACK_IMPORTED_MODULE_2__["default"])({
    children,
    componentId
  })]);
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

const ExpandablePanelContent = props => {
  let {
    children,
    componentId
  } = props;
  children = children ? children : [];
  const content = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "content"
  }, [...children]);
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    id: `expandable-content-${componentId}`,
    className: "expandable-panel-content" + " " + otherClasses
  },
  // add child elements to the array below
  [content]);
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
  const expansionContent = document.getElementById(`expandable-content-${componentId}`);
  const toggleExpansionButton = document.getElementById(`expandable-content-button-${componentId}`);
  expansionContent.classList.toggle("expanded");
  toggleExpansionButton.classList.toggle("expanded");
}
const ExpandablePanelTitle = props => {
  const {
    title,
    componentId
  } = props;
  const expandButton = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("button", {
    id: `expandable-content-button-${componentId}`,
    onclick() {
      toggleExpansion(componentId);
    }
  }, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")]);
  const otherClasses = "";
  const titleDiv = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "expandable-panel-title" + " " + otherClasses
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: "display-i-b",
    innerText: title,
    onclick() {
      toggleExpansion(componentId);
    }
  }), expandButton]);
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

const NonExpandablePanel = props => {
  let {
    title,
    href,
    children
  } = props;
  children = children ? children : [];
  const otherClasses = "";
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("a", {
    className: `${otherClasses} non-expandable-panel ${href ? "is-link" : ""}`,
    innerText: title
  },
  // add child elements to the array below
  [...children]);
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

const Icon = iconClass => {
  const icon = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("i", {
    className: `icon ${iconClass} display-i-b`
  });
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
/* harmony export */   Datalist: () => (/* binding */ Datalist),
/* harmony export */   Div: () => (/* binding */ Div),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Fieldset: () => (/* binding */ Fieldset),
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
/* harmony export */   Legend: () => (/* binding */ Legend),
/* harmony export */   Li: () => (/* binding */ Li),
/* harmony export */   Main: () => (/* binding */ Main),
/* harmony export */   Ol: () => (/* binding */ Ol),
/* harmony export */   Option: () => (/* binding */ Option),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   Span: () => (/* binding */ Span),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Textarea: () => (/* binding */ Textarea),
/* harmony export */   Ul: () => (/* binding */ Ul)
/* harmony export */ });
/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
const Element = function (typeStr, propsObj) {
  let childArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Some attributes can only be set using the Element.setAttribute() method.
  // If it is in the propsObj Object.assign will fail. We'll remove it from the
  // props object here and assign them to the parent element before it is returned.
  // These attributes should be added to the setAttributeProperties list for processing.
  let setAttributeProperties = ["list"];
  let properties = [];
  setAttributeProperties.forEach(property => {
    if (property in propsObj) {
      const value = propsObj[property];
      properties.push({
        name: property,
        value: value
      });
      delete propsObj[property];
    }
  });

  // Create an element based on the type string provided
  const parentElement = Object.assign(document.createElement(typeStr), propsObj);

  // Add passed in child to array if it is not already
  if (childArr && !Array.isArray(childArr)) {
    childArr = [childArr];
  }

  // Append children to the element
  if (childArr) {
    childArr.forEach(child => parentElement.appendChild(child));
  }

  // Apply properties with setAttribute if needed
  if (properties.length) {
    properties.forEach(property => {
      parentElement.setAttribute(property.name, property.value);
    });
  }
  return parentElement;
};

//  COMMON ELEMENTS
const A = (props, children) => Element("a", props ? {
  ...props
} : {}, children ? [...children] : []);
const Article = (props, children) => Element("article", props ? {
  ...props
} : {}, children ? [...children] : []);
const B = (props, children) => Element("b", props ? {
  ...props
} : {}, children ? [...children] : []);
const Body = (props, children) => Element("body", props ? {
  ...props
} : {}, children ? [...children] : []);
const Button = (props, children) => Element("button", props ? {
  ...props
} : {}, children ? [...children] : []);
const Br = (props, children) => Element("br", props ? {
  ...props
} : {}, children ? [...children] : []);
const Div = (props, children) => Element("div", props ? {
  ...props
} : {}, children ? [...children] : []);
const Datalist = (props, children) => Element("datalist", props ? {
  ...props
} : {}, children ? [...children] : []);
const Fieldset = (props, children) => Element("fieldset", props ? {
  ...props
} : {}, children ? [...children] : []);
const Footer = (props, children) => Element("footer", props ? {
  ...props
} : {}, children ? [...children] : []);
const Form = (props, children) => Element("form", props ? {
  ...props
} : {}, children ? [...children] : []);
const H1 = (props, children) => Element("h1", props ? {
  ...props
} : {}, children ? [...children] : []);
const H2 = (props, children) => Element("h2", props ? {
  ...props
} : {}, children ? [...children] : []);
const H3 = (props, children) => Element("h3", props ? {
  ...props
} : {}, children ? [...children] : []);
const Header = (props, children) => Element("header", props ? {
  ...props
} : {}, children ? [...children] : []);
const Hr = (props, children) => Element("hr", props ? {
  ...props
} : {}, children ? [...children] : []);
const I = (props, children) => Element("i", props ? {
  ...props
} : {}, children ? [...children] : []);
const Img = (props, children) => Element("img", props ? {
  ...props
} : {}, children ? [...children] : []);
const Input = (props, children) => Element("input", props ? {
  ...props
} : {}, children ? [...children] : []);
const Label = (props, children) => Element("label", props ? {
  ...props
} : {}, children ? [...children] : []);
const Legend = (props, children) => Element("legend", props ? {
  ...props
} : {}, children ? [...children] : []);
const Li = (props, children) => Element("li", props ? {
  ...props
} : {}, children ? [...children] : []);
const Main = (props, children) => Element("main", props ? {
  ...props
} : {}, children ? [...children] : []);
const Ol = (props, children) => Element("ol", props ? {
  ...props
} : {}, children ? [...children] : []);
const Option = (props, children) => Element("option", props ? {
  ...props
} : {}, children ? [...children] : []);
const P = (props, children) => Element("p", props ? {
  ...props
} : {}, children ? [...children] : []);
const Select = (props, children) => Element("select", props ? {
  ...props
} : {}, children ? [...children] : []);
const Strong = (props, children) => Element("strong", props ? {
  ...props
} : {}, children ? [...children] : []);
const Span = (props, children) => Element("span", props ? {
  ...props
} : {}, children ? [...children] : []);
const Textarea = (props, children) => Element("textarea", props ? {
  ...props
} : {}, children ? [...children] : []);
const Ul = (props, children) => Element("ul", props ? {
  ...props
} : {}, children ? [...children] : []);

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
  repoName: "boilerplate-webpack"
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
  xl: 1200
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
  return Array(numChildren).fill(0).map(elem => (0,_components_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("p", {
    className: "display-b mb-1",
    innerText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam ad, maxime enim sequi sunt quo facilis illo eveniet laudantium quae repellendus dolorum omnis minima ducimus architecto! Beatae, vel assumenda."
  }));
}

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNWO0FBQ3FCO0FBQ047O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksT0FBTyxHQUFHQSxDQUFBLEtBQU07RUFDcEIsTUFBTUMsT0FBTyxHQUFHTCwyREFBTyxDQUFDLEtBQUssRUFBRTtJQUFFTSxFQUFFLEVBQUU7RUFBVSxDQUFDLEVBQUUsQ0FDaERMLDBEQUFNLENBQUMsQ0FBQyxFQUNSRSxvRUFBVyxDQUFDLENBQUMsRUFDYkQsd0VBQWEsQ0FBQyxDQUFDLENBQ2hCLENBQUM7RUFFRixPQUFPRyxPQUFPO0FBQ2hCLENBQUM7QUFFRCxpRUFBZUQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnRCO0FBQ2dEO0FBQ0Y7O0FBRTlDO0FBQ29FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU1LLFdBQVcsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztBQUU1QyxNQUFNQyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNO0VBQy9CLE1BQU1DLFVBQVUsR0FBR2IsMkRBQU8sQ0FDeEIsR0FBRyxFQUNIO0lBQ0VjLElBQUksRUFBRSxxQ0FBcUMsR0FBR04seUVBQVUsQ0FBQ087RUFDM0QsQ0FBQyxFQUNELENBQUNSLG1FQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FDMUIsQ0FBQztFQUVELE1BQU1TLGFBQWEsR0FBR2hCLDJEQUFPLENBQUMsS0FBSyxFQUFFO0lBQ25DaUIsU0FBUyxFQUFFLDRCQUE0QjtJQUN2Q0MsU0FBUyxFQUFHLHFCQUFvQlQsV0FBWTtFQUM5QyxDQUFDLENBQUM7RUFFRixNQUFNVSxZQUFZLEdBQUcsRUFBRTtFQUN2QixNQUFNQyxTQUFTLEdBQUdwQiwyREFBTyxDQUN2QixLQUFLLEVBQ0w7SUFBRWlCLFNBQVMsRUFBRSxxQkFBcUIsR0FBRyxHQUFHLEdBQUdFO0VBQWEsQ0FBQztFQUN6RDtFQUNBLENBQUNILGFBQWEsRUFBRUgsVUFBVSxDQUM1QixDQUFDO0VBQ0QsT0FBT08sU0FBUztBQUNsQixDQUFDO0FBRUQsaUVBQWVSLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNqQztBQUNnRDtBQUNNO0FBQ3VCO0FBQy9COztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1WLGFBQWEsR0FBR0EsQ0FBQSxLQUFNO0VBQzFCLE1BQU1pQixZQUFZLEdBQUcsMkJBQTJCO0VBQ2hELE1BQU1JLE1BQU0sR0FBR3ZCLDJEQUFPLENBQ3BCLFFBQVEsRUFDUjtJQUNFTSxFQUFFLEVBQUUsUUFBUTtJQUNaVyxTQUFTLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBR0U7RUFDeEIsQ0FBQyxFQUNELENBQUNQLCtEQUFrQixDQUFDLENBQUMsRUFBRVUsNkRBQVksQ0FBQyxDQUFDLEVBQUVELG1GQUFxQixDQUFDLENBQUMsQ0FDaEUsQ0FBQztFQUNELE9BQU9FLE1BQU07QUFDZixDQUFDO0FBRUQsaUVBQWVyQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I1QjtBQUNtRDtBQUNGO0FBRXNDO0FBQ007QUFFM0M7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW1CLHFCQUFxQixHQUFHQSxDQUFBLEtBQU07RUFDbEMsTUFBTUYsWUFBWSxHQUFHLEVBQUU7RUFDdkIsTUFBTUMsU0FBUyxHQUFHcEIsMkRBQU8sQ0FDdkIsS0FBSyxFQUNMO0lBQUVpQixTQUFTLEVBQUUsd0JBQXdCLEdBQUcsR0FBRyxHQUFHRTtFQUFhLENBQUM7RUFDNUQ7RUFDQSxDQUNFSyw4RkFBZSxDQUFDO0lBQ2RHLEtBQUssRUFBRSxtQkFBbUI7SUFDMUJDLFFBQVEsRUFBRSxDQUNSSiw4RkFBZSxDQUFDO01BQ2RHLEtBQUssRUFBRSxPQUFPO01BQ2RDLFFBQVEsRUFBRSxDQUNSSCxpR0FBa0IsQ0FBQztRQUNqQkUsS0FBSyxFQUFFLFFBQVE7UUFDZmIsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQ2MsUUFBUSxFQUFFLENBQUNyQixtRUFBSSxDQUFDLGlCQUFpQixDQUFDO01BQ3BDLENBQUMsQ0FBQyxFQUNGaUIsOEZBQWUsQ0FBQztRQUNkRyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxRQUFRLEVBQUUsQ0FBQ0YsNkRBQWdCLENBQUMsQ0FBQztNQUMvQixDQUFDLENBQUM7SUFFTixDQUFDLENBQUM7RUFFTixDQUFDLENBQUMsQ0FFTixDQUFDO0VBQ0QsT0FBT04sU0FBUztBQUNsQixDQUFDO0FBRUQsaUVBQWVDLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDaERwQztBQUNtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNO0VBQzdCLE1BQU1HLFlBQVksR0FBRzdCLDJEQUFPLENBQUMsR0FBRyxFQUFFO0lBQ2hDYyxJQUFJLEVBQUUsdUJBQXVCO0lBQzdCSSxTQUFTLEVBQUU7RUFDYixDQUFDLENBQUM7RUFDRixNQUFNWSxXQUFXLEdBQUc5QiwyREFBTyxDQUFDLEdBQUcsRUFBRTtJQUMvQmMsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkksU0FBUyxFQUFFO0VBQ2IsQ0FBQyxDQUFDO0VBRUYsTUFBTWEsR0FBRyxHQUFHL0IsMkRBQU8sQ0FBQyxLQUFLLEVBQUU7SUFDekJnQyxTQUFTLEVBQUcsNENBQTJDSCxZQUFZLENBQUNJLFNBQVUsdUNBQXNDSCxXQUFXLENBQUNHLFNBQVU7RUFDNUksQ0FBQyxDQUFDO0VBRUYsTUFBTWQsWUFBWSxHQUFHLEVBQUU7RUFDdkIsTUFBTWUsYUFBYSxHQUFHbEMsMkRBQU8sQ0FDM0IsS0FBSyxFQUNMO0lBQUVpQixTQUFTLEVBQUUsbUJBQW1CLEdBQUcsR0FBRyxHQUFHRSxZQUFZO0lBQUVhLFNBQVMsRUFBRztFQUFFLENBQUM7RUFDdEU7RUFDQSxDQUFDRCxHQUFHLENBQ04sQ0FBQztFQUNELE9BQU9HLGFBQWE7QUFDdEIsQ0FBQztBQUVELGlFQUFlUixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ25DL0I7QUFDZ0Q7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUosWUFBWSxHQUFHQSxDQUFBLEtBQU07RUFDekIsTUFBTWEsT0FBTyxHQUFHbkMsMkRBQU8sQ0FBQyxHQUFHLEVBQUU7SUFDM0JjLElBQUksRUFBRSxpQ0FBaUM7SUFDdkNHLFNBQVMsRUFBRSxVQUFVO0lBQ3JCQyxTQUFTLEVBQUU7RUFDYixDQUFDLENBQUM7RUFFRixNQUFNQyxZQUFZLEdBQUcsRUFBRTtFQUN2QixNQUFNQyxTQUFTLEdBQUdwQiwyREFBTyxDQUN2QixLQUFLLEVBQ0w7SUFDRWlCLFNBQVMsRUFBRSxlQUFlLEdBQUcsR0FBRyxHQUFHRSxZQUFZO0lBQy9DRCxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0Q7RUFDQSxDQUFDaUIsT0FBTyxDQUNWLENBQUM7RUFDRCxPQUFPZixTQUFTO0FBQ2xCLENBQUM7QUFFRCxpRUFBZUUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDL0IzQjtBQUNnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNckIsTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDbkIsTUFBTW1DLEVBQUUsR0FBR3BDLDJEQUFPLENBQUMsSUFBSSxFQUFFO0lBQUVrQixTQUFTLEVBQUU7RUFBcUIsQ0FBQyxDQUFDO0VBRTdELE1BQU1DLFlBQVksR0FBRywrQkFBK0I7RUFDcEQsTUFBTWtCLE1BQU0sR0FBR3JDLDJEQUFPLENBQ3BCLFFBQVEsRUFDUjtJQUNFTSxFQUFFLEVBQUUsUUFBUTtJQUNaVyxTQUFTLEVBQUUsUUFBUSxHQUFHLEdBQUcsR0FBR0U7RUFDOUIsQ0FBQyxFQUNELENBQUNpQixFQUFFLENBQ0wsQ0FBQztFQUNELE9BQU9DLE1BQU07QUFDZixDQUFDO0FBRUQsaUVBQWVwQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCckI7QUFDcUQ7QUFDd0M7QUFDaEQ7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsV0FBVyxHQUFHQSxDQUFBLEtBQU07RUFDeEIsTUFBTWdCLFlBQVksR0FBRyxFQUFFO0VBQ3ZCLE1BQU1zQixJQUFJLEdBQUdELHdEQUFJLENBQ2Y7SUFDRWxDLEVBQUUsRUFBRSxjQUFjO0lBQ2xCVyxTQUFTLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBR0U7RUFDeEIsQ0FBQztFQUNEO0VBQ0EsQ0FBQ29CLG9HQUFrQixDQUFDLENBQUMsQ0FDdkIsQ0FBQztFQUNELE9BQU9FLElBQUk7QUFDYixDQUFDO0FBRUQsaUVBQWV0QyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUIxQjtBQUMrQztBQUNwQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNb0Msa0JBQWtCLEdBQUdBLENBQUEsS0FBTTtFQUMvQixNQUFNTCxhQUFhLEdBQUdRLHVEQUFHLENBQ3ZCO0lBQUV4QixTQUFTLEVBQUcsRUFBQztJQUFFRCxTQUFTLEVBQUc7RUFBc0IsQ0FBQztFQUNwRDtFQUNBLENBQ0VWLGlEQUFJLENBQUMscUJBQXFCLENBQUMsRUFDM0JBLGlEQUFJLENBQUMsWUFBWSxDQUFDLEVBQ2xCQSxpREFBSSxDQUFDLGFBQWEsQ0FBQyxFQUNuQkEsaURBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN0QkEsaURBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUNoQ0EsaURBQUksQ0FBQyxZQUFZLENBQUMsRUFDbEJBLGlEQUFJLENBQUMsZUFBZSxDQUFDLEVBQ3JCQSxpREFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQ2hDQSxpREFBSSxDQUFDLCtCQUErQixDQUFDLEVBQ3JDQSxpREFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQzNCQSxpREFBSSxDQUFDLGVBQWUsQ0FBQyxFQUNyQkEsaURBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUNoQ0EsaURBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUMzQkEsaURBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUN0Q0EsaURBQUksQ0FBQyxjQUFjLENBQUMsRUFDcEJBLGlEQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FFbEMsQ0FBQztFQUNELE9BQU8yQixhQUFhO0FBQ3RCLENBQUM7QUFFRCxpRUFBZUssa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2pDO0FBQ21EO0FBRU87QUFDSTtBQUUxQjs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNZixlQUFlLEdBQUl1QixLQUFLLElBQUs7RUFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDbEIsTUFBTUcsV0FBVyxHQUFHSixnREFBTSxDQUFDLENBQUM7RUFDNUIsTUFBTTtJQUFFbkIsS0FBSztJQUFFQztFQUFTLENBQUMsR0FBR21CLEtBQUs7RUFDakMsTUFBTTVCLFlBQVksR0FBRyxFQUFFO0VBQ3ZCLE1BQU1nQyxLQUFLLEdBQUduRCwyREFBTyxDQUNuQixHQUFHLEVBQ0g7SUFBRWlCLFNBQVMsRUFBRSxrQkFBa0IsR0FBRyxHQUFHLEdBQUdFO0VBQWEsQ0FBQztFQUN0RDtFQUNBLENBQ0V3QixpRUFBb0IsQ0FBQztJQUFFaEIsS0FBSztJQUFFdUI7RUFBWSxDQUFDLENBQUMsRUFDNUNOLG1FQUFzQixDQUFDO0lBQUVoQixRQUFRO0lBQUVzQjtFQUFZLENBQUMsQ0FBQyxDQUVyRCxDQUFDO0VBQ0QsT0FBT0MsS0FBSztBQUNkLENBQUM7QUFFRCxpRUFBZTNCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakM5QjtBQUNtRDtBQUNNO0FBQ007O0FBRS9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW9CLHNCQUFzQixHQUFJRyxLQUFLLElBQUs7RUFDeEMsSUFBSTtJQUFFbkIsUUFBUTtJQUFFc0I7RUFBWSxDQUFDLEdBQUdILEtBQUs7RUFDckNuQixRQUFRLEdBQUdBLFFBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQUU7RUFFbkMsTUFBTXZCLE9BQU8sR0FBR0wsMkRBQU8sQ0FBQyxLQUFLLEVBQUU7SUFBRWlCLFNBQVMsRUFBRTtFQUFVLENBQUMsRUFBRSxDQUFDLEdBQUdXLFFBQVEsQ0FBQyxDQUFDO0VBQ3ZFLE1BQU1ULFlBQVksR0FBRyxFQUFFO0VBQ3ZCLE1BQU1lLGFBQWEsR0FBR2xDLDJEQUFPLENBQzNCLEtBQUssRUFDTDtJQUNFTSxFQUFFLEVBQUcsc0JBQXFCNEMsV0FBWSxFQUFDO0lBQ3ZDakMsU0FBUyxFQUFFLDBCQUEwQixHQUFHLEdBQUcsR0FBR0U7RUFDaEQsQ0FBQztFQUNEO0VBQ0EsQ0FBQ2QsT0FBTyxDQUNWLENBQUM7RUFDRCxPQUFPNkIsYUFBYTtBQUN0QixDQUFDO0FBRUQsaUVBQWVVLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9CckM7QUFDbUQ7QUFDeEI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTVSxlQUFlQSxDQUFDSixXQUFXLEVBQUU7RUFDcEMsTUFBTUssZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUM3QyxzQkFBcUJQLFdBQVksRUFDcEMsQ0FBQztFQUNELE1BQU1RLHFCQUFxQixHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FDbEQsNkJBQTRCUCxXQUFZLEVBQzNDLENBQUM7RUFDREssZ0JBQWdCLENBQUNJLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUM3Q0YscUJBQXFCLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNwRDtBQUVBLE1BQU1qQixvQkFBb0IsR0FBSUksS0FBSyxJQUFLO0VBQ3RDLE1BQU07SUFBRXBCLEtBQUs7SUFBRXVCO0VBQVksQ0FBQyxHQUFHSCxLQUFLO0VBRXBDLE1BQU1jLFlBQVksR0FBRzdELDJEQUFPLENBQzFCLFFBQVEsRUFDUjtJQUNFTSxFQUFFLEVBQUcsNkJBQTRCNEMsV0FBWSxFQUFDO0lBQzlDWSxPQUFPQSxDQUFBLEVBQUc7TUFDUlIsZUFBZSxDQUFDSixXQUFXLENBQUM7SUFDOUI7RUFDRixDQUFDLEVBQ0QsQ0FBQzNDLGlEQUFJLENBQUMsY0FBYyxDQUFDLENBQ3ZCLENBQUM7RUFFRCxNQUFNWSxZQUFZLEdBQUcsRUFBRTtFQUN2QixNQUFNNEMsUUFBUSxHQUFHL0QsMkRBQU8sQ0FDdEIsS0FBSyxFQUNMO0lBQUVpQixTQUFTLEVBQUUsd0JBQXdCLEdBQUcsR0FBRyxHQUFHRTtFQUFhLENBQUMsRUFDNUQsQ0FDRW5CLDJEQUFPLENBQUMsS0FBSyxFQUFFO0lBQ2JpQixTQUFTLEVBQUUsYUFBYTtJQUN4QkMsU0FBUyxFQUFFUyxLQUFLO0lBQ2hCbUMsT0FBT0EsQ0FBQSxFQUFHO01BQ1JSLGVBQWUsQ0FBQ0osV0FBVyxDQUFDO0lBQzlCO0VBQ0YsQ0FBQyxDQUFDLEVBQ0ZXLFlBQVksQ0FFaEIsQ0FBQztFQUVELE9BQU9FLFFBQVE7QUFDakIsQ0FBQztBQUVELGlFQUFlcEIsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUNwRG5DO0FBQ21EOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1sQixrQkFBa0IsR0FBSXNCLEtBQUssSUFBSztFQUNwQyxJQUFJO0lBQUVwQixLQUFLO0lBQUViLElBQUk7SUFBRWM7RUFBUyxDQUFDLEdBQUdtQixLQUFLO0VBQ3JDbkIsUUFBUSxHQUFHQSxRQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUFFO0VBRW5DLE1BQU1ULFlBQVksR0FBRyxFQUFFO0VBRXZCLE1BQU1nQyxLQUFLLEdBQUduRCwyREFBTyxDQUNuQixHQUFHLEVBQ0g7SUFDRWlCLFNBQVMsRUFBRyxHQUFFRSxZQUFhLHlCQUN6QkwsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUNwQixFQUFDO0lBQ0ZJLFNBQVMsRUFBRVM7RUFDYixDQUFDO0VBQ0Q7RUFDQSxDQUFDLEdBQUdDLFFBQVEsQ0FDZCxDQUFDO0VBQ0QsSUFBSWQsSUFBSSxFQUFFO0lBQ1JxQyxLQUFLLENBQUNyQyxJQUFJLEdBQUdBLElBQUk7RUFDbkI7RUFDQSxPQUFPcUMsS0FBSztBQUNkLENBQUM7QUFFRCxpRUFBZTFCLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0FDbENqQztBQUNnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNbEIsSUFBSSxHQUFJeUQsU0FBUyxJQUFLO0VBQzFCLE1BQU1DLElBQUksR0FBR2pFLDJEQUFPLENBQUMsR0FBRyxFQUFFO0lBQUVpQixTQUFTLEVBQUcsUUFBTytDLFNBQVU7RUFBYyxDQUFDLENBQUM7RUFDekUsT0FBT0MsSUFBSTtBQUNiLENBQUM7QUFFRCxpRUFBZTFELElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNUCxPQUFPLEdBQUcsU0FBQUEsQ0FBQ2tFLE9BQU8sRUFBRUMsUUFBUSxFQUFzQjtFQUFBLElBQXBCQyxRQUFRLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUk7RUFDeEQ7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJRyxzQkFBc0IsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNyQyxJQUFJQyxVQUFVLEdBQUcsRUFBRTtFQUNuQkQsc0JBQXNCLENBQUNFLE9BQU8sQ0FBRUMsUUFBUSxJQUFLO0lBQzNDLElBQUlBLFFBQVEsSUFBSVIsUUFBUSxFQUFFO01BQ3hCLE1BQU1TLEtBQUssR0FBR1QsUUFBUSxDQUFDUSxRQUFRLENBQUM7TUFDaENGLFVBQVUsQ0FBQ0ksSUFBSSxDQUFDO1FBQUVDLElBQUksRUFBRUgsUUFBUTtRQUFFQyxLQUFLLEVBQUVBO01BQU0sQ0FBQyxDQUFDO01BQ2pELE9BQU9ULFFBQVEsQ0FBQ1EsUUFBUSxDQUFDO0lBQzNCO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsTUFBTXpDLGFBQWEsR0FBRzZDLE1BQU0sQ0FBQ0MsTUFBTSxDQUNqQ3hCLFFBQVEsQ0FBQ3lCLGFBQWEsQ0FBQ2YsT0FBTyxDQUFDLEVBQy9CQyxRQUNGLENBQUM7O0VBRUQ7RUFDQSxJQUFJQyxRQUFRLElBQUksQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLENBQUNmLFFBQVEsQ0FBQyxFQUFFO0lBQ3hDQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBUSxDQUFDO0VBQ3ZCOztFQUVBO0VBQ0EsSUFBSUEsUUFBUSxFQUFFO0lBQ1pBLFFBQVEsQ0FBQ00sT0FBTyxDQUFFVSxLQUFLLElBQUtsRCxhQUFhLENBQUNtRCxXQUFXLENBQUNELEtBQUssQ0FBQyxDQUFDO0VBQy9EOztFQUVBO0VBQ0EsSUFBSVgsVUFBVSxDQUFDSCxNQUFNLEVBQUU7SUFDckJHLFVBQVUsQ0FBQ0MsT0FBTyxDQUFFQyxRQUFRLElBQUs7TUFDL0J6QyxhQUFhLENBQUNvRCxZQUFZLENBQUNYLFFBQVEsQ0FBQ0csSUFBSSxFQUFFSCxRQUFRLENBQUNDLEtBQUssQ0FBQztJQUMzRCxDQUFDLENBQUM7RUFDSjtFQUVBLE9BQU8xQyxhQUFhO0FBQ3RCLENBQUM7O0FBRUQ7QUFDTyxNQUFNcUQsQ0FBQyxHQUFHQSxDQUFDeEMsS0FBSyxFQUFFbkIsUUFBUSxLQUMvQjVCLE9BQU8sQ0FBQyxHQUFHLEVBQUUrQyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRW5CLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVqRSxNQUFNNEQsT0FBTyxHQUFHQSxDQUFDekMsS0FBSyxFQUFFbkIsUUFBUSxLQUNyQzVCLE9BQU8sQ0FBQyxTQUFTLEVBQUUrQyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRW5CLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUV2RSxNQUFNNkQsQ0FBQyxHQUFHQSxDQUFDMUMsS0FBSyxFQUFFbkIsUUFBUSxLQUMvQjVCLE9BQU8sQ0FBQyxHQUFHLEVBQUUrQyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRW5CLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVqRSxNQUFNOEQsSUFBSSxHQUFHQSxDQUFDM0MsS0FBSyxFQUFFbkIsUUFBUSxLQUNsQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUUrQyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRW5CLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVwRSxNQUFNK0QsTUFBTSxHQUFHQSxDQUFDNUMsS0FBSyxFQUFFbkIsUUFBUSxLQUNwQzVCLE9BQU8sQ0FBQyxRQUFRLEVBQUUrQyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRW5CLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUV0RSxNQUFNZ0UsRUFBRSxHQUFHQSxDQUFDN0MsS0FBSyxFQUFFbkIsUUFBUSxLQUNoQzVCLE9BQU8sQ0FBQyxJQUFJLEVBQUUrQyxLQUFLLEdBQUc7RUFBRSxHQUFHQTtBQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRW5CLFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUVsRSxNQUFNYyxHQUFHLEdBQUdBLENBQUNLLEtBQUssRUFBRW5CLFFBQVEsS0FDakM1QixPQUFPLENBQUMsS0FBSyxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbkUsTUFBTWlFLFFBQVEsR0FBR0EsQ0FBQzlDLEtBQUssRUFBRW5CLFFBQVEsS0FDdEM1QixPQUFPLENBQUMsVUFBVSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFeEUsTUFBTWtFLFFBQVEsR0FBR0EsQ0FBQy9DLEtBQUssRUFBRW5CLFFBQVEsS0FDdEM1QixPQUFPLENBQUMsVUFBVSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFeEUsTUFBTW1FLE1BQU0sR0FBR0EsQ0FBQ2hELEtBQUssRUFBRW5CLFFBQVEsS0FDcEM1QixPQUFPLENBQUMsUUFBUSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFdEUsTUFBTW9FLElBQUksR0FBR0EsQ0FBQ2pELEtBQUssRUFBRW5CLFFBQVEsS0FDbEM1QixPQUFPLENBQUMsTUFBTSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFcEUsTUFBTXFFLEVBQUUsR0FBR0EsQ0FBQ2xELEtBQUssRUFBRW5CLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTXNFLEVBQUUsR0FBR0EsQ0FBQ25ELEtBQUssRUFBRW5CLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTXVFLEVBQUUsR0FBR0EsQ0FBQ3BELEtBQUssRUFBRW5CLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTTNCLE1BQU0sR0FBR0EsQ0FBQzhDLEtBQUssRUFBRW5CLFFBQVEsS0FDcEM1QixPQUFPLENBQUMsUUFBUSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFdEUsTUFBTXdFLEVBQUUsR0FBR0EsQ0FBQ3JELEtBQUssRUFBRW5CLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTXlFLENBQUMsR0FBR0EsQ0FBQ3RELEtBQUssRUFBRW5CLFFBQVEsS0FDL0I1QixPQUFPLENBQUMsR0FBRyxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFakUsTUFBTTBFLEdBQUcsR0FBR0EsQ0FBQ3ZELEtBQUssRUFBRW5CLFFBQVEsS0FDakM1QixPQUFPLENBQUMsS0FBSyxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbkUsTUFBTTJFLEtBQUssR0FBR0EsQ0FBQ3hELEtBQUssRUFBRW5CLFFBQVEsS0FDbkM1QixPQUFPLENBQUMsT0FBTyxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFckUsTUFBTTRFLEtBQUssR0FBR0EsQ0FBQ3pELEtBQUssRUFBRW5CLFFBQVEsS0FDbkM1QixPQUFPLENBQUMsT0FBTyxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFckUsTUFBTTZFLE1BQU0sR0FBR0EsQ0FBQzFELEtBQUssRUFBRW5CLFFBQVEsS0FDcEM1QixPQUFPLENBQUMsUUFBUSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFdEUsTUFBTThFLEVBQUUsR0FBR0EsQ0FBQzNELEtBQUssRUFBRW5CLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFK0MsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTVksSUFBSSxHQUFHQSxDQUFDTyxLQUFLLEVBQUVuQixRQUFRLEtBQ2xDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXBFLE1BQU0rRSxFQUFFLEdBQUdBLENBQUM1RCxLQUFLLEVBQUVuQixRQUFRLEtBQ2hDNUIsT0FBTyxDQUFDLElBQUksRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRWxFLE1BQU1nRixNQUFNLEdBQUdBLENBQUM3RCxLQUFLLEVBQUVuQixRQUFRLEtBQ3BDNUIsT0FBTyxDQUFDLFFBQVEsRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXRFLE1BQU1pRixDQUFDLEdBQUdBLENBQUM5RCxLQUFLLEVBQUVuQixRQUFRLEtBQy9CNUIsT0FBTyxDQUFDLEdBQUcsRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRWpFLE1BQU1rRixNQUFNLEdBQUdBLENBQUMvRCxLQUFLLEVBQUVuQixRQUFRLEtBQ3BDNUIsT0FBTyxDQUFDLFFBQVEsRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXRFLE1BQU1tRixNQUFNLEdBQUdBLENBQUNoRSxLQUFLLEVBQUVuQixRQUFRLEtBQ3BDNUIsT0FBTyxDQUFDLFFBQVEsRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXRFLE1BQU1vRixJQUFJLEdBQUdBLENBQUNqRSxLQUFLLEVBQUVuQixRQUFRLEtBQ2xDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXBFLE1BQU1xRixRQUFRLEdBQUdBLENBQUNsRSxLQUFLLEVBQUVuQixRQUFRLEtBQ3RDNUIsT0FBTyxDQUFDLFVBQVUsRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXhFLE1BQU1zRixFQUFFLEdBQUdBLENBQUNuRSxLQUFLLEVBQUVuQixRQUFRLEtBQ2hDNUIsT0FBTyxDQUFDLElBQUksRUFBRStDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFbkIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzVJbEUsTUFBTXBCLFVBQVUsR0FBRztFQUN4Qk8sUUFBUSxFQUFFO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmdEO0FBRTFDLFNBQVNxRyxpQkFBaUJBLENBQUEsRUFBRztFQUNsQ0QsOERBQW9CLENBQUMsQ0FBQztFQUN0QjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNMdUM7QUFFdkMsTUFBTUcsV0FBVyxHQUFHO0VBQ2xCQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxFQUFFLEVBQUUsR0FBRztFQUNQQyxFQUFFLEVBQUUsR0FBRztFQUNQQyxFQUFFLEVBQUUsR0FBRztFQUNQQyxFQUFFLEVBQUU7QUFDTixDQUFDO0FBRU0sU0FBU1Isb0JBQW9CQSxDQUFBLEVBQUc7RUFDckNTLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHUixnREFBUSxDQUFDLFVBQVVTLENBQUMsRUFBRTtJQUN0QztFQUFBLENBQ0QsQ0FBQztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMEQ7QUFFbkQsTUFBTUMscUJBQXFCLEdBQUdBLENBQUNDLE1BQU0sRUFBRUMsY0FBYyxLQUFLO0VBQy9ELE9BQU9ELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLENBQUMsRUFBRUQsY0FBYyxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUMxRCxDQUFDO0FBRU0sTUFBTWQsUUFBUSxHQUFHLFNBQUFBLENBQVVlLEVBQUUsRUFBRTtFQUNwQztFQUNBLElBQUlDLE9BQU87O0VBRVg7RUFDQSxPQUFPLFlBQVk7SUFDakI7O0lBRUEsSUFBSUMsT0FBTyxHQUFHLElBQUk7SUFDbEIsSUFBSUMsSUFBSSxHQUFHbEUsU0FBUzs7SUFFcEI7SUFDQSxJQUFJZ0UsT0FBTyxFQUFFO01BQ1hULE1BQU0sQ0FBQ1ksb0JBQW9CLENBQUNILE9BQU8sQ0FBQztJQUN0Qzs7SUFFQTtJQUNBQSxPQUFPLEdBQUdULE1BQU0sQ0FBQ2EscUJBQXFCLENBQUMsWUFBWTtNQUNqREwsRUFBRSxDQUFDTSxLQUFLLENBQUNKLE9BQU8sRUFBRUMsSUFBSSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNKLENBQUM7QUFDSCxDQUFDO0FBRU0sU0FBU0ksVUFBVUEsQ0FBQ1gsTUFBTSxFQUFFO0VBQ2pDLElBQUlBLE1BQU0sRUFBRTtJQUNWLE9BQU9BLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1ksV0FBVyxDQUFDLENBQUMsR0FBR1osTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNXLFdBQVcsQ0FBQyxDQUFDO0VBQ2hFO0VBQ0EsT0FBT2IsTUFBTTtBQUNmO0FBRU8sU0FBUzFGLHNCQUFzQkEsQ0FBQ3dHLFdBQVcsRUFBRTtFQUNsRCxPQUFPNUQsS0FBSyxDQUFDNEQsV0FBVyxDQUFDLENBQ3RCQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1BDLEdBQUcsQ0FBRUMsSUFBSSxJQUNSakosc0VBQU8sQ0FBQyxHQUFHLEVBQUU7SUFDWGlCLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0JDLFNBQVMsRUFDUDtFQUNKLENBQUMsQ0FDSCxDQUFDO0FBQ0w7Ozs7Ozs7Ozs7O0FDOUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZSxjQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUcseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0FwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBnQkFBMGdCO0FBQzFnQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHdEQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qkc7QUFDWTs7QUFFdkM7QUFDQTtBQUNBLCtDQUErQywrQ0FBRyxLQUFLOztBQUV2RDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyx5REFBUztBQUNsQjs7QUFFQSxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUN2QmM7O0FBRS9CO0FBQ0EscUNBQXFDLGlEQUFLO0FBQzFDOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ052QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDc0I7QUFDa0I7QUFFckVzQyxRQUFRLENBQUMwRixJQUFJLENBQUM3RCxXQUFXLENBQUNqRix1RUFBTyxDQUFDLENBQUMsQ0FBQztBQUVwQ2dILGtGQUFpQixDQUFDLENBQUM7O0FBRW5CO0FBQ0EsTUFBTStCLFNBQVMsR0FBRyxJQUFJO0FBQ3RCLElBQUlBLFNBQVMsRUFBRTtFQUNiO0FBQUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9Db3B5cmlnaHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0ljb25zRXhwbGFuYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1RPUExpbmtDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvQ3VzdG9tSWNvbnNEaXNwbGF5L0N1c3RvbUljb25zRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxDb250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxUaXRsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ljb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktcGFnZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBEeW5hbWljRm9vdGVyIGZyb20gXCIuLi9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbiBmcm9tIFwiLi4vTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiY29udGVudFwiIH0sIFtcbiAgICBIZWFkZXIoKSxcbiAgICBNYWluU2VjdGlvbigpLFxuICAgIER5bmFtaWNGb290ZXIoKSxcbiAgXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuaW1wb3J0IHsgZ2l0aHViSW5mbyB9IGZyb20gXCIuLi8uLi9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZ1wiO1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuLy8gVEVNUExBVEUgVkFSSUFCTEVTXG5jb25zdCBkeW5hbWljWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgQ29weXJpZ2h0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBnaXRodWJMaW5rID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvXCIgKyBnaXRodWJJbmZvLnJlcG9OYW1lLFxuICAgIH0sXG4gICAgW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildXG4gICk7XG5cbiAgY29uc3QgY29weXJpZ2h0SW5mbyA9IEVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtaW5mbyBkaXNwbGF5LWktYlwiLFxuICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke2R5bmFtaWNZZWFyfWAsXG4gIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IGNvbnRhaW5lciA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtY29udGFpbmVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbY29weXJpZ2h0SW5mbywgZ2l0aHViTGlua11cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENvcHlyaWdodENvbnRhaW5lciBmcm9tIFwiLi9Db3B5cmlnaHRDb250YWluZXJcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUT1BDb250YWluZXIgZnJvbSBcIi4vVE9QTGlua0NvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHluYW1pY0Zvb3RlciA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlXCI7XG4gIGNvbnN0IGZvb3RlciA9IEVsZW1lbnQoXG4gICAgXCJmb290ZXJcIixcbiAgICB7XG4gICAgICBpZDogXCJmb290ZXJcIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgW0NvcHlyaWdodENvbnRhaW5lcigpLCBUT1BDb250YWluZXIoKSwgQXR0cmlidXRpb25zQ29udGFpbmVyKCldXG4gICk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRm9vdGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbmltcG9ydCBJY29uc0V4cGxhbmF0aW9uIGZyb20gXCIuL0ljb25zRXhwbGFuYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImF0dHJpYnV0aW9ucy1jb250YWluZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgIHRpdGxlOiBcIlNpdGUgQXR0cmlidXRpb25zXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkljb25zXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBOb25FeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdpdGh1YlwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ29zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uKFwiaWNvbi1naXRodWItY2F0XCIpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIG90aGVyIEljb25zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uc0V4cGxhbmF0aW9uKCldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbnNDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb25zRXhwbGFuYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGlua3NjYXBlTGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vaW5rc2NhcGUub3JnL1wiLFxuICAgIGlubmVyVGV4dDogXCJJbmtzY2FwZVwiLFxuICB9KTtcbiAgY29uc3QgaWNvTW9vbkxpbmsgPSBFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL2ljb21vb24uaW8vXCIsXG4gICAgaW5uZXJUZXh0OiBcIkljb01vb25cIixcbiAgfSk7XG5cbiAgY29uc3QgZGl2ID0gRWxlbWVudChcImRpdlwiLCB7XG4gICAgaW5uZXJIVE1MOiBgQWxsIG90aGVyIGljb25zIHdlcmUgY3JlYXRlZCBieSBtZSB1c2luZyAke2lua3NjYXBlTGluay5vdXRlckhUTUx9IGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gYSBmb250IHdpdGggJHtpY29Nb29uTGluay5vdXRlckhUTUx9YCxcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IEVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJpY29ucy1leHBsYW5hdGlvblwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsIGlubmVySFRNTDogYGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2Rpdl1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc0V4cGxhbmF0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBUT1BDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcExpbmsgPSBFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ0b3AtY29udGFpbmVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBCeTpcIixcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbdG9wTGlua11cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRPUENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoMSA9IEVsZW1lbnQoXCJoMVwiLCB7IGlubmVyVGV4dDogXCJUaGlzIGlzIHRoZSBoZWFkZXJcIiB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGUgcC0yXCI7XG4gIGNvbnN0IGhlYWRlciA9IEVsZW1lbnQoXG4gICAgXCJoZWFkZXJcIixcbiAgICB7XG4gICAgICBpZDogXCJoZWFkZXJcIixcbiAgICAgIGNsYXNzTmFtZTogXCJoZWFkZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgW2gxXVxuICApO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IGdlbmVyYXRlVGVzdENvbnRlbnRBcnIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBDdXN0b21JY29uc0Rpc3BsYXkgZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9DdXN0b21JY29uc0Rpc3BsYXkvQ3VzdG9tSWNvbnNEaXNwbGF5XCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTWFpblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IG1haW4gPSBNYWluKFxuICAgIHtcbiAgICAgIGlkOiBcIm1haW4tc2VjdGlvblwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0N1c3RvbUljb25zRGlzcGxheSgpXVxuICApO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TZWN0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDdXN0b21JY29uc0Rpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBpbm5lclRleHQ6IGBgLCBjbGFzc05hbWU6IGBjdXN0b20taWNvbnMtZGlzcGxheWAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgSWNvbihcImljb24taGFtYnVyZ2VyLW1lbnVcIiksXG4gICAgICBJY29uKFwiaWNvbi1wYXVzZVwiKSxcbiAgICAgIEljb24oXCJpY29uLXBlbmNpbFwiKSxcbiAgICAgIEljb24oXCJpY29uLXBsdXMtc2lnblwiKSxcbiAgICAgIEljb24oXCJpY29uLXBsdXMtc2lnbiByb3RhdGUtNDVcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmFzaFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlXCIpLFxuICAgICAgSWNvbihcImljb24tdHJpYW5nbGUgcm90YXRlLTE4MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlLXNob3J0IHJvdGF0ZS05MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlLXNob3J0XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3dcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdyByb3RhdGUtMTgwXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnRcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdy1zaG9ydCByb3RhdGUtMjcwXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtZG93blwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWRvd24gcm90YXRlLTkwXCIpLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JY29uc0Rpc3BsYXk7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCBjb21wb25lbnRJZCA9IHV1aWR2NCgpO1xuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhbmVsID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7IGNsYXNzTmFtZTogXCJleHBhbmRhYmxlLXBhbmVsXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWxUaXRsZSh7IHRpdGxlLCBjb21wb25lbnRJZCB9KSxcbiAgICAgIEV4cGFuZGFibGVQYW5lbENvbnRlbnQoeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxDb250YWluZXIgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsXCI7XG5pbXBvcnQgTm9uRXhwYW5kYWJsZVBhbmVsQ29udGFpbmVyIGZyb20gXCIuL05vbkV4cGFuZGFibGVQYW5lbFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBjb250ZW50ID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSwgWy4uLmNoaWxkcmVuXSk7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgaWQ6IGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtY29udGVudFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW2NvbnRlbnRdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbmZ1bmN0aW9uIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCkge1xuICBjb25zdCBleHBhbnNpb25Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgY29uc3QgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGV4cGFuc2lvbkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB0b2dnbGVFeHBhbnNpb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWxUaXRsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBjb21wb25lbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZXhwYW5kQnV0dG9uID0gRWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIFtJY29uKFwiaWNvbi11cC1kb3duXCIpXVxuICApO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHRpdGxlRGl2ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImV4cGFuZGFibGUtcGFuZWwtdGl0bGVcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgW1xuICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGV4cGFuZEJ1dHRvbixcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHRpdGxlRGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsVGl0bGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE5vbkV4cGFuZGFibGVQYW5lbCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyB0aXRsZSwgaHJlZiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuXG4gIGNvbnN0IHBhbmVsID0gRWxlbWVudChcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGAke290aGVyQ2xhc3Nlc30gbm9uLWV4cGFuZGFibGUtcGFuZWwgJHtcbiAgICAgICAgaHJlZiA/IFwiaXMtbGlua1wiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFsuLi5jaGlsZHJlbl1cbiAgKTtcbiAgaWYgKGhyZWYpIHtcbiAgICBwYW5lbC5ocmVmID0gaHJlZjtcbiAgfVxuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb25FeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb24gPSAoaWNvbkNsYXNzKSA9PiB7XG4gIGNvbnN0IGljb24gPSBFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogYGljb24gJHtpY29uQ2xhc3N9IGRpc3BsYXktaS1iYCB9KTtcbiAgcmV0dXJuIGljb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZG9tIGVsZW1lbnQgd2l0aCBpdHMgaW5pdGlhbCBhdHRyaWJ1dGVzIGFuZCBjaGlsZCBlbGVtZW50cyBkZWZpbmVkIGJ5IGEgcGFzc2VkLWluIG9iamVjdCBhbmQgYXJyYXkgb2YgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlU3RyIHRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSByZXR1cm5lZCB5b3Ugd291bGQgdXNlIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzT2JqIChvcHRpb25hbCkgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvIGhhdmVcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkQXJyIChvcHRpb25hbCkgYW4gb2YgZWxlbWVudCBvYmplY3RzIHRvIGJlIGFwcGVuZGVkIGFzIGNoaWxkcmVuIHRvIHRoaXMgZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjcmVhdGVkIGluIG1lbW9yeVxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudCA9ICh0eXBlU3RyLCBwcm9wc09iaiwgY2hpbGRBcnIgPSBudWxsKSA9PiB7XG4gIC8vIFNvbWUgYXR0cmlidXRlcyBjYW4gb25seSBiZSBzZXQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlKCkgbWV0aG9kLlxuICAvLyBJZiBpdCBpcyBpbiB0aGUgcHJvcHNPYmogT2JqZWN0LmFzc2lnbiB3aWxsIGZhaWwuIFdlJ2xsIHJlbW92ZSBpdCBmcm9tIHRoZVxuICAvLyBwcm9wcyBvYmplY3QgaGVyZSBhbmQgYXNzaWduIHRoZW0gdG8gdGhlIHBhcmVudCBlbGVtZW50IGJlZm9yZSBpdCBpcyByZXR1cm5lZC5cbiAgLy8gVGhlc2UgYXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHNldEF0dHJpYnV0ZVByb3BlcnRpZXMgbGlzdCBmb3IgcHJvY2Vzc2luZy5cbiAgbGV0IHNldEF0dHJpYnV0ZVByb3BlcnRpZXMgPSBbXCJsaXN0XCJdO1xuICBsZXQgcHJvcGVydGllcyA9IFtdO1xuICBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgaWYgKHByb3BlcnR5IGluIHByb3BzT2JqKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7IG5hbWU6IHByb3BlcnR5LCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICBkZWxldGUgcHJvcHNPYmpbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIGFuIGVsZW1lbnQgYmFzZWQgb24gdGhlIHR5cGUgc3RyaW5nIHByb3ZpZGVkXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZVN0ciksXG4gICAgcHJvcHNPYmpcbiAgKTtcblxuICAvLyBBZGQgcGFzc2VkIGluIGNoaWxkIHRvIGFycmF5IGlmIGl0IGlzIG5vdCBhbHJlYWR5XG4gIGlmIChjaGlsZEFyciAmJiAhQXJyYXkuaXNBcnJheShjaGlsZEFycikpIHtcbiAgICBjaGlsZEFyciA9IFtjaGlsZEFycl07XG4gIH1cblxuICAvLyBBcHBlbmQgY2hpbGRyZW4gdG8gdGhlIGVsZW1lbnRcbiAgaWYgKGNoaWxkQXJyKSB7XG4gICAgY2hpbGRBcnIuZm9yRWFjaCgoY2hpbGQpID0+IHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IHByb3BlcnRpZXMgd2l0aCBzZXRBdHRyaWJ1dGUgaWYgbmVlZGVkXG4gIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIHBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5Lm5hbWUsIHByb3BlcnR5LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuLy8gIENPTU1PTiBFTEVNRU5UU1xuZXhwb3J0IGNvbnN0IEEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFydGljbGVcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYm9keVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnV0dG9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERpdiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkaXZcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRGF0YWxpc3QgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGF0YWxpc3RcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRmllbGRzZXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZmllbGRzZXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvb3RlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvcm1cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDMgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDNcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhlYWRlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW1nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImltZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbnB1dFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsYWJlbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMZWdlbmQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGVnZW5kXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExpID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibWFpblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBPbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJvbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBPcHRpb24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib3B0aW9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFAgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwicFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3QgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic2VsZWN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFN0cm9uZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzdHJvbmdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzcGFuXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInRleHRhcmVhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcbiIsImV4cG9ydCBjb25zdCBnaXRodWJJbmZvID0ge1xuICByZXBvTmFtZTogXCJib2lsZXJwbGF0ZS13ZWJwYWNrXCIsXG59O1xuIiwiaW1wb3J0IHsgYXBwbHlXaW5kb3dMaXN0ZW5lcnMgfSBmcm9tIFwiLi91aS1wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgLy8gY2xpY2tDYXJvdXNlbFBsYXkoKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQW5kQWRkRWxsaXBzZSA9IChzdHJpbmcsIG51bUNoYXJzVG9LZWVwKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbnVtQ2hhcnNUb0tlZXApLnRyaW1FbmQoKSArIFwiLi4uXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gc2V0dXAgYSB0aW1lclxuICBsZXQgdGltZW91dDtcblxuICAvLyByZXR1cm4gYSBmdW5jdGlvbiB0byBydW4gZGVib3VuY2VkXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy9zZXR1cCBhcmdzXG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIHRpbWVyIGNhbmNlbCBpdFxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgdGhlIG5ldyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXN0Q29udGVudEFycihudW1DaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkobnVtQ2hpbGRyZW4pXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChlbGVtKSA9PlxuICAgICAgRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1iIG1iLTFcIixcbiAgICAgICAgaW5uZXJUZXh0OlxuICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3IsIHVsbGFtIGFkLCBtYXhpbWUgZW5pbSBzZXF1aSBzdW50IHF1byBmYWNpbGlzIGlsbG8gZXZlbmlldCBsYXVkYW50aXVtIHF1YWUgcmVwZWxsZW5kdXMgZG9sb3J1bSBvbW5pcyBtaW5pbWEgZHVjaW11cyBhcmNoaXRlY3RvISBCZWF0YWUsIHZlbCBhc3N1bWVuZGEuXCIsXG4gICAgICB9KVxuICAgICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnRcIjtcbmltcG9ydCB7IGFwcGx5SW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuYXBwbHlJbml0aWFsU3RhdGUoKTtcblxuLy8gZGVidWdnaW5nXG5jb25zdCBkZWJ1Z2dpbmcgPSB0cnVlO1xuaWYgKGRlYnVnZ2luZykge1xuICAvL1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJIZWFkZXIiLCJEeW5hbWljRm9vdGVyIiwiTWFpblNlY3Rpb24iLCJDb250ZW50IiwiY29udGVudCIsImlkIiwiSWNvbiIsImdpdGh1YkluZm8iLCJkeW5hbWljWWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkNvcHlyaWdodENvbnRhaW5lciIsImdpdGh1YkxpbmsiLCJocmVmIiwicmVwb05hbWUiLCJjb3B5cmlnaHRJbmZvIiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0Iiwib3RoZXJDbGFzc2VzIiwiY29udGFpbmVyIiwiQXR0cmlidXRpb25zQ29udGFpbmVyIiwiVE9QQ29udGFpbmVyIiwiZm9vdGVyIiwiRXhwYW5kYWJsZVBhbmVsIiwiTm9uRXhwYW5kYWJsZVBhbmVsIiwiSWNvbnNFeHBsYW5hdGlvbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJpbmtzY2FwZUxpbmsiLCJpY29Nb29uTGluayIsImRpdiIsImlubmVySFRNTCIsIm91dGVySFRNTCIsInBhcmVudEVsZW1lbnQiLCJ0b3BMaW5rIiwiaDEiLCJoZWFkZXIiLCJnZW5lcmF0ZVRlc3RDb250ZW50QXJyIiwiQ3VzdG9tSWNvbnNEaXNwbGF5IiwiTWFpbiIsIm1haW4iLCJEaXYiLCJFeHBhbmRhYmxlUGFuZWxUaXRsZSIsIkV4cGFuZGFibGVQYW5lbENvbnRlbnQiLCJ2NCIsInV1aWR2NCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudElkIiwicGFuZWwiLCJFeHBhbmRhYmxlUGFuZWxDb250YWluZXIiLCJOb25FeHBhbmRhYmxlUGFuZWxDb250YWluZXIiLCJ0b2dnbGVFeHBhbnNpb24iLCJleHBhbnNpb25Db250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImV4cGFuZEJ1dHRvbiIsIm9uY2xpY2siLCJ0aXRsZURpdiIsImljb25DbGFzcyIsImljb24iLCJ0eXBlU3RyIiwicHJvcHNPYmoiLCJjaGlsZEFyciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwidmFsdWUiLCJwdXNoIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiQSIsIkFydGljbGUiLCJCIiwiQm9keSIsIkJ1dHRvbiIsIkJyIiwiRGF0YWxpc3QiLCJGaWVsZHNldCIsIkZvb3RlciIsIkZvcm0iLCJIMSIsIkgyIiwiSDMiLCJIciIsIkkiLCJJbWciLCJJbnB1dCIsIkxhYmVsIiwiTGVnZW5kIiwiTGkiLCJPbCIsIk9wdGlvbiIsIlAiLCJTZWxlY3QiLCJTdHJvbmciLCJTcGFuIiwiVGV4dGFyZWEiLCJVbCIsImFwcGx5V2luZG93TGlzdGVuZXJzIiwiYXBwbHlJbml0aWFsU3RhdGUiLCJkZWJvdW5jZSIsImJyZWFrUG9pbnRzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIndpbmRvdyIsIm9ucmVzaXplIiwiZSIsInRydW5jYXRlQW5kQWRkRWxsaXBzZSIsInN0cmluZyIsIm51bUNoYXJzVG9LZWVwIiwic2xpY2UiLCJ0cmltRW5kIiwiZm4iLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFwcGx5IiwiY2FwaXRhbGl6ZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJudW1DaGlsZHJlbiIsImZpbGwiLCJtYXAiLCJlbGVtIiwiYm9keSIsImRlYnVnZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=