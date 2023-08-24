// COMPONENT IMPORTS
import Element from "../../Element";
import Icon from "../../base-elements/Icon";
import { v4 as uuidv4 } from "uuid";

import { attributionData } from "./data/attributions-data";

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
      panelTitle,
      ...attributionData.map((entry) =>
        Element("div", { innerText: entry.name, className: "attribution" }, [
          Icon("icon-up-down text"),
        ])
      ),
    ]
  );
  return container;
};

export default AttributionsContainer;
