// COMPONENT IMPORTS
import Element from "../../../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (subItems) => {
  const otherClasses = "";
  const parentElement = Element(
    "div",
    { className: "expandable-panel-content" + " " + otherClasses },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default ExpandablePanelContent;
