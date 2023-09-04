import { Element } from "../../_elements/Elements";
import Icon from "../Icon";
import { clickCarouselRight } from "./ui/carousel-ui";
// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const RightCarouselButton = (sharedClasses) => {
  const icon = Icon("icon-up-arrow rotate-90");

  const button = Element(
    "button",
    {
      id: ``,
      className: `carousel-button right ` + sharedClasses,
      onclick() {
        clickCarouselRight();
      },
    },
    // children
    [icon]
  );
  return button;
};

export default RightCarouselButton;
