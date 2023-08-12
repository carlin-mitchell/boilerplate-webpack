import Icon from "../base-elements/Icon";
import Element from "../Element";

const sharedClasses = " font-lg";
const pencil = Icon("icon-my-pencil text-black" + sharedClasses);
const github = Icon("icon-github-cat text-red" + sharedClasses);
const hamburger = Icon("icon-hamburger-menu text-green" + sharedClasses);
const plus = Icon("icon-plus-sign text-purple" + sharedClasses);

const TestHeader = (content) => {
  const h1 = Element(
    "h1",
    {
      className: "test-header container text-primary bg-info p-1 mb-1 bw-2 br",
      innerText: `${content}`,
    },
    // children
    [pencil, github, hamburger, plus]
  );

  return h1;
};

export default TestHeader;
