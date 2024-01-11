import React from "react";
import ReactDOM from "react-dom/client";

// // Create+add element in a div using JS
// const root = document.querySelector("#root");
// const heading = document.createElement("h1");
// heading.setAttribute("id", "heading");
// heading.innerText = "Hello World from JavaScript";
// root.appendChild(heading);

// Create+add element in a div using React
// 3 params (tag, attributes object, content)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// Define root
const root = ReactDOM.createRoot(document.getElementById("root"));

//render/add the newly created element
root.render(heading);

//Nested HTML structure
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("p", { id: "para1" }, "I am Para 1"),
  React.createElement("p", { id: "para2" }, "I am para 2"),
]);
// root.render(parent);

// ReactElement using JSX
const titleElement = <h1 className="title">Calculator</h1>;

// React Functinal Component
const SubTitleComponent = function () {
  return (
    <>
      <h3>Mini-Calculator for Addition</h3>
      <h5>Made in India</h5>
    </>
  );
};

// React Functinal Component using arrow function
const ResultComponent = () => (
  <>
    <label>Result = </label>
    {10 + 20}
  </>
);

// Functinal component nesting another components and element.
const DisplayComponent = () => (
  <>
    {titleElement}
    {SubTitleComponent()}
    <ResultComponent />
  </>
);

root.render(<DisplayComponent />);
