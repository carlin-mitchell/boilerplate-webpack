// COMPONENT IMPORTS
import Element from "../../../Element";

import ExpandablePanelTitle from "./ExpandablePanelTitle";
import ExpandablePanelContent from "./ExpandablePanelContent";

import { v4 as uuidv4 } from "uuid";

const componentId = uuidv4();
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContainer = (props) => {
  const { name, subItems } = props;
  const otherClasses = "";
  const panel = Element(
    "a",
    { className: "expandable-panel" + " " + otherClasses },
    // add child elements to the array below
    [
      ExpandablePanelTitle({ name, componentId }),
      ExpandablePanelContent({ subItems, componentId }),
    ]
  );
  return panel;
};

export default ExpandablePanelContainer;
