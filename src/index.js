import React from "react";
import ReactDOM from "react-dom";

import Accordion from "./state-drills/Accordion";
import "./index.css";
import sections from "./state-drills/sections";

ReactDOM.render(
  <Accordion sections={sections} />,
  document.getElementById("root")
);
