import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { close_alert } from "../../redux/action";

import Button from "../button/Button";

import "./alert.css";

// By Thatchawin Leelawat


function Alert() {
  const isOpen = useSelector(state => state.AlertReducer.isOpen );
  const header = useSelector(state => state.AlertReducer.header );
  const content = useSelector(state => state.AlertReducer.content );
  const buttonContent = useSelector(state => state.AlertReducer.buttonContent );
  const dispatch = useDispatch();

  return isOpen ? (
    <div className="alert-box">
      <div className="alert">
        <div className="alert-header">{header}</div>
        <div className="alert-content">{content}</div>
        <Button action={() => dispatch(close_alert())} name={buttonContent} />
      </div>
    </div>
  ) : null;
}

export default Alert;
