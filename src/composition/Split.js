import React from "react";
import "./Split.css";

function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis };
  return (
    <React.StrictMode>
      <div className={combinedClassName} style={newStyles}>
        {props.children}
      </div>
    </React.StrictMode>
  );
}

export default Split;
