// COMPONENT IMPORTS
import Element from "../../Element";
import Icon from "../../custom-components/Icon";

import ExpandablePanel from "../../custom-components/ExpandablePanel/ExpandablePanel";
import NonExpandablePanel from "../../custom-components/ExpandablePanel/NonExpandablePanel";

import IconsExplanation from "./IconsExpnanation";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const AttributionsContainer = () => {
  const otherClasses = "";
  const container = Element(
    "div",
    { className: "attributions-container" + " " + otherClasses },
    // add child elements to the array below
    [
      ExpandablePanel({
        title: "Site Attributions",
        children: [
          ExpandablePanel({
            title: "Icons",
            children: [
              NonExpandablePanel({
                title: "Github",
                href: "https://github.com/logos",
                children: [Icon("icon-github-cat")],
              }),
              ExpandablePanel({
                title: "All other Icons",
                children: [IconsExplanation()],
              }),
            ],
          }),
        ],
      }),
    ]
  );
  return container;
};

export default AttributionsContainer;
