// COMPONENT IMPORTS
import Element from "../../../Element";
import Icon from "../../../base-elements/Icon";

import { v4 as uuidv4 } from "uuid";

const componentId = uuidv4();
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContainer = (props) => {
  const { name } = props;

  const expandButton = Element("button", {}, [Icon("icon-up-down")]);

  const titleDiv = Element("div", { className: "expandable-panel-title" }, [
    Element("div", { className: "display-i-b", innerText: name }),
    expandButton,
  ]);

  const otherClasses = "";
  const panel = Element(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [titleDiv]
  );
  return panel;
};

export default ExpandablePanelContainer;
