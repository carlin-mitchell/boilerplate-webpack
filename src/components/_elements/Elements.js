/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
export const Element = (typeStr, propsObj, childArr = null) => {
  // list is an attribute that can oly be set using the Element.setAttribute() method.
  // If it is in the propsObj Object.assign will fail. We'll remove it from the props Object here and
  // Assign it to the parent element before it is returned
  let list;
  if ("list" in propsObj) {
    list = propsObj.list;
    delete propsObj.list;
  }

  if (childArr && !Array.isArray(childArr)) {
    childArr = [childArr];
  }

  const parentElement = Object.assign(
    document.createElement(typeStr),
    propsObj
  );

  if (childArr) {
    childArr.forEach((child) => parentElement.appendChild(child));
  }

  if (list) {
    parentElement.setAttribute("list", list);
  }

  return parentElement;
};

//  COMMON ELEMENTS
export const A = (props, children) =>
  Element("a", props ? { ...props } : {}, children ? [...children] : []);

export const Article = (props, children) =>
  Element("article", props ? { ...props } : {}, children ? [...children] : []);

export const B = (props, children) =>
  Element("b", props ? { ...props } : {}, children ? [...children] : []);

export const Body = (props, children) =>
  Element("body", props ? { ...props } : {}, children ? [...children] : []);

export const Button = (props, children) =>
  Element("button", props ? { ...props } : {}, children ? [...children] : []);

export const Br = (props, children) =>
  Element("br", props ? { ...props } : {}, children ? [...children] : []);

export const Div = (props, children) =>
  Element("div", props ? { ...props } : {}, children ? [...children] : []);

export const Datalist = (props, children) =>
  Element("datalist", props ? { ...props } : {}, children ? [...children] : []);

export const Fieldset = (props, children) =>
  Element("fieldset", props ? { ...props } : {}, children ? [...children] : []);

export const Footer = (props, children) =>
  Element("footer", props ? { ...props } : {}, children ? [...children] : []);

export const Form = (props, children) =>
  Element("form", props ? { ...props } : {}, children ? [...children] : []);

export const H1 = (props, children) =>
  Element("h1", props ? { ...props } : {}, children ? [...children] : []);

export const H2 = (props, children) =>
  Element("h2", props ? { ...props } : {}, children ? [...children] : []);

export const H3 = (props, children) =>
  Element("h3", props ? { ...props } : {}, children ? [...children] : []);

export const Header = (props, children) =>
  Element("header", props ? { ...props } : {}, children ? [...children] : []);

export const Hr = (props, children) =>
  Element("hr", props ? { ...props } : {}, children ? [...children] : []);

export const I = (props, children) =>
  Element("i", props ? { ...props } : {}, children ? [...children] : []);

export const Img = (props, children) =>
  Element("img", props ? { ...props } : {}, children ? [...children] : []);

export const Input = (props, children) =>
  Element("input", props ? { ...props } : {}, children ? [...children] : []);

export const Label = (props, children) =>
  Element("label", props ? { ...props } : {}, children ? [...children] : []);

export const Legend = (props, children) =>
  Element("legend", props ? { ...props } : {}, children ? [...children] : []);

export const Li = (props, children) =>
  Element("li", props ? { ...props } : {}, children ? [...children] : []);

export const Main = (props, children) =>
  Element("main", props ? { ...props } : {}, children ? [...children] : []);

export const Ol = (props, children) =>
  Element("ol", props ? { ...props } : {}, children ? [...children] : []);

export const Option = (props, children) =>
  Element("option", props ? { ...props } : {}, children ? [...children] : []);

export const P = (props, children) =>
  Element("p", props ? { ...props } : {}, children ? [...children] : []);

export const Strong = (props, children) =>
  Element("strong", props ? { ...props } : {}, children ? [...children] : []);

export const Span = (props, children) =>
  Element("span", props ? { ...props } : {}, children ? [...children] : []);

export const Textarea = (props, children) =>
  Element("textarea", props ? { ...props } : {}, children ? [...children] : []);

export const Ul = (props, children) =>
  Element("ul", props ? { ...props } : {}, children ? [...children] : []);
