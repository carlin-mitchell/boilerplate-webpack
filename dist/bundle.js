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
<<<<<<< HEAD
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
=======
/* harmony import */ var _custom_components_ValidatedForm_ValidatedForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_custom-components/ValidatedForm/ValidatedForm */ "./src/components/_custom-components/ValidatedForm/ValidatedForm.js");
/* harmony import */ var _elements_Elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_elements/Elements */ "./src/components/_elements/Elements.js");
>>>>>>> current-components-refactor
// COMPONENT IMPORTS





<<<<<<< HEAD
=======

>>>>>>> current-components-refactor
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
<<<<<<< HEAD
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_3__.Main)({
=======
  const main = (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Main)({
>>>>>>> current-components-refactor
    id: "main-section",
    className: "" + " " + otherClasses
  },
  // add child elements to the array below
<<<<<<< HEAD
  [(0,_custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_3__.Div)({
    className: "carousel-row"
  }, [(0,_custom_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"])()])]);
=======
  [(0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "icons-row"
  }, [(0,_custom_components_CustomIconsDisplay_CustomIconsDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "carousel-row"
  }, [(0,_custom_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_2__["default"])()]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_4__.Div)({
    className: "form-row"
  }, [(0,_custom_components_ValidatedForm_ValidatedForm__WEBPACK_IMPORTED_MODULE_3__["default"])()])]);
>>>>>>> current-components-refactor
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
<<<<<<< HEAD
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow rotate-270 ")]);
=======
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short rotate-270 ")]);
>>>>>>> current-components-refactor
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
<<<<<<< HEAD
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow rotate-90")]);
=======
  [(0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])("icon-up-arrow-short rotate-90")]);
>>>>>>> current-components-refactor
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
<<<<<<< HEAD
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _assets_brick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/brick.png */ "./src/components/_custom-components/ImageCarousel/assets/brick.png");
/* harmony import */ var _assets_paint_face_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/paint-face.png */ "./src/components/_custom-components/ImageCarousel/assets/paint-face.png");
/* harmony import */ var _assets_mac_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/mac.png */ "./src/components/_custom-components/ImageCarousel/assets/mac.png");
/* harmony import */ var _assets_computer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/computer.png */ "./src/components/_custom-components/ImageCarousel/assets/computer.png");
/* harmony import */ var _assets_webdev_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ..//assets/webdev.png */ "./src/components/_custom-components/ImageCarousel/assets/webdev.png");


// Image sources






// add isActive: true to the slide you want to start as active
const imageSources = [{
  src: _assets_brick_png__WEBPACK_IMPORTED_MODULE_0__,
  isActive: true
}, {
  src: _assets_paint_face_png__WEBPACK_IMPORTED_MODULE_1__
}, {
  src: _assets_mac_png__WEBPACK_IMPORTED_MODULE_2__
}, {
  src: _assets_computer_png__WEBPACK_IMPORTED_MODULE_3__
}, {
  src: _assets_webdev_png__WEBPACK_IMPORTED_MODULE_4__
}];
const imageData = imageSources.map(obj => ({
  ...obj,
  uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])()
=======
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils */ "./src/utils.js");



// Image source info
function getPicsumId(min, max, exclusions) {
  let randInt = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(min, max);
  while (true) {
    if (exclusions.includes(randInt)) {
      randInt = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(min, max);
    } else {
      return randInt;
    }
  }
}
function getRandomImageSrc(width, height) {
  return `https://picsum.photos/id/${getPicsumId(1, 100, [97])}/${width}/${height}`;
}
const numImages = 7;
const imageWidth = 500;
const imageHeight = 300;

// add isActive: true to the slide you want to start as active
const imageSources = [{
  src: getRandomImageSrc(imageWidth, imageHeight),
  isActive: true
}, ...Array(numImages).fill(null).map(e => {
  return {
    src: getRandomImageSrc(imageWidth, imageHeight)
  };
})];
const imageData = imageSources.map(obj => ({
  ...obj,
  uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])()
>>>>>>> current-components-refactor
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
<<<<<<< HEAD
/* harmony export */   handleAutoAdvance: () => (/* binding */ handleAutoAdvance),
/* harmony export */   togglePalyPause: () => (/* binding */ togglePalyPause)
=======
/* harmony export */   handleAutoAdvance: () => (/* binding */ handleAutoAdvance)
>>>>>>> current-components-refactor
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
<<<<<<< HEAD
function togglePalyPause() {
  const carouselAutoAdvance = getCarouselAutoAdvance();
  setCarouselAutoAdvance(!carouselAutoAdvance);
}
=======
>>>>>>> current-components-refactor

// ######################## AUTO PROGRESSION ########################
function clickCarouselPlay() {
  handleAutoAdvance("play");
  const playButton = document.querySelector(".carousel .play-button");
  playButton.classList.toggle("visible");
  const pauseButton = document.querySelector(".carousel .pause-button");
  pauseButton.classList.toggle("visible");
}
<<<<<<< HEAD
clickCarouselPlay;
=======
>>>>>>> current-components-refactor
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

<<<<<<< HEAD
=======
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
  }))]), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Div)({
    className: "error"
  }), (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Datalist)({
    id: "countries"
  }, [..._countriesList__WEBPACK_IMPORTED_MODULE_1__.countries.map(country => (0,_elements_Elements__WEBPACK_IMPORTED_MODULE_0__.Option)({
    innerText: country
  }))])]);
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

>>>>>>> current-components-refactor
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
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
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

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/assets/brick.png":
/*!**************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/assets/brick.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67ae7fce1151c2d3079d.png";

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/assets/computer.png":
/*!*****************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/assets/computer.png ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ee4c9ea33159582bdba.png";

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/assets/mac.png":
/*!************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/assets/mac.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee5457e45a1adb489afc.png";

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/assets/paint-face.png":
/*!*******************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/assets/paint-face.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a31a7dd5d0e7aedc21f.png";

/***/ }),

/***/ "./src/components/_custom-components/ImageCarousel/assets/webdev.png":
/*!***************************************************************************!*\
  !*** ./src/components/_custom-components/ImageCarousel/assets/webdev.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f87830f60b2c97958dd.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFLENBQUM7QUFFbkUsTUFBTTBJLEtBQUssR0FBR0EsQ0FBQzFILEtBQUssRUFBRWhCLFFBQVEsS0FDbkM1QixPQUFPLENBQUMsT0FBTyxFQUFFNEMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVoQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFckUsTUFBTTJJLEtBQUssR0FBR0EsQ0FBQzNILEtBQUssRUFBRWhCLFFBQVEsS0FDbkM1QixPQUFPLENBQUMsT0FBTyxFQUFFNEMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVoQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFckUsTUFBTTRJLE1BQU0sR0FBR0EsQ0FBQzVILEtBQUssRUFBRWhCLFFBQVEsS0FDcEM1QixPQUFPLENBQUMsUUFBUSxFQUFFNEMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVoQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFdEUsTUFBTTZJLEVBQUUsR0FBR0EsQ0FBQzdILEtBQUssRUFBRWhCLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFNEMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVoQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTVUsSUFBSSxHQUFHQSxDQUFDTSxLQUFLLEVBQUVoQixRQUFRLEtBQ2xDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRTRDLEtBQUssR0FBRztFQUFFLEdBQUdBO0FBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFaEIsUUFBUSxHQUFHLENBQUMsR0FBR0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCNkI7QUFDc0I7QUFDa0I7QUFFckVpQyxRQUFRLENBQUMySixJQUFJLENBQUNyRCxXQUFXLENBQUNwSix1RUFBTyxDQUFDLENBQUMsQ0FBQztBQUVwQzhLLGtGQUFpQixDQUFDLENBQUM7O0FBRW5CO0FBQ0EsTUFBTTRCLFNBQVMsR0FBRyxJQUFJO0FBQ3RCLElBQUlBLFNBQVMsRUFBRTtFQUNiO0FBQUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9Db3B5cmlnaHRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1NpdGVBdHRyaWJ1dGlvbnMvQXR0cmlidXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0ljb25zRXhwbGFuYXRpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9EeW5hbWljRm9vdGVyL1RPUExpbmtDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvQ3VzdG9tSWNvbnNEaXNwbGF5L0N1c3RvbUljb25zRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxDb250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9FeHBhbmRhYmxlUGFuZWxUaXRsZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvTm9uRXhwYW5kYWJsZVBhbmVsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ljb24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbE5hdi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsTmF2SW5kaWNhdG9yLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFNsaWRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxUcmFjay5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsVHJhY2tDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvTGVmdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL1JpZ2h0QnV0dG9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvZGF0YS9pbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3BsYXlBbmRQYXVzZUJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC91aS9jYXJvdXNlbC11aS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBEeW5hbWljRm9vdGVyIGZyb20gXCIuLi9EeW5hbWljRm9vdGVyL0R5bmFtaWNGb290ZXJcIjtcbmltcG9ydCBNYWluU2VjdGlvbiBmcm9tIFwiLi4vTWFpblNlY3Rpb24vTWFpblNlY3Rpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwiY29udGVudFwiIH0sIFtcbiAgICBIZWFkZXIoKSxcbiAgICBNYWluU2VjdGlvbigpLFxuICAgIER5bmFtaWNGb290ZXIoKSxcbiAgXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEsIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5pbXBvcnQgeyBnaXRodWJJbmZvIH0gZnJvbSBcIi4uLy4uL3BhZ2UtbG9naWMvZGF0YS9kYXRhLXBhZ2UtY29uZmlnXCI7XG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG4vLyBURU1QTEFURSBWQVJJQUJMRVNcbmNvbnN0IGR5bmFtaWNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBDb3B5cmlnaHRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IGBjb3B5cmlnaHQtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWluZm8gZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7ZHluYW1pY1llYXJ9YCxcbiAgICAgIH0pLFxuICAgICAgQSh7IGhyZWY6IGBodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsLyR7Z2l0aHViSW5mby5yZXBvTmFtZX1gIH0sIFtcbiAgICAgICAgSWNvbihcImljb24tZ2l0aHViLWNhdFwiKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5cmlnaHRDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENvcHlyaWdodENvbnRhaW5lciBmcm9tIFwiLi9Db3B5cmlnaHRDb250YWluZXJcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUT1BDb250YWluZXIgZnJvbSBcIi4vVE9QTGlua0NvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHluYW1pY0Zvb3RlciA9ICgpID0+IHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBcbiAgRm9vdGVyKFxuICAgIHsgXG4gICAgICBpZDogYGZvb3RlcmAsIFxuICAgICAgY2xhc3NOYW1lOiBgYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZWAgXG4gICAgfSxcbiAgICBbXG4gICAgIENvcHlyaWdodENvbnRhaW5lcigpLCBcbiAgICAgVE9QQ29udGFpbmVyKCksIFxuICAgICBBdHRyaWJ1dGlvbnNDb250YWluZXIoKVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuaW1wb3J0IEljb25zRXhwbGFuYXRpb24gZnJvbSBcIi4vSWNvbnNFeHBsYW5hdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQXR0cmlidXRpb25zQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBhdHRyaWJ1dGlvbnMtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICB0aXRsZTogXCJTaXRlIEF0dHJpYnV0aW9uc1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJJY29uc1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgTm9uRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHaXRodWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dvc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsbCBvdGhlciBJY29uc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbnNFeHBsYW5hdGlvbigpXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRpb25zQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEljb25zRXhwbGFuYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IGBpY29ucy1leHBsYW5hdGlvbmAsIGlubmVySFRNTDogYGAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgaW5uZXJIVE1MOiBgQWxsIG90aGVyIGljb25zIHdlcmUgY3JlYXRlZCBieSBtZSB1c2luZyAke1xuICAgICAgICAgIEEoe1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2lua3NjYXBlLm9yZy9cIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCJJbmtzY2FwZVwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9IGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gYSBmb250IHdpdGggJHtcbiAgICAgICAgICBBKHtcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pY29tb29uLmlvL1wiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIkljb01vb25cIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnNFeHBsYW5hdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBUT1BDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IERpdihcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGB0b3AtY29udGFpbmVyYCxcbiAgICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBCeTpcIixcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBBKHtcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgICAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVE9QQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gRWxlbWVudChcImgxXCIsIHsgaW5uZXJUZXh0OiBcIlRoaXMgaXMgdGhlIGhlYWRlclwiIH0pO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZSBwLTJcIjtcbiAgY29uc3QgaGVhZGVyID0gRWxlbWVudChcbiAgICBcImhlYWRlclwiLFxuICAgIHtcbiAgICAgIGlkOiBcImhlYWRlclwiLFxuICAgICAgY2xhc3NOYW1lOiBcImhlYWRlclwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMsXG4gICAgfSxcbiAgICBbaDFdXG4gICk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXN0Q29udGVudEFyciB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IEN1c3RvbUljb25zRGlzcGxheSBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0N1c3RvbUljb25zRGlzcGxheS9DdXN0b21JY29uc0Rpc3BsYXlcIjtcbmltcG9ydCBJbWFnZUNhcm91c2VsIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9JbWFnZUNhcm91c2VsXCI7XG5pbXBvcnQgeyBNYWluLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgbWFpbiA9IE1haW4oXG4gICAge1xuICAgICAgaWQ6IFwibWFpbi1zZWN0aW9uXCIsXG4gICAgICBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBDdXN0b21JY29uc0Rpc3BsYXkoKSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJjYXJvdXNlbC1yb3dcIiB9LCBbSW1hZ2VDYXJvdXNlbCgpXSksXG4gICAgXVxuICApO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TZWN0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDdXN0b21JY29uc0Rpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBpbm5lclRleHQ6IGBgLCBjbGFzc05hbWU6IGBjdXN0b20taWNvbnMtZGlzcGxheWAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgSWNvbihcImljb24taGFtYnVyZ2VyLW1lbnVcIiksXG4gICAgICBJY29uKFwiaWNvbi1wYXVzZVwiKSxcbiAgICAgIEljb24oXCJpY29uLXBlbmNpbFwiKSxcbiAgICAgIEljb24oXCJpY29uLXBsdXMtc2lnblwiKSxcbiAgICAgIEljb24oXCJpY29uLXBsdXMtc2lnbiByb3RhdGUtNDVcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmFzaFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlXCIpLFxuICAgICAgSWNvbihcImljb24tdHJpYW5nbGUgcm90YXRlLTE4MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlLXNob3J0IHJvdGF0ZS05MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlLXNob3J0XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3dcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdyByb3RhdGUtMTgwXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnRcIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1hcnJvdy1zaG9ydCByb3RhdGUtMjcwXCIpLFxuICAgICAgSWNvbihcImljb24tdXAtZG93blwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWRvd24gcm90YXRlLTkwXCIpLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JY29uc0Rpc3BsYXk7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQSB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuaW1wb3J0IEV4cGFuZGFibGVQYW5lbFRpdGxlIGZyb20gXCIuL0V4cGFuZGFibGVQYW5lbFRpdGxlXCI7XG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsQ29udGVudCBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxDb250ZW50XCI7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBFeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY29tcG9uZW50SWQgPSB1dWlkdjQoKTtcbiAgY29uc3QgeyB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhbmVsID0gQShcbiAgICB7IGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWxgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEV4cGFuZGFibGVQYW5lbFRpdGxlKHsgdGl0bGUsIGNvbXBvbmVudElkIH0pLFxuICAgICAgRXhwYW5kYWJsZVBhbmVsQ29udGVudCh7IGNoaWxkcmVuLCBjb21wb25lbnRJZCB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YCxcbiAgICAgIGNsYXNzTmFtZTogYGV4cGFuZGFibGUtcGFuZWwtY29udGVudGAsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW0Rpdih7IGNsYXNzTmFtZTogXCJjb250ZW50XCIgfSwgWy4uLmNoaWxkcmVuXSldXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVBhbmVsQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24sIERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG5mdW5jdGlvbiB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpIHtcbiAgY29uc3QgZXhwYW5zaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtJHtjb21wb25lbnRJZH1gXG4gICk7XG4gIGNvbnN0IHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHBhbmRhYmxlLWNvbnRlbnQtYnV0dG9uLSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBleHBhbnNpb25Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgdG9nZ2xlRXhwYW5zaW9uQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgY29tcG9uZW50SWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLXRpdGxlYCB9LFxuICAgIFtcbiAgICAgIERpdih7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWktYlwiLFxuICAgICAgICBpbm5lclRleHQ6IHRpdGxlLFxuICAgICAgICBvbmNsaWNrKCkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIEJ1dHRvbihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWAsXG4gICAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihjb21wb25lbnRJZCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW0ljb24oXCJpY29uLXVwLWRvd25cIildXG4gICAgICApLFxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbFRpdGxlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBOb25FeHBhbmRhYmxlUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgdGl0bGUsIGhyZWYsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgJHtvdGhlckNsYXNzZXN9IG5vbi1leHBhbmRhYmxlLXBhbmVsICR7XG4gICAgICAgIGhyZWYgPyBcImlzLWxpbmtcIiA6IFwiXCJcbiAgICAgIH1gLFxuICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbLi4uY2hpbGRyZW5dXG4gICk7XG4gIGlmIChocmVmKSB7XG4gICAgcGFuZWwuaHJlZiA9IGhyZWY7XG4gIH1cbiAgcmV0dXJuIHBhbmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9uRXhwYW5kYWJsZVBhbmVsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJY29uID0gKGljb25DbGFzcykgPT4ge1xuICBjb25zdCBpY29uID0gRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IGBpY29uICR7aWNvbkNsYXNzfSBkaXNwbGF5LWktYmAgfSk7XG4gIHJldHVybiBpY29uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDYXJvdXNlbE5hdkluZGljYXRvciBmcm9tIFwiLi9DYXJvdXNlbE5hdkluZGljYXRvclwiO1xuaW1wb3J0IENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyIGZyb20gXCIuL0Nhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsTmF2ID0gKGltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLW5hdiBwdC0xYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW1xuICAgICAgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIoKSxcbiAgICAgIC8vIE5hdiBpbmRpY2F0b3JzXG4gICAgICAuLi5pbWFnZURhdGEubWFwKChvYmosIGluZGV4KSA9PlxuICAgICAgICBDYXJvdXNlbE5hdkluZGljYXRvcih7XG4gICAgICAgICAgaW1hZ2VJZDogb2JqLnV1aWQsXG4gICAgICAgICAgc3RhcnRzQWN0aXZlOiBvYmouaXNBY3RpdmUgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbE5hdjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsTmF2IH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbE5hdkluZGljYXRvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGltYWdlSWQsIHN0YXJ0c0FjdGl2ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBCdXR0b24oXG4gICAge1xuICAgICAgaWQ6IGBjYXJvdXNlbC1uYXYtJHtpbWFnZUlkfWAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1pbmRpY2F0b3IgZGlzcGxheS1pLWIgYmctZ3JheS1saWdodC02ICR7XG4gICAgICAgIHN0YXJ0c0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICB9YCxcbiAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xpY2tDYXJvdXNlbE5hdihpbWFnZUlkKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbE5hdkluZGljYXRvcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyBQbGF5QnV0dG9uLCBQYXVzZUJ1dHRvbiB9IGZyb20gXCIuL3BsYXlBbmRQYXVzZUJ1dHRvbnNcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgLy9cblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1wbGF5LXBhdXNlLWNvbnRhaW5lclwiLFxuICAgIH0sXG4gICAgLy8gY2hpbGRlcm5cbiAgICBbUGF1c2VCdXR0b24sIFBsYXlCdXR0b25dXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbWcgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFNsaWRlID0gKGltYWdlU291cmNlLCBpZCwgc3RhcnRzQWN0aXZlKSA9PiB7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBjYXJvdXNlbC1zbGlkZS1gICsgaWQsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1zbGlkZSAke3N0YXJ0c0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifWAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIEltZyh7XG4gICAgICAgIHNyYzogaW1hZ2VTb3VyY2UsXG4gICAgICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1pbWFnZVwiLFxuICAgICAgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsU2xpZGU7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgVWwgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ2Fyb3VzZWxTbGlkZSBmcm9tIFwiLi9DYXJvdXNlbFNsaWRlXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFRyYWNrID0gKGltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gVWwoXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtdHJhY2tgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICAuLi5pbWFnZURhdGEubWFwKChvYmosIGluZGV4KSA9PlxuICAgICAgICBDYXJvdXNlbFNsaWRlKG9iai5zcmMsIG9iai51dWlkLCBvYmouaXNBY3RpdmUgPyB0cnVlIDogZmFsc2UpXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFRyYWNrO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBDYXJvdXNlbFRyYWNrIGZyb20gXCIuL0Nhcm91c2VsVHJhY2tcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IENhcm91c2VsVHJhY2tDb250YWluZXIgPSAoaW1hZ2VEYXRhKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC10cmFjay1jb250YWluZXJgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbQ2Fyb3VzZWxUcmFjayhpbWFnZURhdGEpXVxuICApO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgTGVmdENhcm91c2VsQnV0dG9uIGZyb20gXCIuL0xlZnRCdXR0b25cIjtcbmltcG9ydCBSaWdodENhcm91c2VsQnV0dG9uIGZyb20gXCIuL1JpZ2h0QnV0dG9uXCI7XG5pbXBvcnQgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lciBmcm9tIFwiLi9DYXJvdXNlbFRyYWNrQ29udGFpbmVyXCI7XG5pbXBvcnQgQ2Fyb3VzZWxOYXYgZnJvbSBcIi4vQ2Fyb3VzZWxOYXZcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IGltYWdlRGF0YSB9IGZyb20gXCIuL2RhdGEvaW1hZ2VMb2FkZXJcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VsID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsIHB0LTEgcGItMWAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIExlZnRDYXJvdXNlbEJ1dHRvbigpLFxuICAgICAgQ2Fyb3VzZWxUcmFja0NvbnRhaW5lcihpbWFnZURhdGEpLFxuICAgICAgUmlnaHRDYXJvdXNlbEJ1dHRvbigpLFxuICAgICAgQ2Fyb3VzZWxOYXYoaW1hZ2VEYXRhKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjYXJvdXNlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxMZWZ0IH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBMZWZ0Q2Fyb3VzZWxCdXR0b24gPSAoc2hhcmVkQ2xhc3NlcykgPT4ge1xuICBjb25zdCBidXR0b24gPSBCdXR0b24oXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtYnV0dG9uIGxlZnQgYCArIHNoYXJlZENsYXNzZXMsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICBjbGlja0Nhcm91c2VsTGVmdCgpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW0ljb24oXCJpY29uLXVwLWFycm93IHJvdGF0ZS0yNzAgXCIpXVxuICApO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVmdENhcm91c2VsQnV0dG9uO1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxSaWdodCB9IGZyb20gXCIuL3VpL2Nhcm91c2VsLXVpXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgUmlnaHRDYXJvdXNlbEJ1dHRvbiA9IChzaGFyZWRDbGFzc2VzKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IEJ1dHRvbihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1idXR0b24gcmlnaHQgYCArIHNoYXJlZENsYXNzZXMsXG4gICAgICBvbmNsaWNrKCkge1xuICAgICAgICBjbGlja0Nhcm91c2VsUmlnaHQoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtJY29uKFwiaWNvbi11cC1hcnJvdyByb3RhdGUtOTBcIildXG4gICk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodENhcm91c2VsQnV0dG9uO1xuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuLy8gSW1hZ2Ugc291cmNlc1xuaW1wb3J0IEJyaWNrIGZyb20gXCIuLi9hc3NldHMvYnJpY2sucG5nXCI7XG5pbXBvcnQgUGFpbnRGYWNlIGZyb20gXCIuLi9hc3NldHMvcGFpbnQtZmFjZS5wbmdcIjtcbmltcG9ydCBNYWMgZnJvbSBcIi4uL2Fzc2V0cy9tYWMucG5nXCI7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4uL2Fzc2V0cy9jb21wdXRlci5wbmdcIjtcbmltcG9ydCBXZWJEZXYgZnJvbSBcIi4uLy9hc3NldHMvd2ViZGV2LnBuZ1wiO1xuXG4vLyBhZGQgaXNBY3RpdmU6IHRydWUgdG8gdGhlIHNsaWRlIHlvdSB3YW50IHRvIHN0YXJ0IGFzIGFjdGl2ZVxuY29uc3QgaW1hZ2VTb3VyY2VzID0gW1xuICB7IHNyYzogQnJpY2ssIGlzQWN0aXZlOiB0cnVlIH0sXG4gIHsgc3JjOiBQYWludEZhY2UgfSxcbiAgeyBzcmM6IE1hYyB9LFxuICB7IHNyYzogQ29tcHV0ZXIgfSxcbiAgeyBzcmM6IFdlYkRldiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGltYWdlRGF0YSA9IGltYWdlU291cmNlcy5tYXAoKG9iaikgPT4gKHtcbiAgLi4ub2JqLFxuICB1dWlkOiB1dWlkdjQoKSxcbn0pKTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSwgY2xpY2tDYXJvdXNlbFBhdXNlIH0gZnJvbSBcIi4vdWkvY2Fyb3VzZWwtdWlcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXlCdXR0b24gPSBCdXR0b24oXG4gIHtcbiAgICBjbGFzc05hbWU6IFwicGxheS1idXR0b24gdmlzaWJsZVwiLFxuICAgIG9uY2xpY2soKSB7XG4gICAgICBjbGlja0Nhcm91c2VsUGxheSgpO1xuICAgIH0sXG4gIH0sXG4gIFtJY29uKFwiaWNvbi10cmlhbmdsZSByb3RhdGUtOTAgZm9udC1zbSB0ZXh0LWdyYXktZGFyay00XCIpXVxuKTtcblxuZXhwb3J0IGNvbnN0IFBhdXNlQnV0dG9uID0gQnV0dG9uKFxuICB7XG4gICAgY2xhc3NOYW1lOiBcInBhdXNlLWJ1dHRvblwiLFxuICAgIG9uY2xpY2soKSB7XG4gICAgICBjbGlja0Nhcm91c2VsUGF1c2UoKTtcbiAgICB9LFxuICB9LFxuICBbSWNvbihcImljb24tcGF1c2UgZm9udC1zbSB0ZXh0LWdyYXktZGFyay00XCIpXVxuKTtcbiIsIi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFVUSUxJVElFUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVzKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtdHJhY2tcIikuY2hpbGROb2Rlc107XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsU2xpZGVJZHMoKSB7XG4gIHJldHVybiBnZXRBbGxDYXJvdXNlbFNsaWRlcygpLm1hcCgoZWxlbSkgPT4gZWxlbS5pZCk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpIHtcbiAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsLWluZGljYXRvclwiKV07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZUluZGV4KCkge1xuICBjb25zdCBhbGxTbGlkZUlkcyA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKTtcbiAgY29uc3QgY3VycmVudFNsaWRlSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsLXNsaWRlLmFjdGl2ZVwiKS5pZDtcbiAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBhbGxTbGlkZUlkcy5pbmRleE9mKGN1cnJlbnRTbGlkZUlkKTtcblxuICByZXR1cm4gY3VycmVudFNsaWRlSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2xpZGVJbmRleCgpIHtcbiAgbGV0IHByZXZpb3VzU2xpZGVJbmRleCA9IGdldEN1cnJlbnRTbGlkZUluZGV4KCkgLSAxO1xuXG4gIC8vIGlmIHRoZSBjYWxjdWxhdGVkIGluZGV4IGlzIG91dHNpZGUgdGhlIGxpc3QsIHNldCBpdCB0byB0aGUgaW5kZXggb2YgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgcHJldmlvdXNTbGlkZUluZGV4IDwgMFxuICAgICAgPyBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMVxuICAgICAgOiBwcmV2aW91c1NsaWRlSW5kZXg7XG5cbiAgcmV0dXJuIGNvcnJlY3RlZEluZGV4O1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2xpZGVJbmRleCgpIHtcbiAgbGV0IG5leHRTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSArIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdFxuICBjb25zdCBjb3JyZWN0ZWRJbmRleCA9XG4gICAgbmV4dFNsaWRlSW5kZXggPiBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKCkubGVuZ3RoIC0gMSA/IDAgOiBuZXh0U2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlXG5leHBvcnQgZnVuY3Rpb24gZ290b1NwZWNpZmljU2xpZGUoaWQpIHtcbiAgY29uc3QgYWxsTmF2QnV0dG9ucyA9IGdldEFsbENhcm91c2VsTmF2QnV0dG9ucygpO1xuICBjb25zdCBzZWxlY3RlZE5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1uYXYtJHtpZH1gKTtcbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJvdXNlbC1zbGlkZS0ke2lkfWApO1xuICBjb25zdCBhbGxTbGlkZXMgPSBnZXRBbGxDYXJvdXNlbFNsaWRlcygpO1xuXG4gIGFsbFNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIHNlbGVjdGVkU2xpZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBhbGxOYXZCdXR0b25zLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWROYXZCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFVkVOVCBIQU5ETEVSUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBtb3ZlIHRvIHRoZSBzZWxlY3RlZCBzbGlkZSB3aGVuIGNsaWNraW5nIG9uIHRoZSBhc3NvY2lhdGVkIG5hdiBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsTmF2KGlkKSB7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSByaWdodCB3aGVuIGNsaWNraW5nIG9uIHRoZSByaWdodCBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUmlnaHQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldE5leHRTbGlkZUluZGV4KCldLnJlcGxhY2UoXG4gICAgXCJjYXJvdXNlbC1zbGlkZS1cIixcbiAgICBcIlwiXG4gICk7XG4gIGdvdG9TcGVjaWZpY1NsaWRlKGlkKTtcbn1cblxuLy8gbW92ZSBsZWZ0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxMZWZ0KCkge1xuICBjb25zdCBpZCA9IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKVtnZXRQcmV2aW91c1NsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGFseVBhdXNlKCkge1xuICBjb25zdCBjYXJvdXNlbEF1dG9BZHZhbmNlID0gZ2V0Q2Fyb3VzZWxBdXRvQWR2YW5jZSgpO1xuICBzZXRDYXJvdXNlbEF1dG9BZHZhbmNlKCFjYXJvdXNlbEF1dG9BZHZhbmNlKTtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEFVVE8gUFJPR1JFU1NJT04gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbFBsYXkoKSB7XG4gIGhhbmRsZUF1dG9BZHZhbmNlKFwicGxheVwiKTtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBsYXktYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGF1c2UtYnV0dG9uXCIpO1xuICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cbmNsaWNrQ2Fyb3VzZWxQbGF5O1xuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxQYXVzZSgpIHtcbiAgaGFuZGxlQXV0b0FkdmFuY2UoXCJwYXVzZVwiKTtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBsYXktYnV0dG9uXCIpO1xuICBwbGF5QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAucGF1c2UtYnV0dG9uXCIpO1xuICBwYXVzZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn1cblxubGV0IGludGVydmFsO1xuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSBvciBjYW5jZWwgdGhlIGF1dG8gYWR2YW5jZSB0aW1lclxuICogeW91IHdpbGwgbmVldCB0byBkZWNsYXJlIGludGVydmFsIChsZXQgaW50ZXJ2YWwpIGJlZm9yZVxuICogdGhpcyBmdW5jdGlvbiB0byBhbGxvdyB0aGUgaW50ZXJ2YWwgdG8gYmUgY3JlYXRlZCAvIHJlZmVuZW5jZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIGEgc3RyaW5nIGNvbnRhaW5pbmcgJ3BsYXknIG9yICdwYXVzZScgdG8gaW5kaWNhdGUgdGhlIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUF1dG9BZHZhbmNlKG1vZGUpIHtcbiAgY29uc3QgcGxheWluZyA9IG1vZGUgPT09IFwicGxheVwiID8gdHJ1ZSA6IGZhbHNlO1xuICBpZiAocGxheWluZykge1xuICAgIC8vIHN0YXJ0IGFuIGludGVydmFsIHRpbWVyIGFuZCBjYXB0dXJlIGl0cyByZWZlcmVuY2VcbiAgICBpbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjbGlja0Nhcm91c2VsUmlnaHQsIDUwMDApO1xuICB9IGVsc2Uge1xuICAgIC8vIGNhbmNlbCB0aGUgcmVmZXJlbmNlIHlvdSBjYXB0dXJlZFxuICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZG9tIGVsZW1lbnQgd2l0aCBpdHMgaW5pdGlhbCBhdHRyaWJ1dGVzIGFuZCBjaGlsZCBlbGVtZW50cyBkZWZpbmVkIGJ5IGEgcGFzc2VkLWluIG9iamVjdCBhbmQgYXJyYXkgb2YgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlU3RyIHRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSByZXR1cm5lZCB5b3Ugd291bGQgdXNlIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzT2JqIChvcHRpb25hbCkgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvIGhhdmVcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkQXJyIChvcHRpb25hbCkgYW4gb2YgZWxlbWVudCBvYmplY3RzIHRvIGJlIGFwcGVuZGVkIGFzIGNoaWxkcmVuIHRvIHRoaXMgZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjcmVhdGVkIGluIG1lbW9yeVxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudCA9ICh0eXBlU3RyLCBwcm9wc09iaiwgY2hpbGRBcnIgPSBudWxsKSA9PiB7XG4gIC8vIFNvbWUgYXR0cmlidXRlcyBjYW4gb25seSBiZSBzZXQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlKCkgbWV0aG9kLlxuICAvLyBJZiBpdCBpcyBpbiB0aGUgcHJvcHNPYmogT2JqZWN0LmFzc2lnbiB3aWxsIGZhaWwuIFdlJ2xsIHJlbW92ZSBpdCBmcm9tIHRoZVxuICAvLyBwcm9wcyBvYmplY3QgaGVyZSBhbmQgYXNzaWduIHRoZW0gdG8gdGhlIHBhcmVudCBlbGVtZW50IGJlZm9yZSBpdCBpcyByZXR1cm5lZC5cbiAgLy8gVGhlc2UgYXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHNldEF0dHJpYnV0ZVByb3BlcnRpZXMgbGlzdCBmb3IgcHJvY2Vzc2luZy5cbiAgbGV0IHNldEF0dHJpYnV0ZVByb3BlcnRpZXMgPSBbXCJsaXN0XCJdO1xuICBsZXQgcHJvcGVydGllcyA9IFtdO1xuICBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgaWYgKHByb3BlcnR5IGluIHByb3BzT2JqKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7IG5hbWU6IHByb3BlcnR5LCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICBkZWxldGUgcHJvcHNPYmpbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIGFuIGVsZW1lbnQgYmFzZWQgb24gdGhlIHR5cGUgc3RyaW5nIHByb3ZpZGVkXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZVN0ciksXG4gICAgcHJvcHNPYmpcbiAgKTtcblxuICAvLyBBZGQgcGFzc2VkIGluIGNoaWxkIHRvIGFycmF5IGlmIGl0IGlzIG5vdCBhbHJlYWR5XG4gIGlmIChjaGlsZEFyciAmJiAhQXJyYXkuaXNBcnJheShjaGlsZEFycikpIHtcbiAgICBjaGlsZEFyciA9IFtjaGlsZEFycl07XG4gIH1cblxuICAvLyBBcHBlbmQgY2hpbGRyZW4gdG8gdGhlIGVsZW1lbnRcbiAgaWYgKGNoaWxkQXJyKSB7XG4gICAgY2hpbGRBcnIuZm9yRWFjaCgoY2hpbGQpID0+IHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgfVxuXG4gIC8vIEFwcGx5IHByb3BlcnRpZXMgd2l0aCBzZXRBdHRyaWJ1dGUgaWYgbmVlZGVkXG4gIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIHBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5Lm5hbWUsIHByb3BlcnR5LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuLy8gIENPTU1PTiBFTEVNRU5UU1xuZXhwb3J0IGNvbnN0IEEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFydGljbGVcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYm9keVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYnV0dG9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEJyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERpdiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJkaXZcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRGF0YWxpc3QgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGF0YWxpc3RcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRmllbGRzZXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZmllbGRzZXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvb3RlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZvcm1cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDEgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSDMgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaDNcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImhlYWRlclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBIciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW1nID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImltZ1wiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbnB1dFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsYWJlbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMZWdlbmQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGVnZW5kXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IExpID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibWFpblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBPbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJvbFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBPcHRpb24gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib3B0aW9uXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFAgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwicFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3QgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic2VsZWN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFN0cm9uZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzdHJvbmdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJzcGFuXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInRleHRhcmVhXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFVsID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInVsXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcbiIsImV4cG9ydCBjb25zdCBnaXRodWJJbmZvID0ge1xuICByZXBvTmFtZTogXCJib2lsZXJwbGF0ZS13ZWJwYWNrXCIsXG59O1xuIiwiaW1wb3J0IHsgYXBwbHlXaW5kb3dMaXN0ZW5lcnMgfSBmcm9tIFwiLi91aS13aW5kb3dcIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxQbGF5IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvdWkvY2Fyb3VzZWwtdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SW5pdGlhbFN0YXRlKCkge1xuICBhcHBseVdpbmRvd0xpc3RlbmVycygpO1xuICBjbGlja0Nhcm91c2VsUGxheSgpO1xufVxuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgYnJlYWtQb2ludHMgPSB7XG4gIHhzOiAwLFxuICBzbTogNDgwLFxuICBtZDogNzIwLFxuICBsZzogOTYwLFxuICB4bDogMTIwMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVdpbmRvd0xpc3RlbmVycygpIHtcbiAgd2luZG93Lm9ucmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKGUpIHtcbiAgICAvL1xuICB9KTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVBbmRBZGRFbGxpcHNlID0gKHN0cmluZywgbnVtQ2hhcnNUb0tlZXApID0+IHtcbiAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBudW1DaGFyc1RvS2VlcCkudHJpbUVuZCgpICsgXCIuLi5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBzZXR1cCBhIHRpbWVyXG4gIGxldCB0aW1lb3V0O1xuXG4gIC8vIHJldHVybiBhIGZ1bmN0aW9uIHRvIHJ1biBkZWJvdW5jZWRcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvL3NldHVwIGFyZ3NcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIC8vIGlmIHRoZXJlIGlzIGEgdGltZXIgY2FuY2VsIGl0XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBzZXR1cCB0aGUgbmV3IHJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG4gICAgdGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgaWYgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RDb250ZW50QXJyKG51bUNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheShudW1DaGlsZHJlbilcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKGVsZW0pID0+XG4gICAgICBFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWIgbWItMVwiLFxuICAgICAgICBpbm5lclRleHQ6XG4gICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvciwgdWxsYW0gYWQsIG1heGltZSBlbmltIHNlcXVpIHN1bnQgcXVvIGZhY2lsaXMgaWxsbyBldmVuaWV0IGxhdWRhbnRpdW0gcXVhZSByZXBlbGxlbmR1cyBkb2xvcnVtIG9tbmlzIG1pbmltYSBkdWNpbXVzIGFyY2hpdGVjdG8hIEJlYXRhZSwgdmVsIGFzc3VtZW5kYS5cIixcbiAgICAgIH0pXG4gICAgKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50XCI7XG5pbXBvcnQgeyBhcHBseUluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3BhZ2UtbG9naWMvdWkvdWktaW5pdGlhbC1zdGF0ZVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbmFwcGx5SW5pdGlhbFN0YXRlKCk7XG5cbi8vIGRlYnVnZ2luZ1xuY29uc3QgZGVidWdnaW5nID0gdHJ1ZTtcbmlmIChkZWJ1Z2dpbmcpIHtcbiAgLy9cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiSGVhZGVyIiwiRHluYW1pY0Zvb3RlciIsIk1haW5TZWN0aW9uIiwiQ29udGVudCIsImNvbnRlbnQiLCJpZCIsIkEiLCJEaXYiLCJJY29uIiwiZ2l0aHViSW5mbyIsImR5bmFtaWNZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQ29weXJpZ2h0Q29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVyVGV4dCIsImhyZWYiLCJyZXBvTmFtZSIsIkZvb3RlciIsIkF0dHJpYnV0aW9uc0NvbnRhaW5lciIsIlRPUENvbnRhaW5lciIsIkV4cGFuZGFibGVQYW5lbCIsIk5vbkV4cGFuZGFibGVQYW5lbCIsIkljb25zRXhwbGFuYXRpb24iLCJjb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwicGFyZW50Q29udGFpbmVyIiwiaDEiLCJvdGhlckNsYXNzZXMiLCJoZWFkZXIiLCJnZW5lcmF0ZVRlc3RDb250ZW50QXJyIiwiQ3VzdG9tSWNvbnNEaXNwbGF5IiwiSW1hZ2VDYXJvdXNlbCIsIk1haW4iLCJtYWluIiwiRXhwYW5kYWJsZVBhbmVsVGl0bGUiLCJFeHBhbmRhYmxlUGFuZWxDb250ZW50IiwidjQiLCJ1dWlkdjQiLCJwcm9wcyIsImNvbXBvbmVudElkIiwicGFuZWwiLCJCdXR0b24iLCJ0b2dnbGVFeHBhbnNpb24iLCJleHBhbnNpb25Db250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZUV4cGFuc2lvbkJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJpY29uQ2xhc3MiLCJpY29uIiwiQ2Fyb3VzZWxOYXZJbmRpY2F0b3IiLCJDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciIsIkNhcm91c2VsTmF2IiwiaW1hZ2VEYXRhIiwibWFwIiwib2JqIiwiaW5kZXgiLCJpbWFnZUlkIiwidXVpZCIsInN0YXJ0c0FjdGl2ZSIsImlzQWN0aXZlIiwiY2xpY2tDYXJvdXNlbE5hdiIsIlBsYXlCdXR0b24iLCJQYXVzZUJ1dHRvbiIsIkltZyIsIkNhcm91c2VsU2xpZGUiLCJpbWFnZVNvdXJjZSIsInNyYyIsIlVsIiwiQ2Fyb3VzZWxUcmFjayIsIkNhcm91c2VsVHJhY2tDb250YWluZXIiLCJMZWZ0Q2Fyb3VzZWxCdXR0b24iLCJSaWdodENhcm91c2VsQnV0dG9uIiwiY2Fyb3VzZWwiLCJjbGlja0Nhcm91c2VsTGVmdCIsInNoYXJlZENsYXNzZXMiLCJidXR0b24iLCJjbGlja0Nhcm91c2VsUmlnaHQiLCJCcmljayIsIlBhaW50RmFjZSIsIk1hYyIsIkNvbXB1dGVyIiwiV2ViRGV2IiwiaW1hZ2VTb3VyY2VzIiwiY2xpY2tDYXJvdXNlbFBsYXkiLCJjbGlja0Nhcm91c2VsUGF1c2UiLCJnZXRBbGxDYXJvdXNlbFNsaWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZE5vZGVzIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcyIsImVsZW0iLCJnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Q3VycmVudFNsaWRlSW5kZXgiLCJhbGxTbGlkZUlkcyIsImN1cnJlbnRTbGlkZUlkIiwiY3VycmVudFNsaWRlSW5kZXgiLCJpbmRleE9mIiwiZ2V0UHJldmlvdXNTbGlkZUluZGV4IiwicHJldmlvdXNTbGlkZUluZGV4IiwiY29ycmVjdGVkSW5kZXgiLCJsZW5ndGgiLCJnZXROZXh0U2xpZGVJbmRleCIsIm5leHRTbGlkZUluZGV4IiwiZ290b1NwZWNpZmljU2xpZGUiLCJhbGxOYXZCdXR0b25zIiwic2VsZWN0ZWROYXZCdXR0b24iLCJzZWxlY3RlZFNsaWRlIiwiYWxsU2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlIiwicmVtb3ZlIiwiYWRkIiwicmVwbGFjZSIsInRvZ2dsZVBhbHlQYXVzZSIsImNhcm91c2VsQXV0b0FkdmFuY2UiLCJnZXRDYXJvdXNlbEF1dG9BZHZhbmNlIiwic2V0Q2Fyb3VzZWxBdXRvQWR2YW5jZSIsImhhbmRsZUF1dG9BZHZhbmNlIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwiaW50ZXJ2YWwiLCJtb2RlIiwicGxheWluZyIsIndpbmRvdyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInR5cGVTdHIiLCJwcm9wc09iaiIsImNoaWxkQXJyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwic2V0QXR0cmlidXRlUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHVzaCIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsIkFydGljbGUiLCJCIiwiQm9keSIsIkJyIiwiRGF0YWxpc3QiLCJGaWVsZHNldCIsIkZvcm0iLCJIMSIsIkgyIiwiSDMiLCJIciIsIkkiLCJJbnB1dCIsIkxhYmVsIiwiTGVnZW5kIiwiTGkiLCJPbCIsIk9wdGlvbiIsIlAiLCJTZWxlY3QiLCJTdHJvbmciLCJTcGFuIiwiVGV4dGFyZWEiLCJhcHBseVdpbmRvd0xpc3RlbmVycyIsImFwcGx5SW5pdGlhbFN0YXRlIiwiZGVib3VuY2UiLCJicmVha1BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJvbnJlc2l6ZSIsImUiLCJ0cnVuY2F0ZUFuZEFkZEVsbGlwc2UiLCJzdHJpbmciLCJudW1DaGFyc1RvS2VlcCIsInNsaWNlIiwidHJpbUVuZCIsImZuIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhcHBseSIsImNhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibnVtQ2hpbGRyZW4iLCJmaWxsIiwiYm9keSIsImRlYnVnZ2luZyJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFFbEUsTUFBTThOLEVBQUUsR0FBR0EsQ0FBQzdNLEtBQUssRUFBRWpCLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTTNCLE1BQU0sR0FBR0EsQ0FBQzRDLEtBQUssRUFBRWpCLFFBQVEsS0FDcEM1QixPQUFPLENBQUMsUUFBUSxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFdEUsTUFBTStOLEVBQUUsR0FBR0EsQ0FBQzlNLEtBQUssRUFBRWpCLFFBQVEsS0FDaEM1QixPQUFPLENBQUMsSUFBSSxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbEUsTUFBTWdPLENBQUMsR0FBR0EsQ0FBQy9NLEtBQUssRUFBRWpCLFFBQVEsS0FDL0I1QixPQUFPLENBQUMsR0FBRyxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFakUsTUFBTTZDLEdBQUcsR0FBR0EsQ0FBQzVCLEtBQUssRUFBRWpCLFFBQVEsS0FDakM1QixPQUFPLENBQUMsS0FBSyxFQUFFNkMsS0FBSyxHQUFHO0VBQUUsR0FBR0E7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixRQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFbkUsTUFB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RUEsaUVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJjOztBQUUvQjtBQUNBLHFDQUFxQyxpREFBSztBQUMxQzs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNOdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ3NCO0FBQ2tCO0FBRXJFdEMsUUFBUSxDQUFDOE8sSUFBSSxDQUFDaEQsV0FBVyxDQUFDN08sdUVBQU8sQ0FBQyxDQUFDLENBQUM7QUFFcENnUSxrRkFBaUIsQ0FBQyxDQUFDOztBQUVuQjtBQUNBLE1BQU04QixTQUFTLEdBQUcsSUFBSTtBQUN0QixJQUFJQSxTQUFTLEVBQUU7RUFDYjtBQUFBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvQ29weXJpZ2h0Q29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9TaXRlQXR0cmlidXRpb25zL0F0dHJpYnV0aW9uc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0R5bmFtaWNGb290ZXIvU2l0ZUF0dHJpYnV0aW9ucy9JY29uc0V4cGxhbmF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRHluYW1pY0Zvb3Rlci9UT1BMaW5rQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL01haW5TZWN0aW9uL01haW5TZWN0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0N1c3RvbUljb25zRGlzcGxheS9DdXN0b21JY29uc0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9FeHBhbmRhYmxlUGFuZWwvRXhwYW5kYWJsZVBhbmVsVGl0bGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL05vbkV4cGFuZGFibGVQYW5lbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JY29uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxOYXYuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbE5hdkluZGljYXRvci5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvQ2Fyb3VzZWxTbGlkZS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0Nhcm91c2VsVHJhY2suanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9DYXJvdXNlbFRyYWNrQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0xlZnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9SaWdodEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL2RhdGEvaW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbC9wbGF5QW5kUGF1c2VCdXR0b25zLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvdWkvY2Fyb3VzZWwtdWkuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9Db3VudHJ5SW5wdXQvQ291bnRyeUlucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vQ291bnRyeUlucHV0L2NvdW50cmllc0xpc3QuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9Db3VudHJ5SW5wdXQvY291bnRyeS1pbnB1dC12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vRW1haWxJbnB1dC9FbWFpbElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vRW1haWxJbnB1dC9lbWFpbC1pbnB1dC12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vSW5wdXQvWmlwQ29kZUlucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vSW5wdXQvemlwLWNvZGUtaW5wdXQtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1Bhc3N3b3JkSW5wdXRzL0NvbmZpcm1QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vUGFzc3dvcmRJbnB1dHMvUGFzc3dvcmRJbnB1dC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL1Bhc3N3b3JkSW5wdXRzL3Bhc3N3b3Jkcy12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vU3VibWl0QnV0dG9uLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvX2N1c3RvbS1jb21wb25lbnRzL1ZhbGlkYXRlZEZvcm0vVmFsaWRhdGVkRm9ybS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9WYWxpZGF0ZWRGb3JtL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL19lbGVtZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvcGFnZS1sb2dpYy91aS91aS13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgRHluYW1pY0Zvb3RlciBmcm9tIFwiLi4vRHluYW1pY0Zvb3Rlci9EeW5hbWljRm9vdGVyXCI7XG5pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSBcIi4uL01haW5TZWN0aW9uL01haW5TZWN0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gRWxlbWVudChcImRpdlwiLCB7IGlkOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgSGVhZGVyKCksXG4gICAgTWFpblNlY3Rpb24oKSxcbiAgICBEeW5hbWljRm9vdGVyKCksXG4gIF0pO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vX2N1c3RvbS1jb21wb25lbnRzL0ljb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuaW1wb3J0IHsgZ2l0aHViSW5mbyB9IGZyb20gXCIuLi8uLi9wYWdlLWxvZ2ljL2RhdGEvZGF0YS1wYWdlLWNvbmZpZ1wiO1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuLy8gVEVNUExBVEUgVkFSSUFCTEVTXG5jb25zdCBkeW5hbWljWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuY29uc3QgQ29weXJpZ2h0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgY2xhc3NOYW1lOiBgY29weXJpZ2h0LWNvbnRhaW5lcmAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRGl2KHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1pbmZvIGRpc3BsYXktaS1iXCIsXG4gICAgICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke2R5bmFtaWNZZWFyfWAsXG4gICAgICB9KSxcbiAgICAgIEEoeyBocmVmOiBgaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC8ke2dpdGh1YkluZm8ucmVwb05hbWV9YCB9LCBbXG4gICAgICAgIEljb24oXCJpY29uLWdpdGh1Yi1jYXRcIiksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgRm9vdGVyIH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENvcHlyaWdodENvbnRhaW5lciBmcm9tIFwiLi9Db3B5cmlnaHRDb250YWluZXJcIjtcbmltcG9ydCBBdHRyaWJ1dGlvbnNDb250YWluZXIgZnJvbSBcIi4vU2l0ZUF0dHJpYnV0aW9ucy9BdHRyaWJ1dGlvbnNDb250YWluZXJcIjtcbmltcG9ydCBUT1BDb250YWluZXIgZnJvbSBcIi4vVE9QTGlua0NvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRHluYW1pY0Zvb3RlciA9ICgpID0+IHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBcbiAgRm9vdGVyKFxuICAgIHsgXG4gICAgICBpZDogYGZvb3RlcmAsIFxuICAgICAgY2xhc3NOYW1lOiBgYmctZ3JheS1kYXJrLTMgdGV4dC13aGl0ZWAgXG4gICAgfSxcbiAgICBbXG4gICAgIENvcHlyaWdodENvbnRhaW5lcigpLCBcbiAgICAgVE9QQ29udGFpbmVyKCksIFxuICAgICBBdHRyaWJ1dGlvbnNDb250YWluZXIoKVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGb290ZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvSWNvblwiO1xuXG5pbXBvcnQgRXhwYW5kYWJsZVBhbmVsIGZyb20gXCIuLi8uLi9fY3VzdG9tLWNvbXBvbmVudHMvRXhwYW5kYWJsZVBhbmVsL0V4cGFuZGFibGVQYW5lbFwiO1xuaW1wb3J0IE5vbkV4cGFuZGFibGVQYW5lbCBmcm9tIFwiLi4vLi4vX2N1c3RvbS1jb21wb25lbnRzL0V4cGFuZGFibGVQYW5lbC9Ob25FeHBhbmRhYmxlUGFuZWxcIjtcblxuaW1wb3J0IEljb25zRXhwbGFuYXRpb24gZnJvbSBcIi4vSWNvbnNFeHBsYW5hdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQXR0cmlidXRpb25zQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IGBhdHRyaWJ1dGlvbnMtY29udGFpbmVyYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWwoe1xuICAgICAgICB0aXRsZTogXCJTaXRlIEF0dHJpYnV0aW9uc1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICB0aXRsZTogXCJJY29uc1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgTm9uRXhwYW5kYWJsZVBhbmVsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHaXRodWJcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dvc1wiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbSWNvbihcImljb24tZ2l0aHViLWNhdFwiKV0sXG4gICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgIEV4cGFuZGFibGVQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIG90aGVyIEljb25zXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtJY29uc0V4cGxhbmF0aW9uKCldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbnNDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbnNFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogYGljb25zLWV4cGxhbmF0aW9uYCwgaW5uZXJIVE1MOiBgYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBpbm5lckhUTUw6IGBBbGwgb3RoZXIgaWNvbnMgd2VyZSBjcmVhdGVkIGJ5IG1lIHVzaW5nICR7XG4gICAgICAgICAgQSh7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vaW5rc2NhcGUub3JnL1wiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIklua3NjYXBlXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH0gYW5kIGNvbnZlcnRpbmcgdGhlbSB0byBhIGZvbnQgd2l0aCAke1xuICAgICAgICAgIEEoe1xuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2ljb21vb24uaW8vXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiSWNvTW9vblwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uc0V4cGxhbmF0aW9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEsIERpdiB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFRPUENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gRGl2KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYHRvcC1jb250YWluZXJgLFxuICAgICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIEJ5OlwiLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEEoe1xuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgICB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUT1BDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaDEgPSBFbGVtZW50KFwiaDFcIiwgeyBpbm5lclRleHQ6IFwiVGhpcyBpcyB0aGUgaGVhZGVyXCIgfSk7XG5cbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJiZy1ncmF5LWRhcmstMyB0ZXh0LXdoaXRlIHAtMlwiO1xuICBjb25zdCBoZWFkZXIgPSBFbGVtZW50KFxuICAgIFwiaGVhZGVyXCIsXG4gICAge1xuICAgICAgaWQ6IFwiaGVhZGVyXCIsXG4gICAgICBjbGFzc05hbWU6IFwiaGVhZGVyXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIFtoMV1cbiAgKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBnZW5lcmF0ZVRlc3RDb250ZW50QXJyIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgQ3VzdG9tSWNvbnNEaXNwbGF5IGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvQ3VzdG9tSWNvbnNEaXNwbGF5L0N1c3RvbUljb25zRGlzcGxheVwiO1xuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSBcIi4uL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWxcIjtcbmltcG9ydCBWYWxpZGF0ZWRGb3JtIGZyb20gXCIuLi9fY3VzdG9tLWNvbXBvbmVudHMvVmFsaWRhdGVkRm9ybS9WYWxpZGF0ZWRGb3JtXCI7XG5pbXBvcnQgeyBNYWluLCBEaXYgfSBmcm9tIFwiLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBNYWluU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgbWFpbiA9IE1haW4oXG4gICAge1xuICAgICAgaWQ6IFwibWFpbi1zZWN0aW9uXCIsXG4gICAgICBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyxcbiAgICB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiaWNvbnMtcm93XCIgfSwgW0N1c3RvbUljb25zRGlzcGxheSgpXSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtcm93XCIgfSwgW0ltYWdlQ2Fyb3VzZWwoKV0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImZvcm0tcm93XCIgfSwgW1ZhbGlkYXRlZEZvcm0oKV0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU2VjdGlvbjtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ3VzdG9tSWNvbnNEaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHsgaW5uZXJUZXh0OiBgYCwgY2xhc3NOYW1lOiBgY3VzdG9tLWljb25zLWRpc3BsYXlgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIEljb24oXCJpY29uLWhhbWJ1cmdlci1tZW51XCIpLFxuICAgICAgSWNvbihcImljb24tcGF1c2VcIiksXG4gICAgICBJY29uKFwiaWNvbi1wZW5jaWxcIiksXG4gICAgICBJY29uKFwiaWNvbi1wbHVzLXNpZ25cIiksXG4gICAgICBJY29uKFwiaWNvbi1wbHVzLXNpZ24gcm90YXRlLTQ1XCIpLFxuICAgICAgSWNvbihcImljb24tdHJhc2hcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZVwiKSxcbiAgICAgIEljb24oXCJpY29uLXRyaWFuZ2xlIHJvdGF0ZS0xODBcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZS1zaG9ydCByb3RhdGUtOTBcIiksXG4gICAgICBJY29uKFwiaWNvbi10cmlhbmdsZS1zaG9ydFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWFycm93XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3cgcm90YXRlLTE4MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWFycm93LXNob3J0XCIpLFxuICAgICAgSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnQgcm90YXRlLTI3MFwiKSxcbiAgICAgIEljb24oXCJpY29uLXVwLWRvd25cIiksXG4gICAgICBJY29uKFwiaWNvbi11cC1kb3duIHJvdGF0ZS05MFwiKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSWNvbnNEaXNwbGF5O1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEEgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5cbmltcG9ydCBFeHBhbmRhYmxlUGFuZWxUaXRsZSBmcm9tIFwiLi9FeHBhbmRhYmxlUGFuZWxUaXRsZVwiO1xuaW1wb3J0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgZnJvbSBcIi4vRXhwYW5kYWJsZVBhbmVsQ29udGVudFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gdXVpZHY0KCk7XG4gIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICBjb25zdCBwYW5lbCA9IEEoXG4gICAgeyBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsYCB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBFeHBhbmRhYmxlUGFuZWxUaXRsZSh7IHRpdGxlLCBjb21wb25lbnRJZCB9KSxcbiAgICAgIEV4cGFuZGFibGVQYW5lbENvbnRlbnQoeyBjaGlsZHJlbiwgY29tcG9uZW50SWQgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFuZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWw7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IERpdiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgbGV0IHsgY2hpbGRyZW4sIGNvbXBvbmVudElkIH0gPSBwcm9wcztcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC0ke2NvbXBvbmVudElkfWAsXG4gICAgICBjbGFzc05hbWU6IGBleHBhbmRhYmxlLXBhbmVsLWNvbnRlbnRgLFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtEaXYoeyBjbGFzc05hbWU6IFwiY29udGVudFwiIH0sIFsuLi5jaGlsZHJlbl0pXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGFibGVQYW5lbENvbnRlbnQ7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uLCBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuZnVuY3Rpb24gdG9nZ2xlRXhwYW5zaW9uKGNvbXBvbmVudElkKSB7XG4gIGNvbnN0IGV4cGFuc2lvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LSR7Y29tcG9uZW50SWR9YFxuICApO1xuICBjb25zdCB0b2dnbGVFeHBhbnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBgZXhwYW5kYWJsZS1jb250ZW50LWJ1dHRvbi0ke2NvbXBvbmVudElkfWBcbiAgKTtcbiAgZXhwYW5zaW9uQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIHRvZ2dsZUV4cGFuc2lvbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59XG5cbmNvbnN0IEV4cGFuZGFibGVQYW5lbFRpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGNvbXBvbmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBgZXhwYW5kYWJsZS1wYW5lbC10aXRsZWAgfSxcbiAgICBbXG4gICAgICBEaXYoe1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1pLWJcIixcbiAgICAgICAgaW5uZXJUZXh0OiB0aXRsZSxcbiAgICAgICAgb25jbGljaygpIHtcbiAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBCdXR0b24oXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogYGV4cGFuZGFibGUtY29udGVudC1idXR0b24tJHtjb21wb25lbnRJZH1gLFxuICAgICAgICAgIG9uY2xpY2soKSB7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbnNpb24oY29tcG9uZW50SWQpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtJY29uKFwiaWNvbi11cC1kb3duXCIpXVxuICAgICAgKSxcbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlUGFuZWxUaXRsZTtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBBIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTm9uRXhwYW5kYWJsZVBhbmVsID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IHRpdGxlLCBocmVmLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG5cbiAgY29uc3QgcGFuZWwgPSBBKFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7b3RoZXJDbGFzc2VzfSBub24tZXhwYW5kYWJsZS1wYW5lbCAke1xuICAgICAgICBocmVmID8gXCJpcy1saW5rXCIgOiBcIlwiXG4gICAgICB9YCxcbiAgICAgIGlubmVyVGV4dDogdGl0bGUsXG4gICAgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgWy4uLmNoaWxkcmVuXVxuICApO1xuICBpZiAoaHJlZikge1xuICAgIHBhbmVsLmhyZWYgPSBocmVmO1xuICB9XG4gIHJldHVybiBwYW5lbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vbkV4cGFuZGFibGVQYW5lbDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgSWNvbiA9IChpY29uQ2xhc3MpID0+IHtcbiAgY29uc3QgaWNvbiA9IEVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBgaWNvbiAke2ljb25DbGFzc30gZGlzcGxheS1pLWJgIH0pO1xuICByZXR1cm4gaWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ2Fyb3VzZWxOYXZJbmRpY2F0b3IgZnJvbSBcIi4vQ2Fyb3VzZWxOYXZJbmRpY2F0b3JcIjtcbmltcG9ydCBDYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lciBmcm9tIFwiLi9DYXJvdXNlbFBsYXlQYXVzZUNvbnRhaW5lclwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbE5hdiA9IChpbWFnZURhdGEpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbC1uYXYgcHQtMWAsXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtcbiAgICAgIENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyKCksXG4gICAgICAvLyBOYXYgaW5kaWNhdG9yc1xuICAgICAgLi4uaW1hZ2VEYXRhLm1hcCgob2JqLCBpbmRleCkgPT5cbiAgICAgICAgQ2Fyb3VzZWxOYXZJbmRpY2F0b3Ioe1xuICAgICAgICAgIGltYWdlSWQ6IG9iai51dWlkLFxuICAgICAgICAgIHN0YXJ0c0FjdGl2ZTogb2JqLmlzQWN0aXZlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxOYXY7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgY2xpY2tDYXJvdXNlbE5hdiB9IGZyb20gXCIuL3VpL2Nhcm91c2VsLXVpXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxOYXZJbmRpY2F0b3IgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbWFnZUlkLCBzdGFydHNBY3RpdmUgfSA9IHByb3BzO1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlkOiBgY2Fyb3VzZWwtbmF2LSR7aW1hZ2VJZH1gLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtaW5kaWNhdG9yIGRpc3BsYXktaS1iIGJnLWdyYXktbGlnaHQtNiAke1xuICAgICAgICBzdGFydHNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgfWAsXG4gICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsaWNrQ2Fyb3VzZWxOYXYoaW1hZ2VJZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxOYXZJbmRpY2F0b3I7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IHsgUGxheUJ1dHRvbiwgUGF1c2VCdXR0b24gfSBmcm9tIFwiLi9wbGF5QW5kUGF1c2VCdXR0b25zXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxQbGF5UGF1c2VDb250YWluZXIgPSAoKSA9PiB7XG4gIC8vXG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtcGxheS1wYXVzZS1jb250YWluZXJcIixcbiAgICB9LFxuICAgIC8vIGNoaWxkZXJuXG4gICAgW1BhdXNlQnV0dG9uLCBQbGF5QnV0dG9uXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgSW1nIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxTbGlkZSA9IChpbWFnZVNvdXJjZSwgaWQsIHN0YXJ0c0FjdGl2ZSkgPT4ge1xuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gRGl2KFxuICAgIHtcbiAgICAgIGlkOiBgY2Fyb3VzZWwtc2xpZGUtYCArIGlkLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtc2xpZGUgJHtzdGFydHNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn1gLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICBJbWcoe1xuICAgICAgICBzcmM6IGltYWdlU291cmNlLFxuICAgICAgICBjbGFzc05hbWU6IFwiY2Fyb3VzZWwtaW1hZ2VcIixcbiAgICAgIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFNsaWRlO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IFVsIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IENhcm91c2VsU2xpZGUgZnJvbSBcIi4vQ2Fyb3VzZWxTbGlkZVwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgQ2Fyb3VzZWxUcmFjayA9IChpbWFnZURhdGEpID0+IHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IFVsKFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLXRyYWNrYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW1xuICAgICAgLi4uaW1hZ2VEYXRhLm1hcCgob2JqLCBpbmRleCkgPT5cbiAgICAgICAgQ2Fyb3VzZWxTbGlkZShvYmouc3JjLCBvYmoudXVpZCwgb2JqLmlzQWN0aXZlID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxUcmFjaztcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYgfSBmcm9tIFwiLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgQ2Fyb3VzZWxUcmFjayBmcm9tIFwiLi9DYXJvdXNlbFRyYWNrXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBDYXJvdXNlbFRyYWNrQ29udGFpbmVyID0gKGltYWdlRGF0YSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBEaXYoXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtdHJhY2stY29udGFpbmVyYCxcbiAgICB9LFxuICAgIC8vIGNoaWxkcmVuXG4gICAgW0Nhcm91c2VsVHJhY2soaW1hZ2VEYXRhKV1cbiAgKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsVHJhY2tDb250YWluZXI7XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2IH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IExlZnRDYXJvdXNlbEJ1dHRvbiBmcm9tIFwiLi9MZWZ0QnV0dG9uXCI7XG5pbXBvcnQgUmlnaHRDYXJvdXNlbEJ1dHRvbiBmcm9tIFwiLi9SaWdodEJ1dHRvblwiO1xuaW1wb3J0IENhcm91c2VsVHJhY2tDb250YWluZXIgZnJvbSBcIi4vQ2Fyb3VzZWxUcmFja0NvbnRhaW5lclwiO1xuaW1wb3J0IENhcm91c2VsTmF2IGZyb20gXCIuL0Nhcm91c2VsTmF2XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgeyBpbWFnZURhdGEgfSBmcm9tIFwiLi9kYXRhL2ltYWdlTG9hZGVyXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBJbWFnZUNhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbCA9IERpdihcbiAgICB7XG4gICAgICBpZDogYGAsXG4gICAgICBjbGFzc05hbWU6IGBjYXJvdXNlbCBwdC0xIHBiLTFgLFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbXG4gICAgICBMZWZ0Q2Fyb3VzZWxCdXR0b24oKSxcbiAgICAgIENhcm91c2VsVHJhY2tDb250YWluZXIoaW1hZ2VEYXRhKSxcbiAgICAgIFJpZ2h0Q2Fyb3VzZWxCdXR0b24oKSxcbiAgICAgIENhcm91c2VsTmF2KGltYWdlRGF0YSksXG4gICAgXVxuICApO1xuICByZXR1cm4gY2Fyb3VzZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsTGVmdCB9IGZyb20gXCIuL3VpL2Nhcm91c2VsLXVpXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cblxuY29uc3QgTGVmdENhcm91c2VsQnV0dG9uID0gKHNoYXJlZENsYXNzZXMpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gQnV0dG9uKFxuICAgIHtcbiAgICAgIGlkOiBgYCxcbiAgICAgIGNsYXNzTmFtZTogYGNhcm91c2VsLWJ1dHRvbiBsZWZ0IGAgKyBzaGFyZWRDbGFzc2VzLFxuICAgICAgb25jbGljaygpIHtcbiAgICAgICAgY2xpY2tDYXJvdXNlbExlZnQoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBjaGlsZHJlblxuICAgIFtJY29uKFwiaWNvbi11cC1hcnJvdy1zaG9ydCByb3RhdGUtMjcwIFwiKV1cbiAgKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlZnRDYXJvdXNlbEJ1dHRvbjtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUmlnaHQgfSBmcm9tIFwiLi91aS9jYXJvdXNlbC11aVwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5cbmNvbnN0IFJpZ2h0Q2Fyb3VzZWxCdXR0b24gPSAoc2hhcmVkQ2xhc3NlcykgPT4ge1xuICBjb25zdCBidXR0b24gPSBCdXR0b24oXG4gICAge1xuICAgICAgaWQ6IGBgLFxuICAgICAgY2xhc3NOYW1lOiBgY2Fyb3VzZWwtYnV0dG9uIHJpZ2h0IGAgKyBzaGFyZWRDbGFzc2VzLFxuICAgICAgb25jbGljaygpIHtcbiAgICAgICAgY2xpY2tDYXJvdXNlbFJpZ2h0KCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gY2hpbGRyZW5cbiAgICBbSWNvbihcImljb24tdXAtYXJyb3ctc2hvcnQgcm90YXRlLTkwXCIpXVxuICApO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRDYXJvdXNlbEJ1dHRvbjtcbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHNcIjtcblxuLy8gSW1hZ2Ugc291cmNlIGluZm9cbmZ1bmN0aW9uIGdldFBpY3N1bUlkKG1pbiwgbWF4LCBleGNsdXNpb25zKSB7XG4gIGxldCByYW5kSW50ID0gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoZXhjbHVzaW9ucy5pbmNsdWRlcyhyYW5kSW50KSkge1xuICAgICAgcmFuZEludCA9IGdldFJhbmRvbUludChtaW4sIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByYW5kSW50O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbWFnZVNyYyh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLyR7Z2V0UGljc3VtSWQoMSwgMTAwLCBbXG4gICAgOTcsXG4gIF0pfS8ke3dpZHRofS8ke2hlaWdodH1gO1xufVxuXG5jb25zdCBudW1JbWFnZXMgPSA3O1xuY29uc3QgaW1hZ2VXaWR0aCA9IDUwMDtcbmNvbnN0IGltYWdlSGVpZ2h0ID0gMzAwO1xuXG4vLyBhZGQgaXNBY3RpdmU6IHRydWUgdG8gdGhlIHNsaWRlIHlvdSB3YW50IHRvIHN0YXJ0IGFzIGFjdGl2ZVxuY29uc3QgaW1hZ2VTb3VyY2VzID0gW1xuICB7IHNyYzogZ2V0UmFuZG9tSW1hZ2VTcmMoaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQpLCBpc0FjdGl2ZTogdHJ1ZSB9LFxuICAuLi5BcnJheShudW1JbWFnZXMpXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKChlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IGdldFJhbmRvbUltYWdlU3JjKGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0KSxcbiAgICAgIH07XG4gICAgfSksXG5dO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VEYXRhID0gaW1hZ2VTb3VyY2VzLm1hcCgob2JqKSA9PiAoe1xuICAuLi5vYmosXG4gIHV1aWQ6IHV1aWR2NCgpLFxufSkpO1xuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL19lbGVtZW50cy9FbGVtZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb25cIjtcbmltcG9ydCB7IGNsaWNrQ2Fyb3VzZWxQbGF5LCBjbGlja0Nhcm91c2VsUGF1c2UgfSBmcm9tIFwiLi91aS9jYXJvdXNlbC11aVwiO1xuXG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbiA9IEJ1dHRvbihcbiAge1xuICAgIGNsYXNzTmFtZTogXCJwbGF5LWJ1dHRvbiB2aXNpYmxlXCIsXG4gICAgb25jbGljaygpIHtcbiAgICAgIGNsaWNrQ2Fyb3VzZWxQbGF5KCk7XG4gICAgfSxcbiAgfSxcbiAgW0ljb24oXCJpY29uLXRyaWFuZ2xlIHJvdGF0ZS05MCBmb250LXNtIHRleHQtZ3JheS1kYXJrLTRcIildXG4pO1xuXG5leHBvcnQgY29uc3QgUGF1c2VCdXR0b24gPSBCdXR0b24oXG4gIHtcbiAgICBjbGFzc05hbWU6IFwicGF1c2UtYnV0dG9uXCIsXG4gICAgb25jbGljaygpIHtcbiAgICAgIGNsaWNrQ2Fyb3VzZWxQYXVzZSgpO1xuICAgIH0sXG4gIH0sXG4gIFtJY29uKFwiaWNvbi1wYXVzZSBmb250LXNtIHRleHQtZ3JheS1kYXJrLTRcIildXG4pO1xuIiwiLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgVVRJTElUSUVTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxTbGlkZXMoKSB7XG4gIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbC10cmFja1wiKS5jaGlsZE5vZGVzXTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpIHtcbiAgcmV0dXJuIGdldEFsbENhcm91c2VsU2xpZGVzKCkubWFwKChlbGVtKSA9PiBlbGVtLmlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zKCkge1xuICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yXCIpXTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSB7XG4gIGNvbnN0IGFsbFNsaWRlSWRzID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpO1xuICBjb25zdCBjdXJyZW50U2xpZGVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwtc2xpZGUuYWN0aXZlXCIpLmlkO1xuICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IGFsbFNsaWRlSWRzLmluZGV4T2YoY3VycmVudFNsaWRlSWQpO1xuXG4gIHJldHVybiBjdXJyZW50U2xpZGVJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJldmlvdXNTbGlkZUluZGV4KCkge1xuICBsZXQgcHJldmlvdXNTbGlkZUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlSW5kZXgoKSAtIDE7XG5cbiAgLy8gaWYgdGhlIGNhbGN1bGF0ZWQgaW5kZXggaXMgb3V0c2lkZSB0aGUgbGlzdCwgc2V0IGl0IHRvIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0XG4gIGNvbnN0IGNvcnJlY3RlZEluZGV4ID1cbiAgICBwcmV2aW91c1NsaWRlSW5kZXggPCAwXG4gICAgICA/IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKS5sZW5ndGggLSAxXG4gICAgICA6IHByZXZpb3VzU2xpZGVJbmRleDtcblxuICByZXR1cm4gY29ycmVjdGVkSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTbGlkZUluZGV4KCkge1xuICBsZXQgbmV4dFNsaWRlSW5kZXggPSBnZXRDdXJyZW50U2xpZGVJbmRleCgpICsgMTtcblxuICAvLyBpZiB0aGUgY2FsY3VsYXRlZCBpbmRleCBpcyBvdXRzaWRlIHRoZSBsaXN0LCBzZXQgaXQgdG8gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0XG4gIGNvbnN0IGNvcnJlY3RlZEluZGV4ID1cbiAgICBuZXh0U2xpZGVJbmRleCA+IGdldEFsbENhcm91c2VsU2xpZGVJZHMoKS5sZW5ndGggLSAxID8gMCA6IG5leHRTbGlkZUluZGV4O1xuXG4gIHJldHVybiBjb3JyZWN0ZWRJbmRleDtcbn1cblxuLy8gbW92ZSB0byB0aGUgc2VsZWN0ZWQgc2xpZGVcbmV4cG9ydCBmdW5jdGlvbiBnb3RvU3BlY2lmaWNTbGlkZShpZCkge1xuICBjb25zdCBhbGxOYXZCdXR0b25zID0gZ2V0QWxsQ2Fyb3VzZWxOYXZCdXR0b25zKCk7XG4gIGNvbnN0IHNlbGVjdGVkTmF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcm91c2VsLW5hdi0ke2lkfWApO1xuICBjb25zdCBzZWxlY3RlZFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcm91c2VsLXNsaWRlLSR7aWR9YCk7XG4gIGNvbnN0IGFsbFNsaWRlcyA9IGdldEFsbENhcm91c2VsU2xpZGVzKCk7XG5cbiAgYWxsU2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgc2VsZWN0ZWRTbGlkZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gIGFsbE5hdkJ1dHRvbnMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICBzZWxlY3RlZE5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEVWRU5UIEhBTkRMRVJTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIG1vdmUgdG8gdGhlIHNlbGVjdGVkIHNsaWRlIHdoZW4gY2xpY2tpbmcgb24gdGhlIGFzc29jaWF0ZWQgbmF2IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxOYXYoaWQpIHtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyBtb3ZlIHJpZ2h0IHdoZW4gY2xpY2tpbmcgb24gdGhlIHJpZ2h0IGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxSaWdodCgpIHtcbiAgY29uc3QgaWQgPSBnZXRBbGxDYXJvdXNlbFNsaWRlSWRzKClbZ2V0TmV4dFNsaWRlSW5kZXgoKV0ucmVwbGFjZShcbiAgICBcImNhcm91c2VsLXNsaWRlLVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgZ290b1NwZWNpZmljU2xpZGUoaWQpO1xufVxuXG4vLyBtb3ZlIGxlZnQgd2hlbiBjbGlja2luZyBvbiB0aGUgcmlnaHQgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tDYXJvdXNlbExlZnQoKSB7XG4gIGNvbnN0IGlkID0gZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcygpW2dldFByZXZpb3VzU2xpZGVJbmRleCgpXS5yZXBsYWNlKFxuICAgIFwiY2Fyb3VzZWwtc2xpZGUtXCIsXG4gICAgXCJcIlxuICApO1xuICBnb3RvU3BlY2lmaWNTbGlkZShpZCk7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBBVVRPIFBST0dSRVNTSU9OICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrQ2Fyb3VzZWxQbGF5KCkge1xuICBoYW5kbGVBdXRvQWR2YW5jZShcInBsYXlcIik7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wbGF5LWJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBhdXNlLWJ1dHRvblwiKTtcbiAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGlja0Nhcm91c2VsUGF1c2UoKSB7XG4gIGhhbmRsZUF1dG9BZHZhbmNlKFwicGF1c2VcIik7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5wbGF5LWJ1dHRvblwiKTtcbiAgcGxheUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWwgLnBhdXNlLWJ1dHRvblwiKTtcbiAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59XG5cbmxldCBpbnRlcnZhbDtcbi8qKlxuICogQSBmdW5jdGlvbiB0byBjcmVhdGUgb3IgY2FuY2VsIHRoZSBhdXRvIGFkdmFuY2UgdGltZXJcbiAqIHlvdSB3aWxsIG5lZXQgdG8gZGVjbGFyZSBpbnRlcnZhbCAobGV0IGludGVydmFsKSBiZWZvcmVcbiAqIHRoaXMgZnVuY3Rpb24gdG8gYWxsb3cgdGhlIGludGVydmFsIHRvIGJlIGNyZWF0ZWQgLyByZWZlbmVuY2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBhIHN0cmluZyBjb250YWluaW5nICdwbGF5JyBvciAncGF1c2UnIHRvIGluZGljYXRlIHRoZSBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdXRvQWR2YW5jZShtb2RlKSB7XG4gIGNvbnN0IHBsYXlpbmcgPSBtb2RlID09PSBcInBsYXlcIiA/IHRydWUgOiBmYWxzZTtcbiAgaWYgKHBsYXlpbmcpIHtcbiAgICAvLyBzdGFydCBhbiBpbnRlcnZhbCB0aW1lciBhbmQgY2FwdHVyZSBpdHMgcmVmZXJlbmNlXG4gICAgaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoY2xpY2tDYXJvdXNlbFJpZ2h0LCA1MDAwKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjYW5jZWwgdGhlIHJlZmVyZW5jZSB5b3UgY2FwdHVyZWRcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQge1xuICBEaXYsXG4gIExhYmVsLFxuICBTcGFuLFxuICBEYXRhbGlzdCxcbiAgT3B0aW9uLFxuICBTZWxlY3QsXG59IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJpZXNMaXN0XCI7XG5pbXBvcnQgeyBoYW5kbGVDb3VudHJ5SW5wdXQgfSBmcm9tIFwiLi9jb3VudHJ5LWlucHV0LXZhbGlkYXRpb25cIjtcblxuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgY291bnRyeUlucHV0SWQgPSBgZW1haWwtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IENvdW50cnlJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHtjb3VudHJ5SW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBXaGF0IGNvdW50cnkgYXJlIHlvdSBmcm9tPyAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcblxuICAgICAgU2VsZWN0KFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNvdW50cnktaW5wdXRcIixcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgICAgaGFuZGxlQ291bnRyeUlucHV0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIE9wdGlvbigpLFxuICAgICAgICAgIC4uLmNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IE9wdGlvbih7IGlubmVyVGV4dDogY291bnRyeSB9KSksXG4gICAgICAgIF1cbiAgICAgICksXG5cbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgICAgRGF0YWxpc3QoeyBpZDogXCJjb3VudHJpZXNcIiB9LCBbXG4gICAgICAgIC4uLmNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IE9wdGlvbih7IGlubmVyVGV4dDogY291bnRyeSB9KSksXG4gICAgICBdKSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeUlucHV0O1xuIiwiZXhwb3J0IGNvbnN0IGNvdW50cmllcyA9IFtcbiAgXCJBZmdoYW5pc3RhblwiLFxuICBcIkFsYmFuaWVuXCIsXG4gIFwiQWxnZXJpZXRcIixcbiAgXCJBbmdvbGFcIixcbiAgXCJBbnRpZ3VhIG9jaCBCYXJidWRhXCIsXG4gIFwiQXJnZW50aW5hXCIsXG4gIFwiQXVzdHJhbGllblwiLFxuICBcIkF6ZXJiYWpkemphblwiLFxuICBcIsOWc3RlcnJpa2VcIixcbiAgXCLDlnN0dGltb3JcIixcbiAgXCJCYWhhbWFzXCIsXG4gIFwiQmFocmFpblwiLFxuICBcIkJhbmdsYWRlc2hcIixcbiAgXCJCYXJiYWRvc1wiLFxuICBcIkJlbGdpZW5cIixcbiAgXCJCZW5pblwiLFxuICBcIkJlcm11ZGFcIixcbiAgXCJCaHV0YW5cIixcbiAgXCJCb2xpdmlhXCIsXG4gIFwiQm9zbmllbiBvY2ggSGVyY2Vnb3ZpbmFcIixcbiAgXCJCb3Rzd2FuYVwiLFxuICBcIkJyYXNpbGllblwiLFxuICBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXG4gIFwiQnVsZ2FyaWVuXCIsXG4gIFwiQnVya2luYSBGYXNvXCIsXG4gIFwiQnVydW5kaVwiLFxuICBcIkNlbnRyYWxhZnJpa2Fuc2thIFJlcHVibGlrZW5cIixcbiAgXCJDaGlsZVwiLFxuICBcIkNvbG9tYmlhXCIsXG4gIFwiQ29zdGEgUmljYVwiLFxuICBcIkN5cGVyblwiLFxuICBcIkRhbm1hcmtcIixcbiAgXCJEZW1va3JhdGlza2EgUmVwdWJsaWtlbiBLb25nb1wiLFxuICBcIkRvbWluaWthbnNrYSBSZXB1Ymxpa2VuXCIsXG4gIFwiRWN1YWRvclwiLFxuICBcIkVneXB0ZW5cIixcbiAgXCJFbCBTYWx2YWRvclwiLFxuICBcIkVsZmVuYmVuc2t1c3RlblwiLFxuICBcIkVzdGxhbmRcIixcbiAgXCJFdGlvcGllblwiLFxuICBcIkbDpHLDtmFybmFcIixcbiAgXCJGw7ZyZW5hZGUgQXJhYmVtaXJhdGVuXCIsXG4gIFwiRmlsaXBwaW5lcm5hXCIsXG4gIFwiRmlubGFuZFwiLFxuICBcIkZyYW5rcmlrZVwiLFxuICBcIkdhYm9uXCIsXG4gIFwiR2VvcmdpZW5cIixcbiAgXCJHaGFuYVwiLFxuICBcIkdpYnJhbHRhclwiLFxuICBcIkdyw7ZubGFuZFwiLFxuICBcIkdyZWtsYW5kXCIsXG4gIFwiR3JlbmFkYVwiLFxuICBcIkd1YXRlbWFsYVwiLFxuICBcIkhvbmR1cmFzXCIsXG4gIFwiSG9uZyBLb25nXCIsXG4gIFwiSW5kaWVuXCIsXG4gIFwiSW5kb25lc2llblwiLFxuICBcIklyYWtcIixcbiAgXCJJcmFuXCIsXG4gIFwiSXJsYW5kXCIsXG4gIFwiSXNsYW5kXCIsXG4gIFwiSXNyYWVsXCIsXG4gIFwiSXRhbGllblwiLFxuICBcIkphbWFpY2FcIixcbiAgXCJKYXBhblwiLFxuICBcIkplbWVuXCIsXG4gIFwiSmVyc2V5XCIsXG4gIFwiSm9yZGFuaWVuXCIsXG4gIFwiS2FtYm9kamFcIixcbiAgXCJLYW5hZGFcIixcbiAgXCJLYXpha3N0YW5cIixcbiAgXCJLZW55YVwiLFxuICBcIktpbmFcIixcbiAgXCJLaXJpYmF0aVwiLFxuICBcIktyb2F0aWVuXCIsXG4gIFwiS3ViYVwiLFxuICBcIkt1d2FpdFwiLFxuICBcIkxhb3NcIixcbiAgXCJMZXR0bGFuZFwiLFxuICBcIkxpYmFub25cIixcbiAgXCJMaWJ5ZW5cIixcbiAgXCJMaXRhdWVuXCIsXG4gIFwiTHV4ZW1idXJnXCIsXG4gIFwiTWFkYWdhc2thclwiLFxuICBcIk1ha2Vkb25pZW5cIixcbiAgXCJNYWxhd2lcIixcbiAgXCJNYWxheXNpYVwiLFxuICBcIk1hbGRpdmVybmFcIixcbiAgXCJNYWxpXCIsXG4gIFwiTWFsdGFcIixcbiAgXCJNYXJvY2tvXCIsXG4gIFwiTWF1cml0aXVzXCIsXG4gIFwiTWV4aWtvXCIsXG4gIFwiTW9jYW1iaXF1ZVwiLFxuICBcIk1vbmFjb1wiLFxuICBcIk1vbmdvbGlldFwiLFxuICBcIk15YW5tYXJcIixcbiAgXCJOYW1pYmlhXCIsXG4gIFwiTmVkZXJsw6RuZGVybmFcIixcbiAgXCJOZWRlcmzDpG5kc2thIEFudGlsbGVybmFcIixcbiAgXCJOZXBhbFwiLFxuICBcIk5pY2FyYWd1YVwiLFxuICBcIk5pZ2VyXCIsXG4gIFwiTmlnZXJpYVwiLFxuICBcIk5vcmdlXCIsXG4gIFwiTnlhIFplZWxhbmRcIixcbiAgXCJPbWFuXCIsXG4gIFwiUGFraXN0YW5cIixcbiAgXCJQYW5hbWFcIixcbiAgXCJQYXJhZ3VheVwiLFxuICBcIlBlcnVcIixcbiAgXCJQb2xlblwiLFxuICBcIlBvcnR1Z2FsXCIsXG4gIFwiUHVlcnRvIFJpY29cIixcbiAgXCJRYXRhclwiLFxuICBcIlJ1bcOkbmllblwiLFxuICBcIlJ3YW5kYVwiLFxuICBcIlJ5c3NsYW5kXCIsXG4gIFwiU2FpbnQgTHVjaWFcIixcbiAgXCJTYWludCBWaW5jZW50IG9jaCBHcmVuYWRpbmVybmFcIixcbiAgXCJTYW1vYVwiLFxuICBcIlNhbiBNYXJpbm9cIixcbiAgXCJTYW8gVG9tZSBvY2ggUHJpbmNpcGVcIixcbiAgXCJTYXVkaWFyYWJpZW5cIixcbiAgXCJTY2h3ZWl6XCIsXG4gIFwiU2VuZWdhbFwiLFxuICBcIlNlcmJpZW4gb2NoIE1vbnRlbmVncm9cIixcbiAgXCJTZXljaGVsbGVybmFcIixcbiAgXCJTaWVycmEgTGVvbmVcIixcbiAgXCJTaW5nYXBvcmVcIixcbiAgXCJTbG92YWtpZW5cIixcbiAgXCJTbG92ZW5pZW5cIixcbiAgXCJTb21hbGlhXCIsXG4gIFwiU3BhbmllblwiLFxuICBcIlNyaSBMYW5rYVwiLFxuICBcIlN1ZGFuXCIsXG4gIFwiU3VyaW5hbVwiLFxuICBcIlN2ZXJpZ2VcIixcbiAgXCJTd2F6aWxhbmRcIixcbiAgXCJTeWRhZnJpa2FcIixcbiAgXCJTeWRrb3JlYVwiLFxuICBcIlN5cmllblwiLFxuICBcIlRhaXdhblwiLFxuICBcIlRhbnphbmlhXCIsXG4gIFwiVGhhaWxhbmRcIixcbiAgXCJUamVja2llblwiLFxuICBcIlRyaW5pZGFkIG9jaCBUb2JhZ29cIixcbiAgXCJUdW5pc2llblwiLFxuICBcIlR1cmtpZXRcIixcbiAgXCJUeXNrbGFuZFwiLFxuICBcIlVnYW5kYVwiLFxuICBcIlVrcmFpbmFcIixcbiAgXCJVbmdlcm5cIixcbiAgXCJVcnVndWF5XCIsXG4gIFwiVVNBXCIsXG4gIFwiVXpiZWtpc3RhblwiLFxuICBcIlZlbmV6dWVsYVwiLFxuICBcIlZpZXRuYW1cIixcbiAgXCJWaXRyeXNzbGFuZFwiLFxuICBcIlphbWJpYVwiLFxuICBcIlppbWJhYndlXCIsXG5dO1xuIiwiaW1wb3J0IHsgY2xlYXJFcnJvciB9IGZyb20gXCIuLi9mb3JtLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNzaWdubWVudCAuY291bnRyeS1pbnB1dFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc3NpZ25tZW50IC5jb3VudHJ5LWlucHV0ICsgLmVycm9yXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRyeUlzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRDb3VudHJ5SW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvdW50cnlJbnB1dCgpIHtcbiAgY29uc3QgY291bnRyeSA9IGdldENvdW50cnlJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldENvdW50cnlJbnB1dEVycm9yKCk7XG5cbiAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjbGVhckVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvdW50cnlFcnJvcigpIHtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb3VudHJ5SW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJQbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbiBmcm9tIHRoZSBsaXN0LlwiO1xuICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG59XG4iLCIvLyBDT01QT05FTlQgSU1QT1JUU1xuaW1wb3J0IHsgRGl2LCBJbnB1dCwgTGFiZWwsIFNwYW4gfSBmcm9tIFwiLi4vLi4vLi4vX2VsZW1lbnRzL0VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgaGFuZGxlRW1haWxJbnB1dCB9IGZyb20gXCIuL2VtYWlsLWlucHV0LXZhbGlkYXRpb25cIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGVtYWlsSW5wdXRJZCA9IGBlbWFpbC1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcblxuY29uc3QgRW1haWxJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHtlbWFpbElucHV0SWR9YCxcbiAgICAgICAgaW5uZXJIVE1MOiBgUGxlYXNlIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MgJHtcbiAgICAgICAgICBTcGFuKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIixcbiAgICAgICAgICAgIGlubmVyVGV4dDogXCIqXCIsXG4gICAgICAgICAgfSkub3V0ZXJIVE1MXG4gICAgICAgIH1gLFxuICAgICAgfSksXG4gICAgICBJbnB1dCh7XG4gICAgICAgIGlkOiBgJHtlbWFpbElucHV0SWR9YCxcbiAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVFbWFpbElucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbElucHV0O1xuIiwiaW1wb3J0IHsgY2xlYXJFcnJvciB9IGZyb20gXCIuLi9mb3JtLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGVtYWlsSW5wdXRJZCB9IGZyb20gXCIuL0VtYWlsSW5wdXRcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbWFpbElucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW1haWxJbnB1dElkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbWFpbElucHV0RXJyb3IoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbWFpbElucHV0SWR9ICsgLmVycm9yYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWFpbElzVmFsaWQoKSB7XG4gIHJldHVybiBnZXRFbWFpbElucHV0KCkudmFsaWRpdHkudmFsaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFbWFpbElucHV0KCkge1xuICBpZiAoZW1haWxJc1ZhbGlkKCkpIHtcbiAgICBjbGVhckVycm9yKGdldEVtYWlsSW5wdXRFcnJvcigpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RW1haWxFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RW1haWxFcnJvcigpIHtcbiAgY29uc3QgZW1haWwgPSBnZXRFbWFpbElucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0RW1haWxJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XG5cbiAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYW4gZW1haWwgYWRkcmVzcyB0byBjb250aW51ZS5cIjtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIExhYmVsLCBJbnB1dCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBoYW5kbGVaaXBDb2RlSW5wdXQgfSBmcm9tIFwiLi96aXAtY29kZS1pbnB1dC12YWxpZGF0aW9uXCI7XG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCB6aXBDb2RlSW5wdXRJZCA9IGB6aXAtY29kZS1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcbmNvbnN0IFppcENvZGVJbnB1dCA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJDbGFzc2VzID0gXCJcIjtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IERpdihcbiAgICB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiArIFwiIFwiICsgb3RoZXJDbGFzc2VzIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtcbiAgICAgIExhYmVsKHtcbiAgICAgICAgZm9yOiBgJHt6aXBDb2RlSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBQbGVhc2UgZW50ZXIgeW91ciB6aXAgY29kZSAke1xuICAgICAgICAgIFNwYW4oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJlcXVpcmVkLW1hcmtlclwiLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiBcIipcIixcbiAgICAgICAgICB9KS5vdXRlckhUTUxcbiAgICAgICAgfWAsXG4gICAgICB9KSxcbiAgICAgIElucHV0KHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBwYXR0ZXJuOiBcIl5bMC05XXs1fSg/Oi1bMC05XXs0fSk/JFwiLFxuICAgICAgICBpZDogYCR7emlwQ29kZUlucHV0SWR9YCxcbiAgICAgICAgb25pbnB1dCgpIHtcbiAgICAgICAgICBoYW5kbGVaaXBDb2RlSW5wdXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgRGl2KHsgY2xhc3NOYW1lOiBcImVycm9yXCIgfSksXG4gICAgXVxuICApO1xuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFppcENvZGVJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyB6aXBDb2RlSW5wdXRJZCB9IGZyb20gXCIuL1ppcENvZGVJbnB1dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WmlwQ29kZUlucHV0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoemlwQ29kZUlucHV0SWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFppcENvZGVJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7emlwQ29kZUlucHV0SWR9ICsgLmVycm9yYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6aXBDb2RlSXNWYWxpZCgpIHtcbiAgcmV0dXJuIGdldFppcENvZGVJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlWmlwQ29kZUlucHV0KCkge1xuICBpZiAoemlwQ29kZUlzVmFsaWQoKSkge1xuICAgIGNsZWFyRXJyb3IoZ2V0WmlwQ29kZUlucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1ppcENvZGVFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93WmlwQ29kZUVycm9yKCkge1xuICBjb25zdCB6aXBDb2RlID0gZ2V0WmlwQ29kZUlucHV0KCk7XG4gIGNvbnN0IGVycm9yID0gZ2V0WmlwQ29kZUlucHV0RXJyb3IoKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiRW50ZXIgYSB2YWxpZCB6aXAgY29kZSBmb3JtYXQuICg1NTU1NSBvciA1NTU1NS00NDQ0KVwiO1xuXG4gIGlmICh6aXBDb2RlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgZW50ZXIgYSB2YWxpZCB6aXAgY29kZSB0byBjb250aW51ZS5cIjtcbiAgfSBlbHNlIHtcbiAgfVxuXG4gIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTWVzc2FnZTtcbiAgZXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvciBhY3RpdmVcIjtcbn1cbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBoYW5kbGVDb25maXJtUGFzc3dvcmRJbnB1dCB9IGZyb20gXCIuL3Bhc3N3b3Jkcy12YWxpZGF0aW9uXCI7XG5cbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuY29uc3QgY29tcG9uZW50VXVpZCA9IHV1aWR2NCgpO1xuZXhwb3J0IGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0SWQgPSBgY29uZmlybS1wYXNzd29yZC1pbnB1dC0ke2NvbXBvbmVudFV1aWR9YDtcblxuY29uc3QgQ29uZmlybVBhc3N3b3JkSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7Y29uZmlybVBhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICBpbm5lckhUTUw6IGBDb25maXJtIHBhc3N3b3JkICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7Y29uZmlybVBhc3N3b3JkSW5wdXRJZH1gLFxuICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBvbmlucHV0KCkge1xuICAgICAgICAgIGhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIERpdih7IGNsYXNzTmFtZTogXCJlcnJvclwiIH0pLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtUGFzc3dvcmRJbnB1dDtcbiIsIi8vIENPTVBPTkVOVCBJTVBPUlRTXG5pbXBvcnQgeyBEaXYsIElucHV0LCBMYWJlbCwgU3BhbiB9IGZyb20gXCIuLi8uLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICBoYW5kbGVQYXNzd29yZElucHV0LFxuICBwYXNzd29yZFJlZ2V4U3RyaW5nLFxufSBmcm9tIFwiLi9wYXNzd29yZHMtdmFsaWRhdGlvblwiO1xuXG4vLyBMT0dJQyBJTVBPUlRTXG4vL1xuXG4vLyBDT01QT05FTlQgTUVUSE9EU1xuLy8gZnVuY3Rpb24gc29tZU1ldGhvZCgpIHtcbi8vICAgLy9cbi8vIH1cbmNvbnN0IGNvbXBvbmVudFV1aWQgPSB1dWlkdjQoKTtcbmV4cG9ydCBjb25zdCBwYXNzd29yZElucHV0SWQgPSBgcGFzc3dvcmQtaW5wdXQtJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IFBhc3N3b3JkSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcyB9LFxuICAgIC8vIGFkZCBjaGlsZCBlbGVtZW50cyB0byB0aGUgYXJyYXkgYmVsb3dcbiAgICBbXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGZvcjogYCR7cGFzc3dvcmRJbnB1dElkfWAsXG4gICAgICAgIGlubmVySFRNTDogYENyZWF0ZSB5b3VyIHBhc3N3b3JkICR7XG4gICAgICAgICAgU3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmVxdWlyZWQtbWFya2VyXCIsXG4gICAgICAgICAgICBpbm5lclRleHQ6IFwiKlwiLFxuICAgICAgICAgIH0pLm91dGVySFRNTFxuICAgICAgICB9YCxcbiAgICAgIH0pLFxuICAgICAgSW5wdXQoe1xuICAgICAgICBpZDogYCR7cGFzc3dvcmRJbnB1dElkfWAsXG4gICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHBhdHRlcm46IHBhc3N3b3JkUmVnZXhTdHJpbmcsXG4gICAgICAgIG9uaW5wdXQoKSB7XG4gICAgICAgICAgaGFuZGxlUGFzc3dvcmRJbnB1dCgpO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBEaXYoeyBjbGFzc05hbWU6IFwiZXJyb3JcIiB9KSxcbiAgICBdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRJbnB1dDtcbiIsImltcG9ydCB7IGNsZWFyRXJyb3IgfSBmcm9tIFwiLi4vZm9ybS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBjb25maXJtUGFzc3dvcmRJbnB1dElkIH0gZnJvbSBcIi4vQ29uZmlybVBhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCB7IHBhc3N3b3JkSW5wdXRJZCB9IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRcIjtcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUmVnZXhTdHJpbmcgPVxuICBcIl4oPz0uKmQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qW2EtekEtWl0pLnsxMix9JFwiO1xuXG5jb25zdCBwYXNzd29yZFJlZ2V4ID0gbmV3IFJlZ0V4cChwYXNzd29yZFJlZ2V4U3RyaW5nKTtcblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFBBU1NXT1JEIElOUFVUICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkSW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXNzd29yZElucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFzc3dvcmRJbnB1dEVycm9yKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFzc3dvcmRJbnB1dElkfSArIC5lcnJvcmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0UGFzc3dvcmRJbnB1dCgpLnZhbGlkaXR5LnZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFzc3dvcmRJbnB1dFZhbHVlKCkge1xuICByZXR1cm4gZ2V0UGFzc3dvcmRJbnB1dCgpLnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUGFzc3dvcmRJbnB1dCgpIHtcbiAgaWYgKHBhc3N3b3JkSXNWYWxpZCgpKSB7XG4gICAgY2xlYXJFcnJvcihnZXRQYXNzd29yZElucHV0RXJyb3IoKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Bhc3N3b3JkRXJyb3IoKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0UGFzc3dvcmRJbnB1dCgpO1xuICBjb25zdCBlcnJvciA9IGdldFBhc3N3b3JkSW5wdXRFcnJvcigpO1xuICBsZXQgZXJyb3JNZXNzYWdlID1cbiAgICBcIlZhbGlkIHBhc3N3b3JkcyBhcmUgYXQgbGVhc2UgMTIgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIGF0IGxlYXNlIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbG93ZXJjYXNlIGxldHRlci5cIjtcblxuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkIHRvIGNvbnRpbnVlLlwiO1xuICB9XG5cbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgQ09ORklSTSBQQVNTV09SRCBJTlBVVCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maXJtUGFzc3dvcmRJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpcm1QYXNzd29yZElucHV0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRFcnJvcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbmZpcm1QYXNzd29yZElucHV0SWR9ICsgLmVycm9yYCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1QYXNzd29yZElucHV0KCkudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maXJtUGFzc3dvcmRJc1ZhbGlkKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKS52YWxpZGl0eS52YWxpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1QYXNzd29yZElucHV0KCkge1xuICBjb25zdCBpbnB1dCA9IGdldENvbmZpcm1QYXNzd29yZElucHV0KCk7XG4gIGlmIChnZXRQYXNzd29yZElucHV0VmFsdWUoKSA9PT0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSgpKSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJpbnZhbGlkXCIpO1xuICB9XG5cbiAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY2xlYXJFcnJvcihnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yKCkpO1xuICB9IGVsc2Uge1xuICAgIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IoKSB7XG4gIGNvbnN0IHBhc3N3b3JkID0gZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQoKTtcbiAgY29uc3QgZXJyb3IgPSBnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yKCk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCI7XG5cbiAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3QgY29uZmlybSB5b3VyIHBhc3N3b3JkIHRvIGNvbnRpbnVlLlwiO1xuICB9XG5cbiAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICBlcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xufVxuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbi8vIExPR0lDIElNUE9SVFNcbi8vXG5cbi8vIENPTVBPTkVOVCBNRVRIT0RTXG4vLyBmdW5jdGlvbiBzb21lTWV0aG9kKCkge1xuLy8gICAvL1xuLy8gfVxuXG5jb25zdCBTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBCdXR0b24oXG4gICAgeyBjbGFzc05hbWU6IFwiXCIgKyBcIiBcIiArIG90aGVyQ2xhc3NlcywgaW5uZXJUZXh0OiBcIlN1Ym1pdFwiIH0sXG4gICAgLy8gYWRkIGNoaWxkIGVsZW1lbnRzIHRvIHRoZSBhcnJheSBiZWxvd1xuICAgIFtdXG4gICk7XG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0QnV0dG9uO1xuIiwiLy8gQ09NUE9ORU5UIElNUE9SVFNcbmltcG9ydCB7IERpdiwgRm9ybSwgU3BhbiB9IGZyb20gXCIuLi8uLi9fZWxlbWVudHMvRWxlbWVudHNcIjtcbmltcG9ydCB7IGhhbmRsZUZvcm1TdWJtaXQgfSBmcm9tIFwiLi9mb3JtLXZhbGlkYXRpb25cIjtcbmltcG9ydCBaaXBDb2RlSW5wdXQgZnJvbSBcIi4vSW5wdXQvWmlwQ29kZUlucHV0XCI7XG5pbXBvcnQgQ291bnRyeUlucHV0IGZyb20gXCIuL0NvdW50cnlJbnB1dC9Db3VudHJ5SW5wdXRcIjtcbmltcG9ydCBFbWFpbElucHV0IGZyb20gXCIuL0VtYWlsSW5wdXQvRW1haWxJbnB1dFwiO1xuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi9TdWJtaXRCdXR0b25cIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRzL1Bhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCBDb25maXJtUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi9QYXNzd29yZElucHV0cy9Db25maXJtUGFzc3dvcmRJbnB1dFwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuLy8gTE9HSUMgSU1QT1JUU1xuLy9cblxuLy8gQ09NUE9ORU5UIE1FVEhPRFNcbi8vIGZ1bmN0aW9uIHNvbWVNZXRob2QoKSB7XG4vLyAgIC8vXG4vLyB9XG5jb25zdCBjb21wb25lbnRVdWlkID0gdXVpZHY0KCk7XG5leHBvcnQgY29uc3QgZm9ybUlkID0gYGZvcm0tJHtjb21wb25lbnRVdWlkfWA7XG5cbmNvbnN0IFZhbGlkYXRlZEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG90aGVyQ2xhc3NlcyA9IFwiXCI7XG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBEaXYoXG4gICAgeyBjbGFzc05hbWU6IFwiYXNzaWdubWVudFwiICsgXCIgXCIgKyBvdGhlckNsYXNzZXMgfSxcbiAgICAvLyBhZGQgY2hpbGQgZWxlbWVudHMgdG8gdGhlIGFycmF5IGJlbG93XG4gICAgW1xuICAgICAgRm9ybShcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBmb3JtSWQsXG4gICAgICAgICAgbm9WYWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgICBvbnN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgaGFuZGxlRm9ybVN1Ym1pdChldmVudCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIEVtYWlsSW5wdXQoKSxcbiAgICAgICAgICBDb3VudHJ5SW5wdXQoKSxcbiAgICAgICAgICBaaXBDb2RlSW5wdXQoKSxcbiAgICAgICAgICBQYXNzd29yZElucHV0KCksXG4gICAgICAgICAgQ29uZmlybVBhc3N3b3JkSW5wdXQoKSxcbiAgICAgICAgICBTdWJtaXRCdXR0b24oKSxcbiAgICAgICAgICBEaXYoe1xuICAgICAgICAgICAgaW5uZXJIVE1MOiBgJHtcbiAgICAgICAgICAgICAgU3Bhbih7IGNsYXNzTmFtZTogXCJyZXF1aXJlZC1tYXJrZXJcIiwgaW5uZXJUZXh0OiBcIipcIiB9KS5vdXRlckhUTUxcbiAgICAgICAgICAgIH0gaW5kaWNhdGVzIGEgcmVxdWlyZWQgZmllbGRgLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZWRGb3JtO1xuIiwiaW1wb3J0IHtcbiAgc2hvd0NvdW50cnlFcnJvcixcbiAgY291bnRyeUlzVmFsaWQsXG59IGZyb20gXCIuL0NvdW50cnlJbnB1dC9jb3VudHJ5LWlucHV0LXZhbGlkYXRpb25cIjtcblxuaW1wb3J0IHtcbiAgc2hvd0VtYWlsRXJyb3IsXG4gIGVtYWlsSXNWYWxpZCxcbn0gZnJvbSBcIi4vRW1haWxJbnB1dC9lbWFpbC1pbnB1dC12YWxpZGF0aW9uXCI7XG5cbmltcG9ydCB7XG4gIHNob3daaXBDb2RlRXJyb3IsXG4gIHppcENvZGVJc1ZhbGlkLFxufSBmcm9tIFwiLi9JbnB1dC96aXAtY29kZS1pbnB1dC12YWxpZGF0aW9uXCI7XG5pbXBvcnQge1xuICBjb25maXJtUGFzc3dvcmRJc1ZhbGlkLFxuICBwYXNzd29yZElzVmFsaWQsXG4gIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcixcbiAgc2hvd1Bhc3N3b3JkRXJyb3IsXG59IGZyb20gXCIuL1Bhc3N3b3JkSW5wdXRzL3Bhc3N3b3Jkcy12YWxpZGF0aW9uXCI7XG5cbmZ1bmN0aW9uIGdldEZvcm0oKSB7fVxuXG5mdW5jdGlvbiBhbGxJbnB1dHNWYWxpZChmb3JtKSB7XG4gIGNvbnN0IGlucHV0cyA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIiksXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKSxcbiAgXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGlucHV0VmFsaWRpdHkgPSBpbnB1dHNbaV0udmFsaWRpdHkudmFsaWQ7XG4gICAgaWYgKCFpbnB1dFZhbGlkaXR5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudCkge1xuICBpZiAoYWxsSW5wdXRzVmFsaWQoKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJTVUJNSVRURUQhXCIpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZW1haWxJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgfVxuICAgIGlmICghY291bnRyeUlzVmFsaWQoKSkge1xuICAgICAgc2hvd0NvdW50cnlFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoIXppcENvZGVJc1ZhbGlkKCkpIHtcbiAgICAgIHNob3daaXBDb2RlRXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKCFwYXNzd29yZElzVmFsaWQoKSkge1xuICAgICAgc2hvd1Bhc3N3b3JkRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpcm1QYXNzd29yZElzVmFsaWQoKSkge1xuICAgICAgc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVycm9yKGVycm9yRWxlbWVudCkge1xuICBlcnJvckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgZXJyb3JFbGVtZW50LmNsYXNzTmFtZSA9IFwiZXJyb3JcIjtcbn1cbiIsIi8qKlxuICogVGhpcyBGdW5jdGlvbiBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhIGRvbSBlbGVtZW50IHdpdGggaXRzIGluaXRpYWwgYXR0cmlidXRlcyBhbmQgY2hpbGQgZWxlbWVudHMgZGVmaW5lZCBieSBhIHBhc3NlZC1pbiBvYmplY3QgYW5kIGFycmF5IG9mIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVN0ciB0aGUgdGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgcmV0dXJuZWQgeW91IHdvdWxkIHVzZSBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KClcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc09iaiAob3B0aW9uYWwpIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbml0aWFsIHByb3BlcnRpZXMvYXR0cmlidXRlcyB5b3Ugd2FudCB0aGUgZWxlbWVudCB0byBoYXZlXG4gKiBAcGFyYW0ge2FycmF5fSBjaGlsZEFyciAob3B0aW9uYWwpIGFuIG9mIGVsZW1lbnQgb2JqZWN0cyB0byBiZSBhcHBlbmRlZCBhcyBjaGlsZHJlbiB0byB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSB0aGUgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgY3JlYXRlZCBpbiBtZW1vcnlcbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICAvLyBTb21lIGF0dHJpYnV0ZXMgY2FuIG9ubHkgYmUgc2V0IHVzaW5nIHRoZSBFbGVtZW50LnNldEF0dHJpYnV0ZSgpIG1ldGhvZC5cbiAgLy8gSWYgaXQgaXMgaW4gdGhlIHByb3BzT2JqIE9iamVjdC5hc3NpZ24gd2lsbCBmYWlsLiBXZSdsbCByZW1vdmUgaXQgZnJvbSB0aGVcbiAgLy8gcHJvcHMgb2JqZWN0IGhlcmUgYW5kIGFzc2lnbiB0aGVtIHRvIHRoZSBwYXJlbnQgZWxlbWVudCBiZWZvcmUgaXQgaXMgcmV0dXJuZWQuXG4gIC8vIFRoZXNlIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzIGxpc3QgZm9yIHByb2Nlc3NpbmcuXG4gIGxldCBzZXRBdHRyaWJ1dGVQcm9wZXJ0aWVzID0gW1wibGlzdFwiXTtcbiAgbGV0IHByb3BlcnRpZXMgPSBbXTtcbiAgc2V0QXR0cmlidXRlUHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBwcm9wc09iaikge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc09ialtwcm9wZXJ0eV07XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goeyBuYW1lOiBwcm9wZXJ0eSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgZGVsZXRlIHByb3BzT2JqW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGJhc2VkIG9uIHRoZSB0eXBlIHN0cmluZyBwcm92aWRlZFxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGVTdHIpLFxuICAgIHByb3BzT2JqXG4gICk7XG5cbiAgLy8gQWRkIHBhc3NlZCBpbiBjaGlsZCB0byBhcnJheSBpZiBpdCBpcyBub3QgYWxyZWFkeVxuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvIHRoZSBlbGVtZW50XG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICAvLyBBcHBseSBwcm9wZXJ0aWVzIHdpdGggc2V0QXR0cmlidXRlIGlmIG5lZWRlZFxuICBpZiAocHJvcGVydGllcy5sZW5ndGgpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eS5uYW1lLCBwcm9wZXJ0eS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbi8vICBDT01NT04gRUxFTUVOVFNcbmV4cG9ydCBjb25zdCBBID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImFcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQXJ0aWNsZSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJhcnRpY2xlXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiYlwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJvZHlcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImJ1dHRvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBCciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJiclwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBEaXYgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiZGl2XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IERhdGFsaXN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImRhdGFsaXN0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZpZWxkc2V0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImZpZWxkc2V0XCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb290ZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJmb3JtXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgxXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgyID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgyXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImgzXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJoZWFkZXJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSHIgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaHJcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJpbWdcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwiaW5wdXRcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwibGFiZWxcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgTGVnZW5kID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcImxlZ2VuZFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBMaSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJsaVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm1haW5cIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT2wgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwib2xcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcIm9wdGlvblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBQID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInBcIiwgcHJvcHMgPyB7IC4uLnByb3BzIH0gOiB7fSwgY2hpbGRyZW4gPyBbLi4uY2hpbGRyZW5dIDogW10pO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT5cbiAgRWxlbWVudChcInNlbGVjdFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBTdHJvbmcgPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3Ryb25nXCIsIHByb3BzID8geyAuLi5wcm9wcyB9IDoge30sIGNoaWxkcmVuID8gWy4uLmNoaWxkcmVuXSA6IFtdKTtcblxuZXhwb3J0IGNvbnN0IFNwYW4gPSAocHJvcHMsIGNoaWxkcmVuKSA9PlxuICBFbGVtZW50KFwic3BhblwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG5cbmV4cG9ydCBjb25zdCBVbCA9IChwcm9wcywgY2hpbGRyZW4pID0+XG4gIEVsZW1lbnQoXCJ1bFwiLCBwcm9wcyA/IHsgLi4ucHJvcHMgfSA6IHt9LCBjaGlsZHJlbiA/IFsuLi5jaGlsZHJlbl0gOiBbXSk7XG4iLCJleHBvcnQgY29uc3QgZ2l0aHViSW5mbyA9IHtcbiAgcmVwb05hbWU6IFwiYm9pbGVycGxhdGUtd2VicGFja1wiLFxufTtcbiIsImltcG9ydCB7IGFwcGx5V2luZG93TGlzdGVuZXJzIH0gZnJvbSBcIi4vdWktd2luZG93XCI7XG5pbXBvcnQgeyBjbGlja0Nhcm91c2VsUGxheSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL19jdXN0b20tY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL3VpL2Nhcm91c2VsLXVpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUluaXRpYWxTdGF0ZSgpIHtcbiAgYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKTtcbiAgY2xpY2tDYXJvdXNlbFBsYXkoKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICB4czogMCxcbiAgc206IDQ4MCxcbiAgbWQ6IDcyMCxcbiAgbGc6IDk2MCxcbiAgeGw6IDEyMDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlXaW5kb3dMaXN0ZW5lcnMoKSB7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9fZWxlbWVudHMvRWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQW5kQWRkRWxsaXBzZSA9IChzdHJpbmcsIG51bUNoYXJzVG9LZWVwKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbnVtQ2hhcnNUb0tlZXApLnRyaW1FbmQoKSArIFwiLi4uXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gc2V0dXAgYSB0aW1lclxuICBsZXQgdGltZW91dDtcblxuICAvLyByZXR1cm4gYSBmdW5jdGlvbiB0byBydW4gZGVib3VuY2VkXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy9zZXR1cCBhcmdzXG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIHRpbWVyIGNhbmNlbCBpdFxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dCk7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgdGhlIG5ldyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXN0Q29udGVudEFycihudW1DaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkobnVtQ2hpbGRyZW4pXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChlbGVtKSA9PlxuICAgICAgRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiZGlzcGxheS1iIG1iLTFcIixcbiAgICAgICAgaW5uZXJUZXh0OlxuICAgICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3IsIHVsbGFtIGFkLCBtYXhpbWUgZW5pbSBzZXF1aSBzdW50IHF1byBmYWNpbGlzIGlsbG8gZXZlbmlldCBsYXVkYW50aXVtIHF1YWUgcmVwZWxsZW5kdXMgZG9sb3J1bSBvbW5pcyBtaW5pbWEgZHVjaW11cyBhcmNoaXRlY3RvISBCZWF0YWUsIHZlbCBhc3N1bWVuZGEuXCIsXG4gICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudFwiO1xuaW1wb3J0IHsgYXBwbHlJbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9wYWdlLWxvZ2ljL3VpL3VpLWluaXRpYWwtc3RhdGVcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuXG5hcHBseUluaXRpYWxTdGF0ZSgpO1xuXG4vLyBkZWJ1Z2dpbmdcbmNvbnN0IGRlYnVnZ2luZyA9IHRydWU7XG5pZiAoZGVidWdnaW5nKSB7XG4gIC8vXG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsIkhlYWRlciIsIkR5bmFtaWNGb290ZXIiLCJNYWluU2VjdGlvbiIsIkNvbnRlbnQiLCJjb250ZW50IiwiaWQiLCJBIiwiRGl2IiwiSWNvbiIsImdpdGh1YkluZm8iLCJkeW5hbWljWWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkNvcHlyaWdodENvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJocmVmIiwicmVwb05hbWUiLCJGb290ZXIiLCJBdHRyaWJ1dGlvbnNDb250YWluZXIiLCJUT1BDb250YWluZXIiLCJFeHBhbmRhYmxlUGFuZWwiLCJOb25FeHBhbmRhYmxlUGFuZWwiLCJJY29uc0V4cGxhbmF0aW9uIiwiY29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImlubmVySFRNTCIsIm91dGVySFRNTCIsInBhcmVudENvbnRhaW5lciIsImgxIiwib3RoZXJDbGFzc2VzIiwiaGVhZGVyIiwiZ2VuZXJhdGVUZXN0Q29udGVudEFyciIsIkN1c3RvbUljb25zRGlzcGxheSIsIkltYWdlQ2Fyb3VzZWwiLCJWYWxpZGF0ZWRGb3JtIiwiTWFpbiIsIm1haW4iLCJFeHBhbmRhYmxlUGFuZWxUaXRsZSIsIkV4cGFuZGFibGVQYW5lbENvbnRlbnQiLCJ2NCIsInV1aWR2NCIsInByb3BzIiwiY29tcG9uZW50SWQiLCJwYW5lbCIsIkJ1dHRvbiIsInRvZ2dsZUV4cGFuc2lvbiIsImV4cGFuc2lvbkNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlRXhwYW5zaW9uQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwib25jbGljayIsImljb25DbGFzcyIsImljb24iLCJDYXJvdXNlbE5hdkluZGljYXRvciIsIkNhcm91c2VsUGxheVBhdXNlQ29udGFpbmVyIiwiQ2Fyb3VzZWxOYXYiLCJpbWFnZURhdGEiLCJtYXAiLCJvYmoiLCJpbmRleCIsImltYWdlSWQiLCJ1dWlkIiwic3RhcnRzQWN0aXZlIiwiaXNBY3RpdmUiLCJjbGlja0Nhcm91c2VsTmF2IiwiUGxheUJ1dHRvbiIsIlBhdXNlQnV0dG9uIiwiSW1nIiwiQ2Fyb3VzZWxTbGlkZSIsImltYWdlU291cmNlIiwic3JjIiwiVWwiLCJDYXJvdXNlbFRyYWNrIiwiQ2Fyb3VzZWxUcmFja0NvbnRhaW5lciIsIkxlZnRDYXJvdXNlbEJ1dHRvbiIsIlJpZ2h0Q2Fyb3VzZWxCdXR0b24iLCJjYXJvdXNlbCIsImNsaWNrQ2Fyb3VzZWxMZWZ0Iiwic2hhcmVkQ2xhc3NlcyIsImJ1dHRvbiIsImNsaWNrQ2Fyb3VzZWxSaWdodCIsImdldFJhbmRvbUludCIsImdldFBpY3N1bUlkIiwibWluIiwibWF4IiwiZXhjbHVzaW9ucyIsInJhbmRJbnQiLCJpbmNsdWRlcyIsImdldFJhbmRvbUltYWdlU3JjIiwid2lkdGgiLCJoZWlnaHQiLCJudW1JbWFnZXMiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZVNvdXJjZXMiLCJBcnJheSIsImZpbGwiLCJlIiwiY2xpY2tDYXJvdXNlbFBsYXkiLCJjbGlja0Nhcm91c2VsUGF1c2UiLCJnZXRBbGxDYXJvdXNlbFNsaWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZE5vZGVzIiwiZ2V0QWxsQ2Fyb3VzZWxTbGlkZUlkcyIsImVsZW0iLCJnZXRBbGxDYXJvdXNlbE5hdkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Q3VycmVudFNsaWRlSW5kZXgiLCJhbGxTbGlkZUlkcyIsImN1cnJlbnRTbGlkZUlkIiwiY3VycmVudFNsaWRlSW5kZXgiLCJpbmRleE9mIiwiZ2V0UHJldmlvdXNTbGlkZUluZGV4IiwicHJldmlvdXNTbGlkZUluZGV4IiwiY29ycmVjdGVkSW5kZXgiLCJsZW5ndGgiLCJnZXROZXh0U2xpZGVJbmRleCIsIm5leHRTbGlkZUluZGV4IiwiZ290b1NwZWNpZmljU2xpZGUiLCJhbGxOYXZCdXR0b25zIiwic2VsZWN0ZWROYXZCdXR0b24iLCJzZWxlY3RlZFNsaWRlIiwiYWxsU2xpZGVzIiwiZm9yRWFjaCIsInNsaWRlIiwicmVtb3ZlIiwiYWRkIiwicmVwbGFjZSIsImhhbmRsZUF1dG9BZHZhbmNlIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwiaW50ZXJ2YWwiLCJtb2RlIiwicGxheWluZyIsIndpbmRvdyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkxhYmVsIiwiU3BhbiIsIkRhdGFsaXN0IiwiT3B0aW9uIiwiU2VsZWN0IiwiY291bnRyaWVzIiwiaGFuZGxlQ291bnRyeUlucHV0IiwiY29tcG9uZW50VXVpZCIsImNvdW50cnlJbnB1dElkIiwiQ291bnRyeUlucHV0IiwiZm9yIiwicmVxdWlyZWQiLCJvbmlucHV0IiwiY291bnRyeSIsImNsZWFyRXJyb3IiLCJnZXRDb3VudHJ5SW5wdXQiLCJnZXRDb3VudHJ5SW5wdXRFcnJvciIsImNvdW50cnlJc1ZhbGlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsImVycm9yIiwic2hvd0NvdW50cnlFcnJvciIsImVycm9yTWVzc2FnZSIsIklucHV0IiwiaGFuZGxlRW1haWxJbnB1dCIsImVtYWlsSW5wdXRJZCIsIkVtYWlsSW5wdXQiLCJ0eXBlIiwiZ2V0RW1haWxJbnB1dCIsImdldEVtYWlsSW5wdXRFcnJvciIsImVtYWlsSXNWYWxpZCIsInNob3dFbWFpbEVycm9yIiwiZW1haWwiLCJ2YWx1ZU1pc3NpbmciLCJoYW5kbGVaaXBDb2RlSW5wdXQiLCJ6aXBDb2RlSW5wdXRJZCIsIlppcENvZGVJbnB1dCIsInBhdHRlcm4iLCJnZXRaaXBDb2RlSW5wdXQiLCJnZXRaaXBDb2RlSW5wdXRFcnJvciIsInppcENvZGVJc1ZhbGlkIiwic2hvd1ppcENvZGVFcnJvciIsInppcENvZGUiLCJoYW5kbGVDb25maXJtUGFzc3dvcmRJbnB1dCIsImNvbmZpcm1QYXNzd29yZElucHV0SWQiLCJDb25maXJtUGFzc3dvcmRJbnB1dCIsImhhbmRsZVBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZFJlZ2V4U3RyaW5nIiwicGFzc3dvcmRJbnB1dElkIiwiUGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkUmVnZXgiLCJSZWdFeHAiLCJnZXRQYXNzd29yZElucHV0IiwiZ2V0UGFzc3dvcmRJbnB1dEVycm9yIiwicGFzc3dvcmRJc1ZhbGlkIiwiZ2V0UGFzc3dvcmRJbnB1dFZhbHVlIiwidmFsdWUiLCJzaG93UGFzc3dvcmRFcnJvciIsInBhc3N3b3JkIiwiZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXQiLCJnZXRDb25maXJtUGFzc3dvcmRJbnB1dEVycm9yIiwiZ2V0Q29uZmlybVBhc3N3b3JkSW5wdXRWYWx1ZSIsImNvbmZpcm1QYXNzd29yZElzVmFsaWQiLCJpbnB1dCIsInNldEN1c3RvbVZhbGlkaXR5Iiwic2hvd0NvbmZpcm1QYXNzd29yZEVycm9yIiwiU3VibWl0QnV0dG9uIiwiRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJmb3JtSWQiLCJub1ZhbGlkYXRlIiwib25zdWJtaXQiLCJldmVudCIsImdldEZvcm0iLCJhbGxJbnB1dHNWYWxpZCIsImZvcm0iLCJpbnB1dHMiLCJpIiwiaW5wdXRWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImVycm9yRWxlbWVudCIsInR5cGVTdHIiLCJwcm9wc09iaiIsImNoaWxkQXJyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwic2V0QXR0cmlidXRlUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eSIsInB1c2giLCJuYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlRWxlbWVudCIsImlzQXJyYXkiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwiQXJ0aWNsZSIsIkIiLCJCb2R5IiwiQnIiLCJGaWVsZHNldCIsIkgxIiwiSDIiLCJIMyIsIkhyIiwiSSIsIkxlZ2VuZCIsIkxpIiwiT2wiLCJQIiwiU3Ryb25nIiwiVGV4dGFyZWEiLCJhcHBseVdpbmRvd0xpc3RlbmVycyIsImFwcGx5SW5pdGlhbFN0YXRlIiwiZGVib3VuY2UiLCJicmVha1BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJvbnJlc2l6ZSIsInRydW5jYXRlQW5kQWRkRWxsaXBzZSIsInN0cmluZyIsIm51bUNoYXJzVG9LZWVwIiwic2xpY2UiLCJ0cmltRW5kIiwiZm4iLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFwcGx5IiwiY2FwaXRhbGl6ZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJudW1DaGlsZHJlbiIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJyYW5kb20iLCJib2R5IiwiZGVidWdnaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> current-components-refactor
