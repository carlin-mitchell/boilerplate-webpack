// COMPONENT IMPORTS
import Element from "../../../Element";
import ExpandablePanelContainer from "./ExpandablePanel";
import NonExpandablePanelContainer from "./NonExpandablePanel";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const ExpandablePanelContent = (props) => {
  let { subItems, componentId } = props;
  subItems = subItems ? subItems : [];
  console.log(subItems);
  const otherClasses = "";

  const content = Element("div", { className: "content" }, [
    ...subItems.map((obj) => {
      if (obj.name.toLowerCase() === "other icons") {
        return NonExpandablePanelContainer(obj);
      } else if (obj.subItems && obj.subItems.length) {
        return ExpandablePanelContainer(obj);
      } else {
        return NonExpandablePanelContainer(obj);
      }
    }),
  ]);
  const parentElement = Element(
    "div",
    {
      id: `expandable-content-${componentId}`,
      className: "expandable-panel-content" + " " + otherClasses,
    },
    // add child elements to the array below
    [content]
  );
  return parentElement;
};

export default ExpandablePanelContent;
