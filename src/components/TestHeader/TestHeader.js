const TestHeader = (content) => {
  const h1 = Object.assign(document.createElement("h1"), {
    className: "test-header bg-info p-sm",
    innerText: `${content}`,
  });

  return h1;
};

export default TestHeader;
