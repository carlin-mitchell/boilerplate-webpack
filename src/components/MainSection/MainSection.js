// COMPONENT IMPORTS
import { generateTestContentArr } from "../../utils";
import CustomIconsDisplay from "../_custom-components/CustomIconsDisplay/CustomIconsDisplay";
import ImageCarousel from "../_custom-components/ImageCarousel/ImageCarousel";
import { Main } from "../_elements/Elements";

// LOGIC IMPORTS
//

// COMPONENT METHODS
// function someMethod() {
//   //
// }

const MainSection = () => {
  const otherClasses = "";
  const main = Main(
    {
      id: "main-section",
      className: "" + " " + otherClasses,
    },
    // add child elements to the array below
    [CustomIconsDisplay(), ImageCarousel()]
  );
  return main;
};

export default MainSection;
