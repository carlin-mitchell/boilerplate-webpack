// COMPONENT IMPORTS
import Element from "../../../Element";
import Icon from "../../../base-elements/Icon";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanel = (props) => {
  const { name } = props;
  const titleDiv = Element("div", { innerText: name });

  const otherClasses = "";
  const panel = Element(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [Icon("icon-up-down"), titleDiv]
  );
  return panel;
};

export default ExpandablePanel;
