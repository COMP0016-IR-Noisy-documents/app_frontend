import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LoginStatus.css";
import { log_out, reset_detail, reset_token } from "../../redux/action";

import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function LoginStatus() {
  const login = useSelector(state => state.LoginReducer );
  const displayname = useSelector(state => state.UserDetailReducer.username );
  const dispatch = useDispatch();

  function loginTrue() {
    return (
      <div className="login-true">
        <div className="login-true-user">
          <IconContext.Provider value={{ className: "person-icon" }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <div id="welcome-user">
            <div>Welcome</div>
            <div>{displayname}</div>
          </div>
        </div>
        <div
          className="login-disconnect"
          onClick={() => {
            dispatch(log_out());
            dispatch(reset_detail());
            dispatch(reset_token());
          }}
        >
          Disconnect
        </div>
      </div>
    );
  }

  function loginFalse() {
    return (
      <div className="login-false">
        <Link to="/login"><div className="login">Login</div></Link>
        <Link to="/signup"><div className="sign-up">Sign up</div></Link>
      </div>
    );
  }

  return (
    <div className="LoginStatus">{login ? loginTrue() : loginFalse()}</div>
  );
}

export default LoginStatus;
