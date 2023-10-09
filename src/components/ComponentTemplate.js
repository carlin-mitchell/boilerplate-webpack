import { v4 as uuidv4 } from "uuid";

// COMPONENT IMPORTS
import { Div } from "./_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

export const componentId = uuidv4();
export function getComponent() {
  return document.getElementById(componentId);
}

const Component = () => {
  //

  const parentElement = Div(
    { innerText: ``, className: `` },
    // add child elements to the array below
    []
  );
  return parentElement;
};

export default Component;
