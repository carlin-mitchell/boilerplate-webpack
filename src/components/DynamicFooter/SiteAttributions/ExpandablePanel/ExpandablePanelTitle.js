// COMPONENT IMPORTS
import Element from "../../../Element";
import Icon from "../../../base-elements/Icon";

// LOGIC IMPORTS
//

// COMPONENT METHODS
function toggleExpansion(componentId) {
  const expansionContent = document.getElementById(
    `expandable-content-${componentId}`
  );
  const toggleExpansionButton = document.getElementById(
    `expandable-content-button-${componentId}`
  );
  expansionContent.classList.toggle("expanded");
  toggleExpansionButton.classList.toggle("expanded");
}

const ExpandablePanelTitle = (props) => {
  const { name, componentId } = props;
  console.log(props);

  const expandButton = Element(
    "button",
    {
      id: `expandable-content-button-${componentId}`,
      onclick() {
        toggleExpansion(componentId);
      },
    },
    [Icon("icon-up-down")]
  );

  const otherClasses = "";
  const titleDiv = Element(
    "div",
    { className: "expandable-panel-title" + " " + otherClasses },
    [
      Element("div", {
        className: "display-i-b",
        innerText: name,
        onclick() {
          toggleExpansion(componentId);
        },
      }),
      expandButton,
    ]
  );

  return titleDiv;
};

export default ExpandablePanelTitle;
