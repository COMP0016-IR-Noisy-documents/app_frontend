import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from 'react-cookie';
import { Link, useLocation } from "react-router-dom";

import { log_out, reset_detail } from "../../redux/action";

import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import "./LoginStatus.css";

function LoginStatus() {
  const login = useSelector(state => state.LoginReducer );
  const displayname = useSelector(state => state.UserDetailReducer.displayname );
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/login" && cookies.jwtToken === undefined) {
      dispatch(log_out());
      dispatch(reset_detail());
    }
  });

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
            removeCookie('jwtToken');
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
