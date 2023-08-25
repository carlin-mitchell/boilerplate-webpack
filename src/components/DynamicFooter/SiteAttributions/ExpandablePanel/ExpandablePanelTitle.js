// COMPONENT IMPORTS
import Element from "../../../Element";
import Icon from "../../../base-elements/Icon";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelTitle = (name) => {
  //   const { name } = props;

  const expandButton = Element("button", {}, [Icon("icon-up-down")]);

  const otherClasses = "";
  const titleDiv = Element(
    "div",
    { className: "expandable-panel-title" + " " + otherClasses },
    [
      Element("div", { className: "display-i-b", innerText: name }),
      expandButton,
    ]
  );

  return titleDiv;
};

export default ExpandablePanelTitle;
