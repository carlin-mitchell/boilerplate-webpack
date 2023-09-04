// COMPONENT IMPORTS
import { Div, A } from "../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const TOPContainer = () => {
  const otherClasses = "";
  const parentElement = Div(
    "div",
    {
      className: "top-container" + " " + otherClasses,
      innerText: "Inspired By:",
    },
    // add child elements to the array below
    [
      A({
        href: "https://www.theodinproject.com/",
        className: "top-link",
        innerText: "The Odin Project",
      }),
    ]
  );
  return parentElement;
};

export default TOPContainer;
