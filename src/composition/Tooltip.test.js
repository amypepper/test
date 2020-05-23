import React from "react";
// import { render } from "@testing-library/react";
import Tooltip from "./Tooltip";
import ReactDOM from "react-DOM";

it("renders without crashing", () => {
  // first create a DOM element to render the component into
  const div = document.createElement("div");

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Tooltip />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
