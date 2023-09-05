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
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `copyright-container`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "copyright-info display-i-b",
    innerText: `© Carlin Mitchell ${dynamicYear}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    href: `https://github.com/carlin-mitchell/${_page_logic_data_data_page_config__WEBPACK_IMPORTED_MODULE_2__.githubInfo.repoName}`
  }, [(0,_custom_components_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-github-cat")])]);
  return parentElement;
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
  // prettier-ignore
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Footer)({
    id: `footer`,
    className: `bg-gray-dark-3 text-white`
  }, [(0,_CopyrightContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_TOPLinkContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_SiteAttributions_AttributionsContainer__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
  return parentElement;
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
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: `attributions-container`
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
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `icons-explanation`,
    innerHTML: ``
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerHTML: `All other icons were created by me using ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
      href: "https://inkscape.org/",
      innerText: "Inkscape"
    }).outerHTML} and converting them to a font with ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
      href: "https://icomoon.io/",
      innerText: "IcoMoon"
    }).outerHTML}`
  })]);
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
  const parentContainer = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: `top-container`,
    innerText: "Inspired By:"
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    href: "https://www.theodinproject.com/",
    className: "top-link",
    innerText: "The Odin Project"
  })]);
  return parentContainer;
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
/* harmony import */ var _custom_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_custom-components/ImageCarousel/ImageCarousel */ "./src/components/_custom-components/ImageCarousel/ImageCarousel.js");
/* harmony import */ var _custom_components_ValidatedForm_ValidatedForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_custom-components/ValidatedForm/ValidatedForm */ "./src/components/_custom-components/ValidatedForm/ValidatedForm.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
// COMPONENT IMPORTS






// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Main)({
    id: "main-section",
    className: "" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "icons-row"
  }, [(0,_custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "carousel-row"
  }, [(0,_custom_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "form-row"
  }, [(0,_custom_components_ValidatedForm_ValidatedForm__WEBPACK_IMPORTED_MODULE_3__["default"])()])]);
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
  const componentId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    title,
    children
  } = props;
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
    className: `expandable-panel`
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
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: `expandable-content-${componentId}`,
    className: `expandable-panel-content`
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "content"
  }, [...children])]);
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
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Element)("div", {
    className: `expandable-panel-title`
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "display-i-b",
    innerText: title,
    onclick() {
      toggleExpansion(componentId);
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: `expandable-content-button-${componentId}`,
    onclick() {
      toggleExpansion(componentId);
    }
  }, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-down")])]);
  return parentElement;
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
  const panel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.A)({
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

/***/ "./src/components/_custom-components/ImageCarousel/CarouselNav.js":
/*!************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselNav.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CarouselNavIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselNavIndicator */ "./src/components/_custom-components/ImageCarousel/CarouselNavIndicator.js");
/* harmony import */ var _CarouselPlayPauseContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselPlayPauseContainer */ "./src/components/_custom-components/ImageCarousel/CarouselPlayPauseContainer.js");




// LOGIC IMPORTS

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNav = imageData => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: ``,
    className: `carousel-nav pt-1`
  },
  // children
  [(0,_CarouselPlayPauseContainer__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  // Nav indicators
  ...imageData.map((obj, index) => (0,_CarouselNavIndicator__WEBPACK_IMPORTED_MODULE_1__["default"])({
    imageId: obj.uuid,
    startsActive: obj.isActive ? true : false
  }))]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselNav);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselNavIndicator.js":
/*!*********************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselNavIndicator.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselNavIndicator = props => {
  const {
    imageId,
    startsActive
  } = props;
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: `carousel-nav-${imageId}`,
    className: `carousel-indicator display-i-b bg-gray-light-6 ${startsActive ? "active" : ""}`,
    onclick: function () {
      (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__.clickCarouselNav)(imageId);
    }
  },
  // add child elements to the array below
  []);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselNavIndicator);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselPlayPauseContainer.js":
/*!***************************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselPlayPauseContainer.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _playAndPauseButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playAndPauseButtons */ "./src/components/_custom-components/ImageCarousel/playAndPauseButtons.js");
// COMPONENT IMPORTS


// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselPlayPauseContainer = () => {
  //

  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "carousel-play-pause-container"
  },
  // childern
  [_playAndPauseButtons__WEBPACK_IMPORTED_MODULE_1__.PauseButton, _playAndPauseButtons__WEBPACK_IMPORTED_MODULE_1__.PlayButton]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselPlayPauseContainer);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselSlide.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselSlide.js ***!
  \**************************************************************************/
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

const CarouselSlide = (imageSource, id, startsActive) => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: `carousel-slide-` + id,
    className: `carousel-slide ${startsActive ? "active" : ""}`
  },
  // children
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Img)({
    src: imageSource,
    className: "carousel-image"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselSlide);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselTrack.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselTrack.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CarouselSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselSlide */ "./src/components/_custom-components/ImageCarousel/CarouselSlide.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrack = imageData => {
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Ul)({
    id: ``,
    className: `carousel-track`
  },
  // children
  [...imageData.map((obj, index) => (0,_CarouselSlide__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.src, obj.uuid, obj.isActive ? true : false))]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselTrack);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/CarouselTrackContainer.js":
/*!***********************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/CarouselTrackContainer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _CarouselTrack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselTrack */ "./src/components/_custom-components/ImageCarousel/CarouselTrack.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const CarouselTrackContainer = imageData => {
  const container = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: ``,
    className: `carousel-track-container`
  },
  // children
  [(0,_CarouselTrack__WEBPACK_IMPORTED_MODULE_1__["default"])(imageData)]);
  return container;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselTrackContainer);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/ImageCarousel.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/ImageCarousel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _LeftButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftButton */ "./src/components/_custom-components/ImageCarousel/LeftButton.js");
/* harmony import */ var _RightButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RightButton */ "./src/components/_custom-components/ImageCarousel/RightButton.js");
/* harmony import */ var _CarouselTrackContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselTrackContainer */ "./src/components/_custom-components/ImageCarousel/CarouselTrackContainer.js");
/* harmony import */ var _CarouselNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselNav */ "./src/components/_custom-components/ImageCarousel/CarouselNav.js");
/* harmony import */ var _data_imageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/imageLoader */ "./src/components/_custom-components/ImageCarousel/data/imageLoader.js");
// COMPONENT IMPORTS








// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ImageCarousel = () => {
  const carousel = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    id: ``,
    className: `carousel pt-1 pb-1`
  },
  // children
  [(0,_LeftButton__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_CarouselTrackContainer__WEBPACK_IMPORTED_MODULE_3__["default"])(_data_imageLoader__WEBPACK_IMPORTED_MODULE_5__.imageData), (0,_RightButton__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_CarouselNav__WEBPACK_IMPORTED_MODULE_4__["default"])(_data_imageLoader__WEBPACK_IMPORTED_MODULE_5__.imageData)]);
  return carousel;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCarousel);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/LeftButton.js":
/*!***********************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/LeftButton.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const LeftCarouselButton = sharedClasses => {
  const button = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: ``,
    className: `carousel-button left ` + sharedClasses,
    onclick() {
      (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselLeft)();
    }
  },
  // children
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow rotate-270 ")]);
  return button;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftCarouselButton);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/RightButton.js":
/*!************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/RightButton.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const RightCarouselButton = sharedClasses => {
  const button = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    id: ``,
    className: `carousel-button right ` + sharedClasses,
    onclick() {
      (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselRight)();
    }
  },
  // children
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow rotate-90")]);
  return button;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightCarouselButton);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/data/imageLoader.js":
/*!*****************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/data/imageLoader.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageData: () => (/* binding */ imageData)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


// Image source info
const idList = Array(100).fill(null).map((e, i) => i).filter(e => e !== 97);
const randImgHeight = 300;
const randImgWidth = 500;
// add isActive: true to the slide you want to start as active
const imageSources = [{
  src: "https://picsum.photos/400/300",
  isActive: true
}, ...Array(5).fill(null).map(e => {
  return {
    src: `https://picsum.photos/id/${idList[Math.floor(Math.random() * idList.length)]}/${randImgWidth}/${randImgHeight}`
  };
})];
console.log(imageSources);
const imageData = imageSources.map(obj => ({
  ...obj,
  uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
}));

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/playAndPauseButtons.js":
/*!********************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/playAndPauseButtons.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PauseButton: () => (/* binding */ PauseButton),
/* harmony export */   PlayButton: () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/components/_custom-components/Icon.js");
/* harmony import */ var _ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");



const PlayButton = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
  className: "play-button visible",
  onclick() {
    (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselPlay)();
  }
}, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-triangle rotate-90 font-sm text-gray-dark-4")]);
const PauseButton = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
  className: "pause-button",
  onclick() {
    (0,_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_2__.clickCarouselPause)();
  }
}, [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-pause font-sm text-gray-dark-4")]);

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js":
/*!***************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickCarouselLeft: () => (/* binding */ clickCarouselLeft),
/* harmony export */   clickCarouselNav: () => (/* binding */ clickCarouselNav),
/* harmony export */   clickCarouselPause: () => (/* binding */ clickCarouselPause),
/* harmony export */   clickCarouselPlay: () => (/* binding */ clickCarouselPlay),
/* harmony export */   clickCarouselRight: () => (/* binding */ clickCarouselRight),
/* harmony export */   gotoSpecificSlide: () => (/* binding */ gotoSpecificSlide),
/* harmony export */   handleAutoAdvance: () => (/* binding */ handleAutoAdvance),
/* harmony export */   togglePalyPause: () => (/* binding */ togglePalyPause)
/* harmony export */ });
// ########################## UTILITIES #########################

function getAllCarouselSlides() {
  return [...document.querySelector(".carousel-track").childNodes];
}
function getAllCarouselSlideIds() {
  return getAllCarouselSlides().map(elem => elem.id);
}
function getAllCarouselNavButtons() {
  return [...document.querySelectorAll(".carousel-indicator")];
}
function getCurrentSlideIndex() {
  const allSlideIds = getAllCarouselSlideIds();
  const currentSlideId = document.querySelector(".carousel-slide.active").id;
  const currentSlideIndex = allSlideIds.indexOf(currentSlideId);
  return currentSlideIndex;
}
function getPreviousSlideIndex() {
  let previousSlideIndex = getCurrentSlideIndex() - 1;

  // if the calculated index is outside the list, set it to the index of the last item in the list
  const correctedIndex = previousSlideIndex < 0 ? getAllCarouselSlideIds().length - 1 : previousSlideIndex;
  return correctedIndex;
}
function getNextSlideIndex() {
  let nextSlideIndex = getCurrentSlideIndex() + 1;

  // if the calculated index is outside the list, set it to the index of the first item in the list
  const correctedIndex = nextSlideIndex > getAllCarouselSlideIds().length - 1 ? 0 : nextSlideIndex;
  return correctedIndex;
}

// move to the selected slide
function gotoSpecificSlide(id) {
  const allNavButtons = getAllCarouselNavButtons();
  const selectedNavButton = document.getElementById(`carousel-nav-${id}`);
  const selectedSlide = document.getElementById(`carousel-slide-${id}`);
  const allSlides = getAllCarouselSlides();
  allSlides.forEach(slide => slide.classList.remove("active"));
  selectedSlide.classList.add("active");
  allNavButtons.forEach(slide => slide.classList.remove("active"));
  selectedNavButton.classList.add("active");
}

// ######################### EVENT HANDLERS #########################
// move to the selected slide when clicking on the associated nav button
function clickCarouselNav(id) {
  gotoSpecificSlide(id);
}

// move right when clicking on the right button
function clickCarouselRight() {
  const id = getAllCarouselSlideIds()[getNextSlideIndex()].replace("carousel-slide-", "");
  gotoSpecificSlide(id);
}

// move left when clicking on the right button
function clickCarouselLeft() {
  const id = getAllCarouselSlideIds()[getPreviousSlideIndex()].replace("carousel-slide-", "");
  gotoSpecificSlide(id);
}
function togglePalyPause() {
  const carouselAutoAdvance = getCarouselAutoAdvance();
  setCarouselAutoAdvance(!carouselAutoAdvance);
}

// ######################## AUTO PROGRESSION ########################
function clickCarouselPlay() {
  handleAutoAdvance("play");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");
  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}
clickCarouselPlay;
function clickCarouselPause() {
  handleAutoAdvance("pause");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");
  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}
let interval;
/**
 * A function to create or cancel the auto advance timer
 * you will neet to declare interval (let interval) before
 * this function to allow the interval to be created / refenenced
 * @param {string} mode a string containing 'play' or 'pause' to indicate the mode
 */
function handleAutoAdvance(mode) {
  const playing = mode === "play" ? true : false;
  if (playing) {
    // start an interval timer and capture its reference
    interval = window.setInterval(clickCarouselRight, 5000);
  } else {
    // cancel the reference you captured
    window.clearInterval(interval);
  }
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/CountryInput/CountryInput.js":
/*!**************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/CountryInput/CountryInput.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryInputId: () => (/* binding */ countryInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _countriesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countriesList */ "./src/components/_custom-components/ValidatedForm/CountryInput/countriesList.js");
/* harmony import */ var _country_input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-input-validation */ "./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js");
// COMPONENT IMPORTS





// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
const countryInputId = `email-input-${componentUuid}`;
const CountryInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${countryInputId}`,
    innerHTML: `What country are you from? ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Select)({
    className: "country-input",
    required: true,
    oninput() {
      (0,_country_input_validation__WEBPACK_IMPORTED_MODULE_2__.handleCountryInput)();
    }
  }, [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)(), ..._countriesList__WEBPACK_IMPORTED_MODULE_1__.countries.map(country => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)({
    innerText: country
  }))]),
  //   Input({
  //     id: `${countryInputId}`,
  //     type: "text",
  //     required: true,
  //     list: "countries",
  //     oninput() {
  //       //;
  //     },
  //   }),

  (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Datalist)({
    id: "countries"
  }, [..._countriesList__WEBPACK_IMPORTED_MODULE_1__.countries.map(country => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)({
    innerText: country
  }))])]);
  console.log(_countriesList__WEBPACK_IMPORTED_MODULE_1__.countries.join("|"));
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/CountryInput/countriesList.js":
/*!***************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/CountryInput/countriesList.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countries: () => (/* binding */ countries)
/* harmony export */ });
const countries = ["Afghanistan", "Albanien", "Algeriet", "Angola", "Antigua och Barbuda", "Argentina", "Australien", "Azerbajdzjan", "Österrike", "Östtimor", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgien", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnien och Hercegovina", "Botswana", "Brasilien", "Brunei Darussalam", "Bulgarien", "Burkina Faso", "Burundi", "Centralafrikanska Republiken", "Chile", "Colombia", "Costa Rica", "Cypern", "Danmark", "Demokratiska Republiken Kongo", "Dominikanska Republiken", "Ecuador", "Egypten", "El Salvador", "Elfenbenskusten", "Estland", "Etiopien", "Färöarna", "Förenade Arabemiraten", "Filippinerna", "Finland", "Frankrike", "Gabon", "Georgien", "Ghana", "Gibraltar", "Grönland", "Grekland", "Grenada", "Guatemala", "Honduras", "Hong Kong", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaica", "Japan", "Jemen", "Jersey", "Jordanien", "Kambodja", "Kanada", "Kazakstan", "Kenya", "Kina", "Kiribati", "Kroatien", "Kuba", "Kuwait", "Laos", "Lettland", "Libanon", "Libyen", "Litauen", "Luxemburg", "Madagaskar", "Makedonien", "Malawi", "Malaysia", "Maldiverna", "Mali", "Malta", "Marocko", "Mauritius", "Mexiko", "Mocambique", "Monaco", "Mongoliet", "Myanmar", "Namibia", "Nederländerna", "Nederländska Antillerna", "Nepal", "Nicaragua", "Niger", "Nigeria", "Norge", "Nya Zeeland", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Polen", "Portugal", "Puerto Rico", "Qatar", "Rumänien", "Rwanda", "Ryssland", "Saint Lucia", "Saint Vincent och Grenadinerna", "Samoa", "San Marino", "Sao Tome och Principe", "Saudiarabien", "Schweiz", "Senegal", "Serbien och Montenegro", "Seychellerna", "Sierra Leone", "Singapore", "Slovakien", "Slovenien", "Somalia", "Spanien", "Sri Lanka", "Sudan", "Surinam", "Sverige", "Swaziland", "Sydafrika", "Sydkorea", "Syrien", "Taiwan", "Tanzania", "Thailand", "Tjeckien", "Trinidad och Tobago", "Tunisien", "Turkiet", "Tyskland", "Uganda", "Ukraina", "Ungern", "Uruguay", "USA", "Uzbekistan", "Venezuela", "Vietnam", "Vitryssland", "Zambia", "Zimbabwe"];

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryIsValid: () => (/* binding */ countryIsValid),
/* harmony export */   getCountryInput: () => (/* binding */ getCountryInput),
/* harmony export */   getCountryInputError: () => (/* binding */ getCountryInputError),
/* harmony export */   handleCountryInput: () => (/* binding */ handleCountryInput),
/* harmony export */   showCountryError: () => (/* binding */ showCountryError)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");

function getCountryInput() {
  return document.querySelector(".assignment .country-input");
}
function getCountryInputError() {
  return document.querySelector(".assignment .country-input + .error");
}
function countryIsValid() {
  return getCountryInput().validity.valid;
}
function handleCountryInput() {
  const country = getCountryInput();
  const error = getCountryInputError();
  if (country.validity.valid) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(error);
  }
}
function showCountryError() {
  const error = getCountryInputError();
  let errorMessage = "Please select an option from the list.";
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js":
/*!**********************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   emailInputId: () => (/* binding */ emailInputId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _email_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-input-validation */ "./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const emailInputId = `email-input-${componentUuid}`;
const EmailInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${emailInputId}`,
    innerHTML: `Please enter an email address ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${emailInputId}`,
    type: "email",
    required: true,
    oninput() {
      (0,_email_input_validation__WEBPACK_IMPORTED_MODULE_1__.handleEmailInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailIsValid: () => (/* binding */ emailIsValid),
/* harmony export */   getEmailInput: () => (/* binding */ getEmailInput),
/* harmony export */   getEmailInputError: () => (/* binding */ getEmailInputError),
/* harmony export */   handleEmailInput: () => (/* binding */ handleEmailInput),
/* harmony export */   showEmailError: () => (/* binding */ showEmailError)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailInput */ "./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js");


function getEmailInput() {
  return document.getElementById(_EmailInput__WEBPACK_IMPORTED_MODULE_1__.emailInputId);
}
function getEmailInputError() {
  return document.querySelector(`#${_EmailInput__WEBPACK_IMPORTED_MODULE_1__.emailInputId} + .error`);
}
function emailIsValid() {
  return getEmailInput().validity.valid;
}
function handleEmailInput() {
  if (emailIsValid()) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getEmailInputError());
  } else {
    showEmailError();
  }
}
function showEmailError() {
  const email = getEmailInput();
  const error = getEmailInputError();
  let errorMessage = "Please enter a valid email address.";
  if (email.validity.valueMissing) {
    errorMessage = "You must enter an email address to continue.";
  }
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js":
/*!*******************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   zipCodeInputId: () => (/* binding */ zipCodeInputId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _zip_code_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zip-code-input-validation */ "./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js");
// COMPONENT IMPORTS



// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const zipCodeInputId = `zip-code-input-${componentUuid}`;
const ZipCodeInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${zipCodeInputId}`,
    innerHTML: `Please enter your zip code ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    type: "text",
    required: true,
    pattern: "^[0-9]{5}(?:-[0-9]{4})?$",
    id: `${zipCodeInputId}`,
    oninput() {
      (0,_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_1__.handleZipCodeInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZipCodeInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js":
/*!********************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getZipCodeInput: () => (/* binding */ getZipCodeInput),
/* harmony export */   getZipCodeInputError: () => (/* binding */ getZipCodeInputError),
/* harmony export */   handleZipCodeInput: () => (/* binding */ handleZipCodeInput),
/* harmony export */   showZipCodeError: () => (/* binding */ showZipCodeError),
/* harmony export */   zipCodeIsValid: () => (/* binding */ zipCodeIsValid)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _ZipCodeInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZipCodeInput */ "./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js");


function getZipCodeInput() {
  return document.getElementById(_ZipCodeInput__WEBPACK_IMPORTED_MODULE_1__.zipCodeInputId);
}
function getZipCodeInputError() {
  return document.querySelector(`#${_ZipCodeInput__WEBPACK_IMPORTED_MODULE_1__.zipCodeInputId} + .error`);
}
function zipCodeIsValid() {
  return getZipCodeInput().validity.valid;
}
function handleZipCodeInput() {
  if (zipCodeIsValid()) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getZipCodeInputError());
  } else {
    showZipCodeError();
  }
}
function showZipCodeError() {
  const zipCode = getZipCodeInput();
  const error = getZipCodeInputError();
  let errorMessage = "Enter a valid zip code format. (55555 or 55555-4444)";
  if (zipCode.validity.valueMissing) {
    errorMessage = "You must enter a valid zip code to continue.";
  } else {}
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js":
/*!************************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmPasswordInputId: () => (/* binding */ confirmPasswordInputId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _passwords_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwords-validation */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const confirmPasswordInputId = `confirm-password-input-${componentUuid}`;
const ConfirmPasswordInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${confirmPasswordInputId}`,
    innerHTML: `Confirm password ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${confirmPasswordInputId}`,
    type: "password",
    required: true,
    oninput() {
      (0,_passwords_validation__WEBPACK_IMPORTED_MODULE_1__.handleConfirmPasswordInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmPasswordInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   passwordInputId: () => (/* binding */ passwordInputId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _passwords_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passwords-validation */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js");
// COMPONENT IMPORTS




// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
const passwordInputId = `password-input-${componentUuid}`;
const PasswordInput = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "form-control" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Label)({
    for: `${passwordInputId}`,
    innerHTML: `Create your password ${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML}`
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Input)({
    id: `${passwordInputId}`,
    type: "password",
    required: true,
    pattern: _passwords_validation__WEBPACK_IMPORTED_MODULE_1__.passwordRegexString,
    oninput() {
      (0,_passwords_validation__WEBPACK_IMPORTED_MODULE_1__.handlePasswordInput)();
    }
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  })]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordInput);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js":
/*!************************************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmPasswordIsValid: () => (/* binding */ confirmPasswordIsValid),
/* harmony export */   getConfirmPasswordInput: () => (/* binding */ getConfirmPasswordInput),
/* harmony export */   getConfirmPasswordInputError: () => (/* binding */ getConfirmPasswordInputError),
/* harmony export */   getConfirmPasswordInputValue: () => (/* binding */ getConfirmPasswordInputValue),
/* harmony export */   getPasswordInput: () => (/* binding */ getPasswordInput),
/* harmony export */   getPasswordInputError: () => (/* binding */ getPasswordInputError),
/* harmony export */   getPasswordInputValue: () => (/* binding */ getPasswordInputValue),
/* harmony export */   handleConfirmPasswordInput: () => (/* binding */ handleConfirmPasswordInput),
/* harmony export */   handlePasswordInput: () => (/* binding */ handlePasswordInput),
/* harmony export */   passwordIsValid: () => (/* binding */ passwordIsValid),
/* harmony export */   passwordRegexString: () => (/* binding */ passwordRegexString),
/* harmony export */   showConfirmPasswordError: () => (/* binding */ showConfirmPasswordError),
/* harmony export */   showPasswordError: () => (/* binding */ showPasswordError)
/* harmony export */ });
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmPasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js");
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js");



const passwordRegexString = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$";
const passwordRegex = new RegExp(passwordRegexString);

// ########################### PASSWORD INPUT ##############################
function getPasswordInput() {
  return document.getElementById(_PasswordInput__WEBPACK_IMPORTED_MODULE_2__.passwordInputId);
}
function getPasswordInputError() {
  return document.querySelector(`#${_PasswordInput__WEBPACK_IMPORTED_MODULE_2__.passwordInputId} + .error`);
}
function passwordIsValid() {
  return getPasswordInput().validity.valid;
}
function getPasswordInputValue() {
  return getPasswordInput().value;
}
function handlePasswordInput() {
  if (passwordIsValid()) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getPasswordInputError());
  } else {
    showPasswordError();
  }
}
function showPasswordError() {
  const password = getPasswordInput();
  const error = getPasswordInputError();
  let errorMessage = "Valid passwords are at lease 12 characters long and contain at lease one uppercase letter and one lowercase letter.";
  if (password.validity.valueMissing) {
    errorMessage = "You must enter a password to continue.";
  }
  error.innerText = errorMessage;
  error.className = "error active";
}

// ######################## CONFIRM PASSWORD INPUT ###########################
function getConfirmPasswordInput() {
  return document.getElementById(_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_1__.confirmPasswordInputId);
}
function getConfirmPasswordInputError() {
  return document.querySelector(`#${_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_1__.confirmPasswordInputId} + .error`);
}
function getConfirmPasswordInputValue() {
  return getConfirmPasswordInput().value;
}
function confirmPasswordIsValid() {
  return getConfirmPasswordInput().validity.valid;
}
function handleConfirmPasswordInput() {
  const input = getConfirmPasswordInput();
  if (getPasswordInputValue() === getConfirmPasswordInputValue()) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("invalid");
  }
  if (input.validity.valid) {
    (0,_form_validation__WEBPACK_IMPORTED_MODULE_0__.clearError)(getConfirmPasswordInputError());
  } else {
    showConfirmPasswordError();
  }
}
function showConfirmPasswordError() {
  const password = getConfirmPasswordInput();
  const error = getConfirmPasswordInputError();
  let errorMessage = "Passwords do not match.";
  if (password.validity.valueMissing) {
    errorMessage = "You must confirm your password to continue.";
  }
  error.innerText = errorMessage;
  error.className = "error active";
}

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/SubmitButton.js":
/*!*************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/SubmitButton.js ***!
  \*************************************************************************/
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

const SubmitButton = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Button)({
    className: "" + " " + otherClasses,
    innerText: "Submit"
  },
  // add child elements to the array below
  []);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitButton);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/ValidatedForm.js":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/ValidatedForm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formId: () => (/* binding */ formId)
/* harmony export */ });
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_elements/Elements */ "./src/components/_elements/Elements.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validation */ "./src/components/_custom-components/ValidatedForm/form-validation.js");
/* harmony import */ var _Input_ZipCodeInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input/ZipCodeInput */ "./src/components/_custom-components/ValidatedForm/Input/ZipCodeInput.js");
/* harmony import */ var _CountryInput_CountryInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountryInput/CountryInput */ "./src/components/_custom-components/ValidatedForm/CountryInput/CountryInput.js");
/* harmony import */ var _EmailInput_EmailInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailInput/EmailInput */ "./src/components/_custom-components/ValidatedForm/EmailInput/EmailInput.js");
/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitButton */ "./src/components/_custom-components/ValidatedForm/SubmitButton.js");
/* harmony import */ var _PasswordInputs_PasswordInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PasswordInputs/PasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/PasswordInput.js");
/* harmony import */ var _PasswordInputs_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordInputs/ConfirmPasswordInput */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/ConfirmPasswordInput.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// COMPONENT IMPORTS









// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }
const componentUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])();
const formId = `form-${componentUuid}`;
const ValidatedForm = () => {
  const otherClasses = "";
  const parentElement = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "assignment" + " " + otherClasses
  },
  // add child elements to the array below
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Form)({
    id: formId,
    noValidate: true,
    onsubmit(event) {
      (0,_form_validation__WEBPACK_IMPORTED_MODULE_1__.handleFormSubmit)(event);
    }
  }, [(0,_EmailInput_EmailInput__WEBPACK_IMPORTED_MODULE_4__["default"])(), (0,_CountryInput_CountryInput__WEBPACK_IMPORTED_MODULE_3__["default"])(), (0,_Input_ZipCodeInput__WEBPACK_IMPORTED_MODULE_2__["default"])(), (0,_PasswordInputs_PasswordInput__WEBPACK_IMPORTED_MODULE_6__["default"])(), (0,_PasswordInputs_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_7__["default"])(), (0,_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"])(), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    innerHTML: `${(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Span)({
      className: "required-marker",
      innerText: "*"
    }).outerHTML} indicates a required field`
  })])]);
  return parentElement;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatedForm);

/***/ }),

/***/ "./src/components/_custom-components/ValidatedForm/form-validation.js":
/*!****************************************************************************!*\
  !*** ./src/components/_custom-components/ValidatedForm/form-validation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearError: () => (/* binding */ clearError),
/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit)
/* harmony export */ });
/* harmony import */ var _CountryInput_country_input_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryInput/country-input-validation */ "./src/components/_custom-components/ValidatedForm/CountryInput/country-input-validation.js");
/* harmony import */ var _EmailInput_email_input_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailInput/email-input-validation */ "./src/components/_custom-components/ValidatedForm/EmailInput/email-input-validation.js");
/* harmony import */ var _Input_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input/zip-code-input-validation */ "./src/components/_custom-components/ValidatedForm/Input/zip-code-input-validation.js");
/* harmony import */ var _PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PasswordInputs/passwords-validation */ "./src/components/_custom-components/ValidatedForm/PasswordInputs/passwords-validation.js");




function getForm() {}
function allInputsValid(form) {
  const inputs = [...document.querySelectorAll("input"), ...document.querySelectorAll("select")];
  for (let i = 0; i < inputs.length; i++) {
    const inputValidity = inputs[i].validity.valid;
    if (!inputValidity) {
      return false;
    }
  }
  return true;
}
function handleFormSubmit(event) {
  if (allInputsValid()) {
    event.preventDefault();
    console.log("SUBMITTED!");
    return;
  } else {
    event.preventDefault();
    if (!(0,_EmailInput_email_input_validation__WEBPACK_IMPORTED_MODULE_1__.emailIsValid)()) {
      (0,_EmailInput_email_input_validation__WEBPACK_IMPORTED_MODULE_1__.showEmailError)();
    }
    if (!(0,_CountryInput_country_input_validation__WEBPACK_IMPORTED_MODULE_0__.countryIsValid)()) {
      (0,_CountryInput_country_input_validation__WEBPACK_IMPORTED_MODULE_0__.showCountryError)();
    }
    if (!(0,_Input_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_2__.zipCodeIsValid)()) {
      (0,_Input_zip_code_input_validation__WEBPACK_IMPORTED_MODULE_2__.showZipCodeError)();
    }
    if (!(0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.passwordIsValid)()) {
      (0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.showPasswordError)();
    }
    if (!(0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.confirmPasswordIsValid)()) {
      (0,_PasswordInputs_passwords_validation__WEBPACK_IMPORTED_MODULE_3__.showConfirmPasswordError)();
    }
  }
}
function clearError(errorElement) {
  errorElement.innerText = "";
  errorElement.className = "error";
}

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
/* harmony import */ var _ui_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-window */ "./src/page-logic/ui/ui-window.js");
/* harmony import */ var _components_custom_components_ImageCarousel_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/_custom-components/ImageCarousel/ui/carousel-ui */ "./src/components/_custom-components/ImageCarousel/ui/carousel-ui.js");


function applyInitialState() {
  (0,_ui_window__WEBPACK_IMPORTED_MODULE_0__.applyWindowListeners)();
  (0,_components_custom_components_ImageCarousel_ui_carousel_ui__WEBPACK_IMPORTED_MODULE_1__.clickCarouselPlay)();
}

/***/ }),

/***/ "./src/page-logic/ui/ui-window.js":
/*!****************************************!*\
  !*** ./src/page-logic/ui/ui-window.js ***!
  \****************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNzQjtBQUNrQjtBQUVyRWtDLFFBQVEsQ0FBQ3lPLElBQUksQ0FBQzVDLFdBQVcsQ0FBQzVPLHVFQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXBDK1Asa0ZBQWlCLENBQUMsQ0FBQzs7QUFFbkI7QUFDQSxNQUFNMEIsU0FBUyxHQUFHLElBQUk7QUFDdEIsSUFBSUEsU0FBUyxFQUFFO0VBQ2I7QUFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0NvcHlyaWdodENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvSWNvbnNFeHBsYW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvVE9QTGlua0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9DdXN0b21JY29uc0Rpc3BsYXkvQ3VzdG9tSWNvbnNEaXNwbGF5LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFRpdGxlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsTmF2LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxOYXZJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsU2xpZGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFRyYWNrLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxUcmFja0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9MZWZ0QnV0dG9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvUmlnaHRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9kYXRhL2ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvcGxheUFuZFBhdXNlQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3VpL2Nhcm91c2VsLXVpLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vQ291bnRyeUlucHV0L0NvdW50cnlJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0NvdW50cnlJbnB1dC9jb3VudHJpZXNMaXN0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vQ291bnRyeUlucHV0L2NvdW50cnktaW5wdXQtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0VtYWlsSW5wdXQvRW1haWxJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0VtYWlsSW5wdXQvZW1haWwtaW5wdXQtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0lucHV0L1ppcENvZGVJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL0lucHV0L3ppcC1jb2RlLWlucHV0LXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9QYXNzd29yZElucHV0cy9Db25maXJtUGFzc3dvcmRJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1Bhc3N3b3JkSW5wdXRzL1Bhc3N3b3JkSW5wdXQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9QYXNzd29yZElucHV0cy9wYXNzd29yZHMtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1N1Ym1pdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1ZhbGlkYXRlZEZvcm0uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9mb3JtLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3BhZ2UtbG9naWMvdWkvdWktd2luZG93LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IER5bmFtaWNGb290ZXIgZnJvbSBcIi4uL0R5bmFtaWNGb290ZXIvRHluYW1pY0Zvb3RlclwiO1xuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuLi9NYWluU2VjdGlvbi9NYWluU2VjdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJjb250ZW50XCIgfSwgW1xuICAgIEhlYWRlcigpLFxuICAgIE1haW5TZWN0aW9uKCksXG4gICAgRHluYW1pY0Zvb3RlcigpLFxuICBdKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbmltcG9ydCB7IGdpdGh1YkluZm8gfSBmcm9tIFwiLi4vLi4vcGFnZS1sb2dpYy9kYXRhL2RhdGEtcGFnZS1jb25maWdcIjtcblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbi8vIFRFTVBMQVRFIFZBUklBQkxFU1xuY29uc3QgZHluYW1pY1llYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbmNvbnN0IENvcHlyaWdodENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogYGNvcHlyaWdodC1jb250YWluZXJgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtaW5mbyBkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtkeW5hbWljWWVhcn1gLFxuICAgICAgfSksXG4gICAgICBBKHsgaHJlZjogYGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvJHtnaXRodWJJbmZvLnJlcG9OYW1lfWAgfSwgW1xuICAgICAgICBJY29uKFwiaWNvbi1naXRodWItY2F0XCIpLFxuICAgICAgXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlyaWdodENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEZvb3RlciB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDb3B5cmlnaHRDb250YWluZXIgZnJvbSBcIi4vQ29weXJpZ2h0Q29udGFpbmVyXCI7XG5pbXBvcnQgQXR0cmlidXRpb25zQ29udGFpbmVyIGZyb20gXCIuL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyXCI7XG5pbXBvcnQgVE9QQ29udGFpbmVyIGZyb20gXCIuL1RPUExpbmtDb250YWluZXJcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IER5bmFtaWNGb290ZXIgPSAoKSA9PiB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gXG4gIEZvb3RlcihcbiAgICB7IFxuICAgICAgaWQ6IGBmb290ZXJgLCBcbiAgICAgIGNsYXNzTmFtZTogYGJnLWdyYXktZGFyay0zIHRleHQtd2hpdGVgIFxuICAgIH0sXG4gICAgW1xuICAgICBDb3B5cmlnaHRDb250YWluZXIoKSwgXG4gICAgIFRPUENvbnRhaW5lcigpLCBcbiAgICAgQXR0cmlidXRpb25zQ29udGFpbmVyKClcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRm9vdGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxcIjtcbmltcG9ydCBOb25FeHBhbmRhYmxlUGFuZWwgZnJvbSBcIi4uLy4uL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsXCI7XG5cbmltcG9ydCBJY29uc0V4cGxhbmF0aW9uIGZyb20gXCIuL0ljb25zRXhwbGFuYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEF0dHJpYnV0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBgYXR0cmlidXRpb25zLWNvbnRhaW5lcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgdGl0bGU6IFwiU2l0ZSBBdHRyaWJ1dGlvbnNcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwiSWNvbnNcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIE5vbkV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nb3NcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb24oXCJpY29uLWdpdGh1Yi1jYXRcIildLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgb3RoZXIgSWNvbnNcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW0ljb25zRXhwbGFuYXRpb24oKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0aW9uc0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uc0V4cGxhbmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBgaWNvbnMtZXhwbGFuYXRpb25gLCBpbm5lckhUTUw6IGBgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGlubmVySFRNTDogYEFsbCBvdGhlciBpY29ucyB3ZXJlIGNyZWF0ZWQgYnkgbWUgdXNpbmcgJHtcbiAgICAgICAgICBBKHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pbmtzY2FwZS5vcmcvXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiSW5rc2NhcGVcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfSBhbmQgY29udmVydGluZyB0aGVtIHRvIGEgZm9udCB3aXRoICR7XG4gICAgICAgICAgQSh7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vaWNvbW9vbi5pby9cIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCJJY29Nb29uXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zRXhwbGFuYXRpb247XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSwgRGl2IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgVE9QQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBEaXYoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgdG9wLWNvbnRhaW5lcmAsXG4gICAgICBpbm5lclRleHQ6IFwiSW5zcGlyZWQgQnk6XCIsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgQSh7XG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICAgICAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICAgICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRPUENvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoMSA9IEVsZW1lbnQoXCJoMVwiLCB7IGlubmVyVGV4dDogXCJUaGlzIGlzIHRoZSBoZWFkZXJcIiB9KTtcblxuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcImJnLWdyYXktZGFyay0zIHRleHQtd2hpdGUgcC0yXCI7XG4gIGNvbnN0IGhlYWRlciA9IEVsZW1lbnQoXG4gICAgXCJoZWFkZXJcIixcbiAgICB7XG4gICAgICBpZDogXCJoZWFkZXJcIixcbiAgICAgIGNsYXNzTmFtZTogXCJoZWFkZXJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgW2gxXVxuICApO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IGdlbmVyYXRlVGVzdENvbnRlbnRBcnIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCBDdXN0b21JY29uc0Rpc3BsYXkgZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9DdXN0b21JY29uc0Rpc3BsYXkvQ3VzdG9tSWNvbnNEaXNwbGF5XCI7XG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbFwiO1xuaW1wb3J0IFZhbGlkYXRlZEZvcm0gZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1ZhbGlkYXRlZEZvcm1cIjtcbmltcG9ydCB7IE1haW4sIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvdGhlckNsYXNzZXMgPSBcIlwiO1xuICBjb25zdCBtYWluID0gTWFpbihcbiAgICB7XG4gICAgICBpZDogXCJtYWluLXNlY3Rpb25cIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJpY29ucy1yb3dcIiB9LCBbQ3VzdG9tSWNvbnNEaXNwbGF5KCldKSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJjYXJvdXNlbC1yb3dcIiB9LCBbSW1hZ2VDYXJvdXNlbCgpXSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZm9ybS1yb3dcIiB9LCBbVmFsaWRhdGVkRm9ybSgpXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TZWN0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDdXN0b21JY29uc0Rpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBpbm5lclRleHQ6IGBgLCBjbGFzc05hbWU6IGBjdXN0b20taWNvbnMtZGlzcGxheWAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgSWNvbihcImljb24taGFtYnVyZ2VyLW1lbnVcIiksXG4gICAgICBJY29uKFwiaWNvbi1wYXVzZVwiKSxcbiAgICAgIEljb24oXCJpY29uLXBlbmNpbFwiKSxcbiAgICAgIEljb24oXCJpY29uLXBsdXMtc2lnblwiKSxcbiAgICAgIEljb24oXCJpY29uLXBsdXMtc2lnbiByb3RhdGUtNDVcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmFzaFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlXCIpLFxuICAgICAgSWNvbihcImljb24tdHJpYW5nbGUgcm90YXRlLTE4MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlLXNob3J0IHJvdGF0ZS05MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlLXNob3J0XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3dcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdyByb3RhdGUtMTgwXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnRcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdy1zaG9ydCByb3RhdGUtMjcwXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtZG93blwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWRvd24gcm90YXRlLTkwXCIpLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JY29uc0Rpc3BsYXk7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhbmVsID0gQShcbiAgICB7IGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWxgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbFRpdGxlKHsgdGl0bGUsIGNvbXBvbmVudElkIH0pLFxuICAgICAgRXhwYW5kYWJsZVBhbmVsQ29udGVudCh7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YCxcbiAgICAgIGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWwtY29udGVudGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0Rpdih7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSwgWy4uLmNoaWxkcmVuXSldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24sIERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpIHtcbiAgY29uc3QgZXhwYW5zaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGNvbnN0IHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBleHBhbnNpb25Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLXRpdGxlYCB9LFxuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEJ1dHRvbihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW0ljb24oXCJpY29uLXVwLWRvd25cIildXG4gICAgICApLFxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbFRpdGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBOb25FeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgdGl0bGUsIGhyZWYsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgJHtvdGhlckNsYXNzZXN9IG5vbi1leHBhbmRhYmxlLXBhbmVsICR7XG4gICAgICAgIGhyZWYgPyBcImlzLWxpbmtcIiA6IFwiXCJcbiAgICAgIH1gLFxuICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbLi4uY2hpbGRyZW5dXG4gICk7XG4gIGlmIChocmVmKSB7XG4gICAgcGFuZWwuaHJlZiA9IGhyZWY7XG4gIH1cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9uRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uID0gKGljb25DbGFzcykgPT4ge1xuICBjb25zdCBpY29uID0gRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IGBpY29uICR7aWNvbkNsYXNzfSBkaXNwbGF5LWktYmAgfSk7XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDYXJvdXNlbE5hdkluZGljYXRvciBmcm9tIFwiLi9DYXJvdXNlbE5hdkluZGljYXRvclwiO1xuaW1wb3J0IENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyIGZyb20gXCIuL0Nhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsTmF2ID0gKGltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLW5hdiBwdC0xYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW1xuICAgICAgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIoKSxcbiAgICAgIC8vIE5hdiBpbmRpY2F0b3JzXG4gICAgICAuLi5pbWFnZURhdGEubWFwKChvYmosIGluZGV4KSA9PlxuICAgICAgICBDYXJvdXNlbE5hdkluZGljYXRvcih7XG4gICAgICAgICAgaW1hZ2VJZDogb2JqLnV1aWQsXG4gICAgICAgICAgc3RhcnRzQWN0aXZlOiBvYmouaXNBY3RpdmUgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbE5hdjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsTmF2IH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbE5hdkluZGljYXRvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGltYWdlSWQsIHN0YXJ0c0FjdGl2ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBCdXR0b24oXG4gICAge1xuICAgICAgaWQ6IGBjYXJvdXNlbC1uYXYtJHtpbWFnZUlkfWAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1pbmRpY2F0b3IgZGlzcGxheS1pLWIgYmctZ3JheS1saWdodC02ICR7XG4gICAgICAgIHN0YXJ0c0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICB9YCxcbiAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xpY2tDYXJvdXNlbE5hdihpbWFnZUlkKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbE5hdkluZGljYXRvcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBQbGF5QnV0dG9uLCBQYXVzZUJ1dHRvbiB9IGZyb20gXCIuL3BsYXlBbmRQYXVzZUJ1dHRvbnNcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1wbGF5LXBhdXNlLWNvbnRhaW5lclwiLFxuICAgIH0sXG4gICAgLy8gY2hpbGRlcm5cbiAgICBbUGF1c2VCdXR0b24sIFBsYXlCdXR0b25dXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbWcgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFNsaWRlID0gKGltYWdlU291cmNlLCBpZCwgc3RhcnRzQWN0aXZlKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBjYXJvdXNlbC1zbGlkZS1gICsgaWQsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1zbGlkZSAke3N0YXJ0c0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifWAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIEltZyh7XG4gICAgICAgIHNyYzogaW1hZ2VTb3VyY2UsXG4gICAgICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1pbWFnZVwiLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsU2xpZGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgVWwgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ2Fyb3VzZWxTbGlkZSBmcm9tIFwiLi9DYXJvdXNlbFNsaWRlXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFRyYWNrID0gKGltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gVWwoXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtdHJhY2tgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICAuLi5pbWFnZURhdGEubWFwKChvYmosIGluZGV4KSA9PlxuICAgICAgICBDYXJvdXNlbFNsaWRlKG9iai5zcmMsIG9iai51dWlkLCBvYmouaXNBY3RpdmUgPyB0cnVlIDogZmFsc2UpXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFRyYWNrO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDYXJvdXNlbFRyYWNrIGZyb20gXCIuL0Nhcm91c2VsVHJhY2tcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsVHJhY2tDb250YWluZXIgPSAoaW1hZ2VEYXRhKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC10cmFjay1jb250YWluZXJgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbQ2Fyb3VzZWxUcmFjayhpbWFnZURhdGEpXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgTGVmdENhcm91c2VsQnV0dG9uIGZyb20gXCIuL0xlZnRCdXR0b25cIjtcbmltcG9ydCBSaWdodENhcm91c2VsQnV0dG9uIGZyb20gXCIuL1JpZ2h0QnV0dG9uXCI7XG5pbXBvcnQgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lciBmcm9tIFwiLi9DYXJvdXNlbFRyYWNrQ29udGFpbmVyXCI7XG5pbXBvcnQgQ2Fyb3VzZWxOYXYgZnJvbSBcIi4vQ2Fyb3VzZWxOYXZcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IGltYWdlRGF0YSB9IGZyb20gXCIuL2RhdGEvaW1hZ2VMb2FkZXJcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VsID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsIHB0LTEgcGItMWAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIExlZnRDYXJvdXNlbEJ1dHRvbigpLFxuICAgICAgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lcihpbWFnZURhdGEpLFxuICAgICAgUmlnaHRDYXJvdXNlbEJ1dHRvbigpLFxuICAgICAgQ2Fyb3VzZWxOYXYoaW1hZ2VEYXRhKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjYXJvdXNlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxMZWZ0IH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBMZWZ0Q2Fyb3VzZWxCdXR0b24gPSAoc2hhcmVkQ2xhc3NlcykgPT4ge1xuICBjb25zdCBidXR0b24gPSBCdXR0b24oXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtYnV0dG9uIGxlZnQgYCArIHNoYXJlZENsYXNzZXMsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICBjbGlja0Nhcm91c2VsTGVmdCgpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW0ljb24oXCJpY29uLXVwLWFycm93IHJvdGF0ZS0yNzAgXCIpXVxuICApO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVmdENhcm91c2VsQnV0dG9uO1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxSaWdodCB9IGZyb20gXCIuL3VpL2Nhcm91c2VsLXVpXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgUmlnaHRDYXJvdXNlbEJ1dHRvbiA9IChzaGFyZWRDbGFzc2VzKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IEJ1dHRvbihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1idXR0b24gcmlnaHQgYCArIHNoYXJlZENsYXNzZXMsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICBjbGlja0Nhcm91c2VsUmlnaHQoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtJY29uKFwiaWNvbi11cC1hcnJvdyByb3RhdGUtOTBcIildXG4gICk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodENhcm91c2VsQnV0dG9uO1xuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuLy8gSW1hZ2Ugc291cmNlIGluZm9cbmNvbnN0IGlkTGlzdCA9IEFycmF5KDEwMClcbiAgLmZpbGwobnVsbClcbiAgLm1hcCgoZSwgaSkgPT4gaSlcbiAgLmZpbHRlcigoZSkgPT4gZSAhPT0gOTcpO1xuY29uc3QgcmFuZEltZ0hlaWdodCA9IDMwMDtcbmNvbnN0IHJhbmRJbWdXaWR0aCA9IDUwMDtcbi8vIGFkZCBpc0FjdGl2ZTogdHJ1ZSB0byB0aGUgc2xpZGUgeW91IHdhbnQgdG8gc3RhcnQgYXMgYWN0aXZlXG5jb25zdCBpbWFnZVNvdXJjZXMgPSBbXG4gIHsgc3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy80MDAvMzAwXCIsIGlzQWN0aXZlOiB0cnVlIH0sXG4gIC4uLkFycmF5KDUpXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKChlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IGBodHRwczovL3BpY3N1bS5waG90b3MvaWQvJHtcbiAgICAgICAgICBpZExpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaWRMaXN0Lmxlbmd0aCldXG4gICAgICAgIH0vJHtyYW5kSW1nV2lkdGh9LyR7cmFuZEltZ0hlaWdodH1gLFxuICAgICAgfTtcbiAgICB9KSxcbl07XG5jb25zb2xlLmxvZyhpbWFnZVNvdXJjZXMpO1xuZXhwb3J0IGNvbnN0IGltYWdlRGF0YSA9IGltYWdlU291cmNlcy5tYXAoKG9iaikgPT4gKHtcbiAgLi4ub2JqLFxuICB1dWlkOiB1dWlkdjQoKSxcbn0pKTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSwgY2xpY2tDYXJvdXNlbFBhdXNlIH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXlCdXR0b24gPSBCdXR0b24oXG4gIHtcbiAgICBjbGFzc05hbWU6IFwicGxheS1idXR0b24gdmlzaWJsZVwiLFxuICAgIG9uY2xpY2soKSB7XG4gICAgICBjbGlja0Nhcm91c2VsUGxheSgpO1xuICAgIH0sXG4gIH0sXG4gIFtJY29uKFwiaWNvbi10cmlhbmdsZSByb3RhdGUtOTAgZm9udC1zbSB0ZXh0LWdyYXktZGFyay00XCIpXVxuKTtcblxuZXhwb3J0IGNvbnN0IFBhdXNlQnV0dG9uID0gQnV0dG9uKFxuICB7XG4gICAgY2xhc3NOYW1lOiBcInBhdXNlLWJ1dHRvblwiLFxuICAgIG9uY2xpY2soKSB7XG4gICAgICBjbGlja0Nhcm91c2VsUGF1c2UoKTtcbiAgICB9LFxuICB9LFxuICBbSWNvbihcImljb24tcGF1c2UgZm9udC1zbSB0ZXh0LWdyYXktZGFyay00XCIpXVxuKTtcbiIsIi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFVUSUxJVElFUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVzKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIikuY2hpbGROb2Rlc107XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVJZHMoKSB7XG4gIHJldHVybiBnZXRBbGxDYXJvdXNlbFNsaWRlcygpLm1hcCgoZWxlbSkgPT4gZWxlbS5pZCk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpIHtcbiAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsLWluZGljYXRvclwiKV07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZUluZGV4KCkge1xuICBjb25zdCBhbGxTbGlkZUlkcyA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKTtcbiAgY29uc3QgY3VycmVudFNsaWRlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXNsaWRlLmFjdGl2ZVwiKS5pZDtcbiAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBhbGxTbGlkZUlkcy5pbmRleE9mKGN1cnJlbnRTbGlkZUlkKTtcblxuICByZXR1cm4gY3VycmVudFNsaWRlSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2xpZGVJbmRleCgpIHtcbiAgbGV0IHByZXZpb3VzU2xpZGVJbmRleCA9IGdldEN1cnJlbnRTbGlkZUluZGV4KCkgLSAxO1xuXG4gIC8vIGlmIHRoZSBjYWxjdWxhdGVkIGluZGV4IGlzIG91dHNpZGUgdGhlIGxpc3QsIHNldCBpdCB0byB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgcHJldmlvdXNTbGlkZUluZGV4IDwgMFxuICAgICAgPyBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMVxuICAgICAgOiBwcmV2aW91c1NsaWRlSW5kZXg7XG5cbiAgcmV0dXJuIGNvcnJlY3RlZEluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2xpZGVJbmRleCgpIHtcbiAgbGV0IG5leHRTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSArIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgbmV4dFNsaWRlSW5kZXggPiBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMSA/IDAgOiBuZXh0U2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ290b1NwZWNpZmljU2xpZGUoaWQpIHtcbiAgY29uc3QgYWxsTmF2QnV0dG9ucyA9IGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpO1xuICBjb25zdCBzZWxlY3RlZE5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1uYXYtJHtpZH1gKTtcbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1zbGlkZS0ke2lkfWApO1xuICBjb25zdCBhbGxTbGlkZXMgPSBnZXRBbGxDYXJvdXNlbFNsaWRlcygpO1xuXG4gIGFsbFNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNlbGVjdGVkU2xpZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBhbGxOYXZCdXR0b25zLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWROYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFVkVOVCBIQU5ETEVSUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBtb3ZlIHRvIHRoZSBzZWxlY3RlZCBzbGlkZSB3aGVuIGNsaWNraW5nIG9uIHRoZSBhc3NvY2lhdGVkIG5hdiBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsTmF2KGlkKSB7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSByaWdodCB3aGVuIGNsaWNraW5nIG9uIHRoZSByaWdodCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUmlnaHQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldE5leHRTbGlkZUluZGV4KCldLnJlcGxhY2UoXG4gICAgXCJjYXJvdXNlbC1zbGlkZS1cIixcbiAgICBcIlwiXG4gICk7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSBsZWZ0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxMZWZ0KCkge1xuICBjb25zdCBpZCA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKVtnZXRQcmV2aW91c1NsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGFseVBhdXNlKCkge1xuICBjb25zdCBjYXJvdXNlbEF1dG9BZHZhbmNlID0gZ2V0Q2Fyb3VzZWxBdXRvQWR2YW5jZSgpO1xuICBzZXRDYXJvdXNlbEF1dG9BZHZhbmNlKCFjYXJvdXNlbEF1dG9BZHZhbmNlKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEFVVE8gUFJPR1JFU1NJT04gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFBsYXkoKSB7XG4gIGhhbmRsZUF1dG9BZHZhbmNlKFwicGxheVwiKTtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBsYXktYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGF1c2UtYnV0dG9uXCIpO1xuICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cbmNsaWNrQ2Fyb3VzZWxQbGF5O1xuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxQYXVzZSgpIHtcbiAgaGFuZGxlQXV0b0FkdmFuY2UoXCJwYXVzZVwiKTtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBsYXktYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGF1c2UtYnV0dG9uXCIpO1xuICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cblxubGV0IGludGVydmFsO1xuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSBvciBjYW5jZWwgdGhlIGF1dG8gYWR2YW5jZSB0aW1lclxuICogeW91IHdpbGwgbmVldCB0byBkZWNsYXJlIGludGVydmFsIChsZXQgaW50ZXJ2YWwpIGJlZm9yZVxuICogdGhpcyBmdW5jdGlvbiB0byBhbGxvdyB0aGUgaW50ZXJ2YWwgdG8gYmUgY3JlYXRlZCAvIHJlZmVuZW5jZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIGEgc3RyaW5nIGNvbnRhaW5pbmcgJ3BsYXknIG9yICdwYXVzZScgdG8gaW5kaWNhdGUgdGhlIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUF1dG9BZHZhbmNlKG1vZGUpIHtcbiAgY29uc3QgcGxheWluZyA9IG1vZGUgPT09IFwicGxheVwiID8gdHJ1ZSA6IGZhbHNlO1xuICBpZiAocGxheWluZykge1xuICAgIC8vIHN0YXJ0IGFuIGludGVydmFsIHRpbWVyIGFuZCBjYXB0dXJlIGl0cyByZWZlcmVuY2VcbiAgICBpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjbGlja0Nhcm91c2VsUmlnaHQsIDUwMDApO1xuICB9IGVsc2Uge1xuICAgIC8vIGNhbmNlbCB0aGUgcmVmZXJlbmNlIHlvdSBjYXB0dXJlZFxuICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfVxufVxuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7XG4gIERpdixcbiAgSW5wdXQsXG4gIExhYmVsLFxuICBTcGFuLFxuICBEYXRhbGlzdCxcbiAgT3B0aW9uLFxuICBTZWxlY3QsXG59IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJpZXNMaXN0XCI7XG5pbXBvcnQgeyBoYW5kbGVDb3VudHJ5SW5wdXQgfSBmcm9tIFwiLi9jb3VudHJ5LWlucHV0LXZhbGlkYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgY291bnRyeUlucHV0SWQgPSBgZW1haWwtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IENvdW50cnlJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHtjb3VudHJ5SW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBXaGF0IGNvdW50cnkgYXJlIHlvdSBmcm9tPyAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICAgIFNlbGVjdChcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjb3VudHJ5LWlucHV0XCIsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICAgIGhhbmRsZUNvdW50cnlJbnB1dCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBPcHRpb24oKSxcbiAgICAgICAgICAuLi5jb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiBPcHRpb24oeyBpbm5lclRleHQ6IGNvdW50cnkgfSkpLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgLy8gICBJbnB1dCh7XG4gICAgICAvLyAgICAgaWQ6IGAke2NvdW50cnlJbnB1dElkfWAsXG4gICAgICAvLyAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAvLyAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAvLyAgICAgbGlzdDogXCJjb3VudHJpZXNcIixcbiAgICAgIC8vICAgICBvbmlucHV0KCkge1xuICAgICAgLy8gICAgICAgLy87XG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgfSksXG5cbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgICAgRGF0YWxpc3QoeyBpZDogXCJjb3VudHJpZXNcIiB9LCBbXG4gICAgICAgIC4uLmNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IE9wdGlvbih7IGlubmVyVGV4dDogY291bnRyeSB9KSksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIGNvbnNvbGUubG9nKGNvdW50cmllcy5qb2luKFwifFwiKSk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeUlucHV0O1xuIiwiZXhwb3J0IGNvbnN0IGNvdW50cmllcyA9IFtcbiAgXCJBZmdoYW5pc3RhblwiLFxuICBcIkFsYmFuaWVuXCIsXG4gIFwiQWxnZXJpZXRcIixcbiAgXCJBbmdvbGFcIixcbiAgXCJBbnRpZ3VhIG9jaCBCYXJidWRhXCIsXG4gIFwiQXJnZW50aW5hXCIsXG4gIFwiQXVzdHJhbGllblwiLFxuICBcIkF6ZXJiYWpkemphblwiLFxuICBcIsOWc3RlcnJpa2VcIixcbiAgXCLDlnN0dGltb3JcIixcbiAgXCJCYWhhbWFzXCIsXG4gIFwiQmFocmFpblwiLFxuICBcIkJhbmdsYWRlc2hcIixcbiAgXCJCYXJiYWRvc1wiLFxuICBcIkJlbGdpZW5cIixcbiAgXCJCZW5pblwiLFxuICBcIkJlcm11ZGFcIixcbiAgXCJCaHV0YW5cIixcbiAgXCJCb2xpdmlhXCIsXG4gIFwiQm9zbmllbiBvY2ggSGVyY2Vnb3ZpbmFcIixcbiAgXCJCb3Rzd2FuYVwiLFxuICBcIkJyYXNpbGllblwiLFxuICBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXG4gIFwiQnVsZ2FyaWVuXCIsXG4gIFwiQnVya2luYSBGYXNvXCIsXG4gIFwiQnVydW5kaVwiLFxuICBcIkNlbnRyYWxhZnJpa2Fuc2thIFJlcHVibGlrZW5cIixcbiAgXCJDaGlsZVwiLFxuICBcIkNvbG9tYmlhXCIsXG4gIFwiQ29zdGEgUmljYVwiLFxuICBcIkN5cGVyblwiLFxuICBcIkRhbm1hcmtcIixcbiAgXCJEZW1va3JhdGlza2EgUmVwdWJsaWtlbiBLb25nb1wiLFxuICBcIkRvbWluaWthbnNrYSBSZXB1Ymxpa2VuXCIsXG4gIFwiRWN1YWRvclwiLFxuICBcIkVneXB0ZW5cIixcbiAgXCJFbCBTYWx2YWRvclwiLFxuICBcIkVsZmVuYmVuc2t1c3RlblwiLFxuICBcIkVzdGxhbmRcIixcbiAgXCJFdGlvcGllblwiLFxuICBcIkbDpHLDtmFybmFcIixcbiAgXCJGw7ZyZW5hZGUgQXJhYmVtaXJhdGVuXCIsXG4gIFwiRmlsaXBwaW5lcm5hXCIsXG4gIFwiRmlubGFuZFwiLFxuICBcIkZyYW5rcmlrZVwiLFxuICBcIkdhYm9uXCIsXG4gIFwiR2VvcmdpZW5cIixcbiAgXCJHaGFuYVwiLFxuICBcIkdpYnJhbHRhclwiLFxuICBcIkdyw7ZubGFuZFwiLFxuICBcIkdyZWtsYW5kXCIsXG4gIFwiR3JlbmFkYVwiLFxuICBcIkd1YXRlbWFsYVwiLFxuICBcIkhvbmR1cmFzXCIsXG4gIFwiSG9uZyBLb25nXCIsXG4gIFwiSW5kaWVuXCIsXG4gIFwiSW5kb25lc2llblwiLFxuICBcIklyYWtcIixcbiAgXCJJcmFuXCIsXG4gIFwiSXJsYW5kXCIsXG4gIFwiSXNsYW5kXCIsXG4gIFwiSXNyYWVsXCIsXG4gIFwiSXRhbGllblwiLFxuICBcIkphbWFpY2FcIixcbiAgXCJKYXBhblwiLFxuICBcIkplbWVuXCIsXG4gIFwiSmVyc2V5XCIsXG4gIFwiSm9yZGFuaWVuXCIsXG4gIFwiS2FtYm9kamFcIixcbiAgXCJLYW5hZGFcIixcbiAgXCJLYXpha3N0YW5cIixcbiAgXCJLZW55YVwiLFxuICBcIktpbmFcIixcbiAgXCJLaXJpYmF0aVwiLFxuICBcIktyb2F0aWVuXCIsXG4gIFwiS3ViYVwiLFxuICBcIkt1d2FpdFwiLFxuICBcIkxhb3NcIixcbiAgXCJMZXR0bGFuZFwiLFxuICBcIkxpYmFub25cIixcbiAgXCJMaWJ5ZW5cIixcbiAgXCJMaXRhdWVuXCIsXG4gIFwiTHV4ZW1idXJnXCIsXG4gIFwiTWFkYWdhc2thclwiLFxuICBcIk1ha2Vkb25pZW5cIixcbiAgXCJNYWxhd2lcIixcbiAgXCJNYWxheXNpYVwiLFxuICBcIk1hbGRpdmVybmFcIixcbiAgXCJNYWxpXCIsXG4gIFwiTWFsdGFcIixcbiAgXCJNYXJvY2tvXCIsXG4gIFwiTWF1cml0aXVzXCIsXG4gIFwiTWV4aWtvXCIsXG4gIFwiTW9jYW1iaXF1ZVwiLFxuICBcIk1vbmFjb1wiLFxuICBcIk1vbmdvbGlldFwiLFxuICBcIk15YW5tYXJcIixcbiAgXCJOYW1pYmlhXCIsXG4gIFwiTmVkZXJsw6RuZGVybmFcIixcbiAgXCJOZWRlcmzDpG5kc2thIEFudGlsbGVybmFcIixcbiAgXCJOZXBhbFwiLFxuICBcIk5pY2FyYWd1YVwiLFxuICBcIk5pZ2VyXCIsXG4gIFwiTmlnZXJpYVwiLFxuICBcIk5vcmdlXCIsXG4gIFwiTnlhIFplZWxhbmRcIixcbiAgXCJPbWFuXCIsXG4gIFwiUGFraXN0YW5cIixcbiAgXCJQYW5hbWFcIixcbiAgXCJQYXJhZ3VheVwiLFxuICBcIlBlcnVcIixcbiAgXCJQb2xlblwiLFxuICBcIlBvcnR1Z2FsXCIsXG4gIFwiUHVlcnRvIFJpY29cIixcbiAgXCJRYXRhclwiLFxuICBcIlJ1bcOkbmllblwiLFxuICBcIlJ3YW5kYVwiLFxuICBcIlJ5c3NsYW5kXCIsXG4gIFwiU2FpbnQgTHVjaWFcIixcbiAgXCJTYWludCBWaW5jZW50IG9jaCBHcmVuYWRpbmVybmFcIixcbiAgXCJTYW1vYVwiLFxuICBcIlNhbiBNYXJpbm9cIixcbiAgXCJTYW8gVG9tZSBvY2ggUHJpbmNpcGVcIixcbiAgXCJTYXVkaWFyYWJpZW5cIixcbiAgXCJTY2h3ZWl6XCIsXG4gIFwiU2VuZWdhbFwiLFxuICBcIlNlcmJpZW4gb2NoIE1vbnRlbmVncm9cIixcbiAgXCJTZXljaGVsbGVybmFcIixcbiAgXCJTaWVycmEgTGVvbmVcIixcbiAgXCJTaW5nYXBvcmVcIixcbiAgXCJTbG92YWtpZW5cIixcbiAgXCJTbG92ZW5pZW5cIixcbiAgXCJTb21hbGlhXCIsXG4gIFwiU3BhbmllblwiLFxuICBcIlNyaSBMYW5rYVwiLFxuICBcIlN1ZGFuXCIsXG4gIFwiU3VyaW5hbVwiLFxuICBcIlN2ZXJpZ2VcIixcbiAgXCJTd2F6aWxhbmRcIixcbiAgXCJTeWRhZnJpa2FcIixcbiAgXCJTeWRrb3JlYVwiLFxuICBcIlN5cmllblwiLFxuICBcIlRhaXdhblwiLFxuICBcIlRhbnphbmlhXCIsXG4gIFwiVGhhaWxhbmRcIixcbiAgXCJUamVja2llblwiLFxuICBcIlRyaW5pZGFkIG9jaCBUb2JhZ29cIixcbiAgXCJUdW5pc2llblwiLFxuICBcIlR1cmtpZXRcIixcbiAgXCJUeXNrbGFuZFwiLFxuICBcIlVnYW5kYVwiLFxuICBcIlVrcmFpbmFcIixcbiAgXCJVbmdlcm5cIixcbiAgXCJVcnVndWF5XCIsXG4gIFwiVVNBXCIsXG4gIFwiVXpiZWtpc3RhblwiLFxuICBcIlZlbmV6dWVsYVwiLFxuICBcIlZpZXRuYW1cIixcbiAgXCJWaXRyeXNzbGFuZFwiLFxuICBcIlphbWJpYVwiLFxuICBcIlppbWJhYndlXCIsXG5dO1xuIiwiaW1wb3J0IHsgY2xlYXJFcnJvciB9IGZyb20gXCIuLi9mb3JtLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNzaWdubWVudCAuY291bnRyeS1pbnB1dFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc3NpZ25tZW50IC5jb3VudHJ5LWlucHV0ICsgLmVycm9yXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRyeUlzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRDb3VudHJ5SW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvdW50cnlJbnB1dCgpIHtcbiAgY29uc3QgY291bnRyeSA9IGdldENvdW50cnlJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldENvdW50cnlJbnB1dEVycm9yKCk7XG5cbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjbGVhckVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvdW50cnlFcnJvcigpIHtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb3VudHJ5SW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJQbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbiBmcm9tIHRoZSBsaXN0LlwiO1xuICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG59XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgaGFuZGxlRW1haWxJbnB1dCB9IGZyb20gXCIuL2VtYWlsLWlucHV0LXZhbGlkYXRpb25cIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGVtYWlsSW5wdXRJZCA9IGBlbWFpbC1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcblxuY29uc3QgRW1haWxJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHtlbWFpbElucHV0SWR9YCxcbiAgICAgICAgaW5uZXJIVE1MOiBgUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgJHtcbiAgICAgICAgICBTcGFuKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCIqXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgICBJbnB1dCh7XG4gICAgICAgIGlkOiBgJHtlbWFpbElucHV0SWR9YCxcbiAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVFbWFpbElucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbElucHV0O1xuIiwiaW1wb3J0IHsgY2xlYXJFcnJvciB9IGZyb20gXCIuLi9mb3JtLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGVtYWlsSW5wdXRJZCB9IGZyb20gXCIuL0VtYWlsSW5wdXRcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbWFpbElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW1haWxJbnB1dElkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbWFpbElucHV0RXJyb3IoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbWFpbElucHV0SWR9ICsgLmVycm9yYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWFpbElzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRFbWFpbElucHV0KCkudmFsaWRpdHkudmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFbWFpbElucHV0KCkge1xuICBpZiAoZW1haWxJc1ZhbGlkKCkpIHtcbiAgICBjbGVhckVycm9yKGdldEVtYWlsSW5wdXRFcnJvcigpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RW1haWxFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RW1haWxFcnJvcigpIHtcbiAgY29uc3QgZW1haWwgPSBnZXRFbWFpbElucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0RW1haWxJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XG5cbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyB0byBjb250aW51ZS5cIjtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIExhYmVsLCBJbnB1dCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBoYW5kbGVaaXBDb2RlSW5wdXQgfSBmcm9tIFwiLi96aXAtY29kZS1pbnB1dC12YWxpZGF0aW9uXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCB6aXBDb2RlSW5wdXRJZCA9IGB6aXAtY29kZS1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcbmNvbnN0IFppcENvZGVJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHt6aXBDb2RlSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBQbGVhc2UgZW50ZXIgeW91ciB6aXAgY29kZSAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBwYXR0ZXJuOiBcIl5bMC05XXs1fSg/Oi1bMC05XXs0fSk/JFwiLFxuICAgICAgICBpZDogYCR7emlwQ29kZUlucHV0SWR9YCxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVaaXBDb2RlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImVycm9yXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFppcENvZGVJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyB6aXBDb2RlSW5wdXRJZCB9IGZyb20gXCIuL1ppcENvZGVJbnB1dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WmlwQ29kZUlucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoemlwQ29kZUlucHV0SWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFppcENvZGVJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7emlwQ29kZUlucHV0SWR9ICsgLmVycm9yYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXBDb2RlSXNWYWxpZCgpIHtcbiAgcmV0dXJuIGdldFppcENvZGVJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlWmlwQ29kZUlucHV0KCkge1xuICBpZiAoemlwQ29kZUlzVmFsaWQoKSkge1xuICAgIGNsZWFyRXJyb3IoZ2V0WmlwQ29kZUlucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1ppcENvZGVFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93WmlwQ29kZUVycm9yKCkge1xuICBjb25zdCB6aXBDb2RlID0gZ2V0WmlwQ29kZUlucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0WmlwQ29kZUlucHV0RXJyb3IoKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiRW50ZXIgYSB2YWxpZCB6aXAgY29kZSBmb3JtYXQuICg1NTU1NSBvciA1NTU1NS00NDQ0KVwiO1xuXG4gIGlmICh6aXBDb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCB6aXAgY29kZSB0byBjb250aW51ZS5cIjtcbiAgfSBlbHNlIHtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBoYW5kbGVDb25maXJtUGFzc3dvcmRJbnB1dCB9IGZyb20gXCIuL3Bhc3N3b3Jkcy12YWxpZGF0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0SWQgPSBgY29uZmlybS1wYXNzd29yZC1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcblxuY29uc3QgQ29uZmlybVBhc3N3b3JkSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7Y29uZmlybVBhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBDb25maXJtIHBhc3N3b3JkICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7Y29uZmlybVBhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtUGFzc3dvcmRJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICBoYW5kbGVQYXNzd29yZElucHV0LFxuICBwYXNzd29yZFJlZ2V4U3RyaW5nLFxufSBmcm9tIFwiLi9wYXNzd29yZHMtdmFsaWRhdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBwYXNzd29yZElucHV0SWQgPSBgcGFzc3dvcmQtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IFBhc3N3b3JkSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7cGFzc3dvcmRJbnB1dElkfWAsXG4gICAgICAgIGlubmVySFRNTDogYENyZWF0ZSB5b3VyIHBhc3N3b3JkICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7cGFzc3dvcmRJbnB1dElkfWAsXG4gICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHBhdHRlcm46IHBhc3N3b3JkUmVnZXhTdHJpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlUGFzc3dvcmRJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3JcIiB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBjb25maXJtUGFzc3dvcmRJbnB1dElkIH0gZnJvbSBcIi4vQ29uZmlybVBhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCB7IHBhc3N3b3JkSW5wdXRJZCB9IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRcIjtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVnZXhTdHJpbmcgPVxuICBcIl4oPz0uKmQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW2EtekEtWl0pLnsxMix9JFwiO1xuXG5jb25zdCBwYXNzd29yZFJlZ2V4ID0gbmV3IFJlZ0V4cChwYXNzd29yZFJlZ2V4U3RyaW5nKTtcblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFBBU1NXT1JEIElOUFVUICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkSW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXNzd29yZElucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFzc3dvcmRJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFzc3dvcmRJbnB1dElkfSArIC5lcnJvcmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0UGFzc3dvcmRJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFzc3dvcmRJbnB1dFZhbHVlKCkge1xuICByZXR1cm4gZ2V0UGFzc3dvcmRJbnB1dCgpLnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmRJbnB1dCgpIHtcbiAgaWYgKHBhc3N3b3JkSXNWYWxpZCgpKSB7XG4gICAgY2xlYXJFcnJvcihnZXRQYXNzd29yZElucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Bhc3N3b3JkRXJyb3IoKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0UGFzc3dvcmRJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldFBhc3N3b3JkSW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID1cbiAgICBcIlZhbGlkIHBhc3N3b3JkcyBhcmUgYXQgbGVhc2UgMTIgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIGF0IGxlYXNlIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbG93ZXJjYXNlIGxldHRlci5cIjtcblxuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkIHRvIGNvbnRpbnVlLlwiO1xuICB9XG5cbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgQ09ORklSTSBQQVNTV09SRCBJTlBVVCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maXJtUGFzc3dvcmRJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpcm1QYXNzd29yZElucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbmZpcm1QYXNzd29yZElucHV0SWR9ICsgLmVycm9yYCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1QYXNzd29yZElucHV0KCkudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmRJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0KCkge1xuICBjb25zdCBpbnB1dCA9IGdldENvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gIGlmIChnZXRQYXNzd29yZElucHV0VmFsdWUoKSA9PT0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSgpKSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJpbnZhbGlkXCIpO1xuICB9XG5cbiAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY2xlYXJFcnJvcihnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yKCkpO1xuICB9IGVsc2Uge1xuICAgIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IoKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKTtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XG5cbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgY29uZmlybSB5b3VyIHBhc3N3b3JkIHRvIGNvbnRpbnVlLlwiO1xuICB9XG5cbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBCdXR0b24oXG4gICAgeyBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcywgaW5uZXJUZXh0OiBcIlN1Ym1pdFwiIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QnV0dG9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgRm9ybSwgU3BhbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGhhbmRsZUZvcm1TdWJtaXQgfSBmcm9tIFwiLi9mb3JtLXZhbGlkYXRpb25cIjtcbmltcG9ydCBaaXBDb2RlSW5wdXQgZnJvbSBcIi4vSW5wdXQvWmlwQ29kZUlucHV0XCI7XG5pbXBvcnQgQ291bnRyeUlucHV0IGZyb20gXCIuL0NvdW50cnlJbnB1dC9Db3VudHJ5SW5wdXRcIjtcbmltcG9ydCBFbWFpbElucHV0IGZyb20gXCIuL0VtYWlsSW5wdXQvRW1haWxJbnB1dFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRzL1Bhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCBDb25maXJtUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi9QYXNzd29yZElucHV0cy9Db25maXJtUGFzc3dvcmRJbnB1dFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgZm9ybUlkID0gYGZvcm0tJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IFZhbGlkYXRlZEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiYXNzaWdubWVudFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRm9ybShcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBmb3JtSWQsXG4gICAgICAgICAgbm9WYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICBvbnN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgaGFuZGxlRm9ybVN1Ym1pdChldmVudCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIEVtYWlsSW5wdXQoKSxcbiAgICAgICAgICBDb3VudHJ5SW5wdXQoKSxcbiAgICAgICAgICBaaXBDb2RlSW5wdXQoKSxcbiAgICAgICAgICBQYXNzd29yZElucHV0KCksXG4gICAgICAgICAgQ29uZmlybVBhc3N3b3JkSW5wdXQoKSxcbiAgICAgICAgICBTdWJtaXRCdXR0b24oKSxcbiAgICAgICAgICBEaXYoe1xuICAgICAgICAgICAgaW5uZXJIVE1MOiBgJHtcbiAgICAgICAgICAgICAgU3Bhbih7IGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIiwgaW5uZXJUZXh0OiBcIipcIiB9KS5vdXRlckhUTUxcbiAgICAgICAgICAgIH0gaW5kaWNhdGVzIGEgcmVxdWlyZWQgZmllbGRgLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZWRGb3JtO1xuIiwiaW1wb3J0IHtcbiAgc2hvd0NvdW50cnlFcnJvcixcbiAgY291bnRyeUlzVmFsaWQsXG59IGZyb20gXCIuL0NvdW50cnlJbnB1dC9jb3VudHJ5LWlucHV0LXZhbGlkYXRpb25cIjtcblxuaW1wb3J0IHtcbiAgc2hvd0VtYWlsRXJyb3IsXG4gIGVtYWlsSXNWYWxpZCxcbn0gZnJvbSBcIi4vRW1haWxJbnB1dC9lbWFpbC1pbnB1dC12YWxpZGF0aW9uXCI7XG5cbmltcG9ydCB7XG4gIHNob3daaXBDb2RlRXJyb3IsXG4gIHppcENvZGVJc1ZhbGlkLFxufSBmcm9tIFwiLi9JbnB1dC96aXAtY29kZS1pbnB1dC12YWxpZGF0aW9uXCI7XG5pbXBvcnQge1xuICBjb25maXJtUGFzc3dvcmRJc1ZhbGlkLFxuICBwYXNzd29yZElzVmFsaWQsXG4gIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcixcbiAgc2hvd1Bhc3N3b3JkRXJyb3IsXG59IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRzL3Bhc3N3b3Jkcy12YWxpZGF0aW9uXCI7XG5cbmZ1bmN0aW9uIGdldEZvcm0oKSB7fVxuXG5mdW5jdGlvbiBhbGxJbnB1dHNWYWxpZChmb3JtKSB7XG4gIGNvbnN0IGlucHV0cyA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIiksXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGlucHV0VmFsaWRpdHkgPSBpbnB1dHNbaV0udmFsaWRpdHkudmFsaWQ7XG4gICAgaWYgKCFpbnB1dFZhbGlkaXR5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudCkge1xuICBpZiAoYWxsSW5wdXRzVmFsaWQoKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJTVUJNSVRURUQhXCIpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZW1haWxJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgfVxuICAgIGlmICghY291bnRyeUlzVmFsaWQoKSkge1xuICAgICAgc2hvd0NvdW50cnlFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoIXppcENvZGVJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3daaXBDb2RlRXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKCFwYXNzd29yZElzVmFsaWQoKSkge1xuICAgICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpcm1QYXNzd29yZElzVmFsaWQoKSkge1xuICAgICAgc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVycm9yKGVycm9yRWxlbWVudCkge1xuICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgZXJyb3JFbGVtZW50LmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcbn1cbiIsIi8qKlxuICogVGhpcyBGdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGRvbSBlbGVtZW50IHdpdGggaXRzIGluaXRpYWwgYXR0cmlidXRlcyBhbmQgY2hpbGQgZWxlbWVudHMgZGVmaW5lZCBieSBhIHBhc3NlZC1pbiBvYmplY3QgYW5kIGFycmF5IG9mIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVN0ciB0aGUgdGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgcmV0dXJuZWQgeW91IHdvdWxkIHVzZSBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KClcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc09iaiAob3B0aW9uYWwpIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbml0aWFsIHByb3BlcnRpZXMvYXR0cmlidXRlcyB5b3Ugd2FudCB0aGUgZWxlbWVudCB0byBoYXZlXG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZEFyciAob3B0aW9uYWwpIGFuIG9mIGVsZW1lbnQgb2JqZWN0cyB0byBiZSBhcHBlbmRlZCBhcyBjaGlsZHJlbiB0byB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY3JlYXRlZCBpbiBtZW1vcnlcbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICAvLyBTb21lIGF0dHJpYnV0ZXMgY2FuIG9ubHkgYmUgc2V0IHVzaW5nIHRoZSBFbGVtZW50LnNldEF0dHJpYnV0ZSgpIG1ldGhvZC5cbiAgLy8gSWYgaXQgaXMgaW4gdGhlIHByb3BzT2JqIE9iamVjdC5hc3NpZ24gd2lsbCBmYWlsLiBXZSdsbCByZW1vdmUgaXQgZnJvbSB0aGVcbiAgLy8gcHJvcHMgb2JqZWN0IGhlcmUgYW5kIGFzc2lnbiB0aGVtIHRvIHRoZSBwYXJlbnQgZWxlbWVudCBiZWZvcmUgaXQgaXMgcmV0dXJuZWQuXG4gIC8vIFRoZXNlIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIGxpc3QgZm9yIHByb2Nlc3NpbmcuXG4gIGxldCBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzID0gW1wibGlzdFwiXTtcbiAgbGV0IHByb3BlcnRpZXMgPSBbXTtcbiAgc2V0QXR0cmlidXRlUHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBwcm9wc09iaikge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goeyBuYW1lOiBwcm9wZXJ0eSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgZGVsZXRlIHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGJhc2VkIG9uIHRoZSB0eXBlIHN0cmluZyBwcm92aWRlZFxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgLy8gQWRkIHBhc3NlZCBpbiBjaGlsZCB0byBhcnJheSBpZiBpdCBpcyBub3QgYWxyZWFkeVxuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvIHRoZSBlbGVtZW50XG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICAvLyBBcHBseSBwcm9wZXJ0aWVzIHdpdGggc2V0QXR0cmlidXRlIGlmIG5lZWRlZFxuICBpZiAocHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbi8vICBDT01NT04gRUxFTUVOVFNcbmV4cG9ydCBjb25zdCBBID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhcnRpY2xlXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJvZHlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJ1dHRvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGl2XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERhdGFsaXN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRhdGFsaXN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkc2V0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZpZWxkc2V0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb290ZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb3JtXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgxXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgzXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoZWFkZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSHIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaHJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbWdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW5wdXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGFiZWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxlZ2VuZFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMaSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9wdGlvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBQID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInBcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNlbGVjdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTdHJvbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3Ryb25nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNwYW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3BhblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBVbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ1bFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG4iLCJleHBvcnQgY29uc3QgZ2l0aHViSW5mbyA9IHtcbiAgcmVwb05hbWU6IFwiYm9pbGVycGxhdGUtd2VicGFja1wiLFxufTtcbiIsImltcG9ydCB7IGFwcGx5V2luZG93TGlzdGVuZXJzIH0gZnJvbSBcIi4vdWktd2luZG93XCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3VpL2Nhcm91c2VsLXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgY2xpY2tDYXJvdXNlbFBsYXkoKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQW5kQWRkRWxsaXBzZSA9IChzdHJpbmcsIG51bUNoYXJzVG9LZWVwKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbnVtQ2hhcnNUb0tlZXApLnRyaW1FbmQoKSArIFwiLi4uXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gc2V0dXAgYSB0aW1lclxuICBsZXQgdGltZW91dDtcblxuICAvLyByZXR1cm4gYSBmdW5jdGlvbiB0byBydW4gZGVib3VuY2VkXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy9zZXR1cCBhcmdzXG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIHRpbWVyIGNhbmNlbCBpdFxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgdGhlIG5ldyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXN0Q29udGVudEFycihudW1DaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkobnVtQ2hpbGRyZW4pXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChlbGVtKSA9PlxuICAgICAgRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1iIG1iLTFcIixcbiAgICAgICAgaW5uZXJUZXh0OlxuICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3IsIHVsbGFtIGFkLCBtYXhpbWUgZW5pbSBzZXF1aSBzdW50IHF1byBmYWNpbGlzIGlsbG8gZXZlbmlldCBsYXVkYW50aXVtIHF1YWUgcmVwZWxsZW5kdXMgZG9sb3J1bSBvbW5pcyBtaW5pbWEgZHVjaW11cyBhcmNoaXRlY3RvISBCZWF0YWUsIHZlbCBhc3N1bWVuZGEuXCIsXG4gICAgICB9KVxuICAgICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50L0NvbnRlbnRcIjtcbmltcG9ydCB7IGFwcGx5SW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcGFnZS1sb2dpYy91aS91aS1pbml0aWFsLXN0YXRlXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuYXBwbHlJbml0aWFsU3RhdGUoKTtcblxuLy8gZGVidWdnaW5nXG5jb25zdCBkZWJ1Z2dpbmcgPSB0cnVlO1xuaWYgKGRlYnVnZ2luZykge1xuICAvL1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJIZWFkZXIiLCJEeW5hbWljRm9vdGVyIiwiTWFpblNlY3Rpb24iLCJDb250ZW50IiwiY29udGVudCIsImlkIiwiQSIsIkRpdiIsIkljb24iLCJnaXRodWJJbmZvIiwiZHluYW1pY1llYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJDb3B5cmlnaHRDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwiaHJlZiIsInJlcG9OYW1lIiwiRm9vdGVyIiwiQXR0cmlidXRpb25zQ29udGFpbmVyIiwiVE9QQ29udGFpbmVyIiwiRXhwYW5kYWJsZVBhbmVsIiwiTm9uRXhwYW5kYWJsZVBhbmVsIiwiSWNvbnNFeHBsYW5hdGlvbiIsImNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJwYXJlbnRDb250YWluZXIiLCJoMSIsIm90aGVyQ2xhc3NlcyIsImhlYWRlciIsImdlbmVyYXRlVGVzdENvbnRlbnRBcnIiLCJDdXN0b21JY29uc0Rpc3BsYXkiLCJJbWFnZUNhcm91c2VsIiwiVmFsaWRhdGVkRm9ybSIsIk1haW4iLCJtYWluIiwiRXhwYW5kYWJsZVBhbmVsVGl0bGUiLCJFeHBhbmRhYmxlUGFuZWxDb250ZW50IiwidjQiLCJ1dWlkdjQiLCJwcm9wcyIsImNvbXBvbmVudElkIiwicGFuZWwiLCJCdXR0b24iLCJ0b2dnbGVFeHBhbnNpb24iLCJleHBhbnNpb25Db250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJpY29uQ2xhc3MiLCJpY29uIiwiQ2Fyb3VzZWxOYXZJbmRpY2F0b3IiLCJDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciIsIkNhcm91c2VsTmF2IiwiaW1hZ2VEYXRhIiwibWFwIiwib2JqIiwiaW5kZXgiLCJpbWFnZUlkIiwidXVpZCIsInN0YXJ0c0FjdGl2ZSIsImlzQWN0aXZlIiwiY2xpY2tDYXJvdXNlbE5hdiIsIlBsYXlCdXR0b24iLCJQYXVzZUJ1dHRvbiIsIkltZyIsIkNhcm91c2VsU2xpZGUiLCJpbWFnZVNvdXJjZSIsInNyYyIsIlVsIiwiQ2Fyb3VzZWxUcmFjayIsIkNhcm91c2VsVHJhY2tDb250YWluZXIiLCJMZWZ0Q2Fyb3VzZWxCdXR0b24iLCJSaWdodENhcm91c2VsQnV0dG9uIiwiY2Fyb3VzZWwiLCJjbGlja0Nhcm91c2VsTGVmdCIsInNoYXJlZENsYXNzZXMiLCJidXR0b24iLCJjbGlja0Nhcm91c2VsUmlnaHQiLCJpZExpc3QiLCJBcnJheSIsImZpbGwiLCJlIiwiaSIsImZpbHRlciIsInJhbmRJbWdIZWlnaHQiLCJyYW5kSW1nV2lkdGgiLCJpbWFnZVNvdXJjZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tDYXJvdXNlbFBsYXkiLCJjbGlja0Nhcm91c2VsUGF1c2UiLCJnZXRBbGxDYXJvdXNlbFNsaWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZE5vZGVzIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcyIsImVsZW0iLCJnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Q3VycmVudFNsaWRlSW5kZXgiLCJhbGxTbGlkZUlkcyIsImN1cnJlbnRTbGlkZUlkIiwiY3VycmVudFNsaWRlSW5kZXgiLCJpbmRleE9mIiwiZ2V0UHJldmlvdXNTbGlkZUluZGV4IiwicHJldmlvdXNTbGlkZUluZGV4IiwiY29ycmVjdGVkSW5kZXgiLCJnZXROZXh0U2xpZGVJbmRleCIsIm5leHRTbGlkZUluZGV4IiwiZ290b1NwZWNpZmljU2xpZGUiLCJhbGxOYXZCdXR0b25zIiwic2VsZWN0ZWROYXZCdXR0b24iLCJzZWxlY3RlZFNsaWRlIiwiYWxsU2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlIiwicmVtb3ZlIiwiYWRkIiwicmVwbGFjZSIsInRvZ2dsZVBhbHlQYXVzZSIsImNhcm91c2VsQXV0b0FkdmFuY2UiLCJnZXRDYXJvdXNlbEF1dG9BZHZhbmNlIiwic2V0Q2Fyb3VzZWxBdXRvQWR2YW5jZSIsImhhbmRsZUF1dG9BZHZhbmNlIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwiaW50ZXJ2YWwiLCJtb2RlIiwicGxheWluZyIsIndpbmRvdyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIklucHV0IiwiTGFiZWwiLCJTcGFuIiwiRGF0YWxpc3QiLCJPcHRpb24iLCJTZWxlY3QiLCJjb3VudHJpZXMiLCJoYW5kbGVDb3VudHJ5SW5wdXQiLCJjb21wb25lbnRVdWlkIiwiY291bnRyeUlucHV0SWQiLCJDb3VudHJ5SW5wdXQiLCJmb3IiLCJyZXF1aXJlZCIsIm9uaW5wdXQiLCJjb3VudHJ5Iiwiam9pbiIsImNsZWFyRXJyb3IiLCJnZXRDb3VudHJ5SW5wdXQiLCJnZXRDb3VudHJ5SW5wdXRFcnJvciIsImNvdW50cnlJc1ZhbGlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yIiwic2hvd0NvdW50cnlFcnJvciIsImVycm9yTWVzc2FnZSIsImhhbmRsZUVtYWlsSW5wdXQiLCJlbWFpbElucHV0SWQiLCJFbWFpbElucHV0IiwidHlwZSIsImdldEVtYWlsSW5wdXQiLCJnZXRFbWFpbElucHV0RXJyb3IiLCJlbWFpbElzVmFsaWQiLCJzaG93RW1haWxFcnJvciIsImVtYWlsIiwidmFsdWVNaXNzaW5nIiwiaGFuZGxlWmlwQ29kZUlucHV0IiwiemlwQ29kZUlucHV0SWQiLCJaaXBDb2RlSW5wdXQiLCJwYXR0ZXJuIiwiZ2V0WmlwQ29kZUlucHV0IiwiZ2V0WmlwQ29kZUlucHV0RXJyb3IiLCJ6aXBDb2RlSXNWYWxpZCIsInNob3daaXBDb2RlRXJyb3IiLCJ6aXBDb2RlIiwiaGFuZGxlQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJjb25maXJtUGFzc3dvcmRJbnB1dElkIiwiQ29uZmlybVBhc3N3b3JkSW5wdXQiLCJoYW5kbGVQYXNzd29yZElucHV0IiwicGFzc3dvcmRSZWdleFN0cmluZyIsInBhc3N3b3JkSW5wdXRJZCIsIlBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZFJlZ2V4IiwiUmVnRXhwIiwiZ2V0UGFzc3dvcmRJbnB1dCIsImdldFBhc3N3b3JkSW5wdXRFcnJvciIsInBhc3N3b3JkSXNWYWxpZCIsImdldFBhc3N3b3JkSW5wdXRWYWx1ZSIsInZhbHVlIiwic2hvd1Bhc3N3b3JkRXJyb3IiLCJwYXNzd29yZCIsImdldENvbmZpcm1QYXNzd29yZElucHV0IiwiZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvciIsImdldENvbmZpcm1QYXNzd29yZElucHV0VmFsdWUiLCJjb25maXJtUGFzc3dvcmRJc1ZhbGlkIiwiaW5wdXQiLCJzZXRDdXN0b21WYWxpZGl0eSIsInNob3dDb25maXJtUGFzc3dvcmRFcnJvciIsIlN1Ym1pdEJ1dHRvbiIsIkZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiZm9ybUlkIiwibm9WYWxpZGF0ZSIsIm9uc3VibWl0IiwiZXZlbnQiLCJnZXRGb3JtIiwiYWxsSW5wdXRzVmFsaWQiLCJmb3JtIiwiaW5wdXRzIiwiaW5wdXRWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JFbGVtZW50IiwidHlwZVN0ciIsInByb3BzT2JqIiwiY2hpbGRBcnIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInByb3BlcnR5IiwicHVzaCIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVFbGVtZW50IiwiaXNBcnJheSIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJBcnRpY2xlIiwiQiIsIkJvZHkiLCJCciIsIkZpZWxkc2V0IiwiSDEiLCJIMiIsIkgzIiwiSHIiLCJJIiwiTGVnZW5kIiwiTGkiLCJPbCIsIlAiLCJTdHJvbmciLCJUZXh0YXJlYSIsImFwcGx5V2luZG93TGlzdGVuZXJzIiwiYXBwbHlJbml0aWFsU3RhdGUiLCJkZWJvdW5jZSIsImJyZWFrUG9pbnRzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsIm9ucmVzaXplIiwidHJ1bmNhdGVBbmRBZGRFbGxpcHNlIiwic3RyaW5nIiwibnVtQ2hhcnNUb0tlZXAiLCJzbGljZSIsInRyaW1FbmQiLCJmbiIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXBwbHkiLCJjYXBpdGFsaXplIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm51bUNoaWxkcmVuIiwiYm9keSIsImRlYnVnZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=