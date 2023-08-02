// COMPONENT IMPORTS
import Element from "../Element";
import TestHeader from "../TestHeader/TestHeader";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const Content = () => {
  const content = Element("div", { id: "content" });

  content.appendChild(TestHeader("If this is blue then, its all connected!"));
  return content;
};

export default Content;
