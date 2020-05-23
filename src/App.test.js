import React from "react";
// import { render } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-DOM";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Hello/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  // first create a DOM element to render the component into
  const div = document.createElement("div");

  // render the component; this is the actual test: if something is wrong it will fail here
  ReactDOM.render(<App />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
