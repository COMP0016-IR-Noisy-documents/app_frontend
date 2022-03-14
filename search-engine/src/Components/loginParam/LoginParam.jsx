import React from "react";
import { IconContext } from "react-icons/lib";

import "./LoginParam.css";

function LoginParam(props) {
  return (
    <div className="login-param">
      <h2>{props.name}</h2>
      <div className="form-icon">
        <IconContext.Provider value={{ className: "icon" }}>
          {props.IconContext}
        </IconContext.Provider>
        <input
          type={props.type}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.modifyValue(props.name, e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default LoginParam;
