import React from "react";

import "./Button.css";

function Button(props) {
  return <button className="button" onClick={props.action}>{props.name}</button>;
}

export default Button;
