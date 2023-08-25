// COMPONENT IMPORTS
import Element from "../../../Element";

import { v4 as uuidv4 } from "uuid";
import Icon from "../../../base-elements/Icon";

const componentId = uuidv4();
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const NonExpandablePanelContainer = (props) => {
  let { name, icons } = props;
  icons = icons ? icons : [];

  const otherClasses = "";
  const panel = Element(
    "a",
    { className: "non-expandable-panel" + " " + otherClasses, innerText: name },
    // add child elements to the array below
    [...icons.map((icon) => Icon(icon))]
  );
  return panel;
};

export default NonExpandablePanelContainer;
