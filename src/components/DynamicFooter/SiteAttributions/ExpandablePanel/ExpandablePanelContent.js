// COMPONENT IMPORTS
import Element from "../../../Element";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { subItems, componentId } = props;
  subItems = subItems ? subItems : [];

  const otherClasses = "";
  const parentElement = Element(
    "div",
    {
      id: `expandable-content-${componentId}`,
      className: "expandable-panel-content" + " " + otherClasses,
    },
    // add child elements to the array below
    [...subItems.map((item) => Element("div", { innerText: item.name }))]
  );
  return parentElement;
};

export default ExpandablePanelContent;
