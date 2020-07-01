import React from "react";
import Split from "./composition/Split";
import "./composition/App.css";
import Tooltip from "./composition/Tooltip";

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip message="tooltip message" color="hotpink">
    ipsum
  </Tooltip>
);
const secondTooltip = (
  <Tooltip message="another tooltip message" color="#126BCC">
    officiis
  </Tooltip>
);

// function App() {
//   return (
//     <main className="App">
//       <React.StrictMode>
//         <Split className="left" flexBasis={3}>
//           This is the content for the left `Split`. Lorem {firstTooltip} dolor
//           amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere
//           officia?
//           <br />
//           <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
//         </Split>
//         <Split className="right" flexBasis={4}>
//           This is the content for the right `Split`. Inventore aliquid
//           cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga.
//           Aliquid quo possimus id soluta aspernatur.
//         </Split>
//       </React.StrictMode>
//     </main>
//   );
// }

// export default App;
