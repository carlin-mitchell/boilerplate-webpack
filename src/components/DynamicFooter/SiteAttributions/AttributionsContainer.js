// COMPONENT IMPORTS
import Element from "../../Element";
import Icon from "../../base-elements/Icon";
import { v4 as uuidv4 } from "uuid";

import { attributionData } from "./data/attributions-data";

import ExpandablePanelContainer from "./ExpandablePanel/ExpandablePanel";
import NonExpandablePanelContainer from "./ExpandablePanel/NonExpandablePanel";

const componentId = uuidv4();

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const AttributionsContainer = () => {
  const panelTitle = Element(
    "a",
    {
      className: "expandable-panel-title",
      innerText: "Site Attributions",
    },
    [Icon("icon-up-down")]
  );

  const otherClasses = "";
  const container = Element(
    "div",
    { className: "attributions-container" + " " + otherClasses },
    // add child elements to the array below
    [
      ...attributionData.map((obj) => {
        if (obj.subItems) {
          console.log(obj.name, "expandable");
          return ExpandablePanelContainer(obj);
        } else {
          console.log(obj.name, "non expandable");
          return NonExpandablePanelContainer(obj);
        }
      }),
    ]
  );
  return container;
};

export default AttributionsContainer;
