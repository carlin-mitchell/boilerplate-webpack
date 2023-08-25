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
  let { name, icons, href } = props;
  icons = icons ? icons : [];

  const otherClasses = "";
  const panel = Element(
    "a",
    {
      className: `${otherClasses} non-expandable-panel ${
        href ? "is-link" : ""
      }`,
      innerText: name,
    },
    // add child elements to the array below
    [...icons.map((icon) => Icon(icon))]
  );
  if (href) {
    panel.href = href;
  }
  return panel;
};

export default NonExpandablePanelContainer;
