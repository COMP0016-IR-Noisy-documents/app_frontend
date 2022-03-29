import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { log_in, open_alert, set_detail, load, unload } from "../../redux/action";

import loginAPI from "../../api/login";
import UserDetailAPI from "../../api/userDetail";
import Head from "../../Components/head/Head";
import LoginParam from "../../Components/loginParam/LoginParam";
import Button from "../../Components/button/Button";
import Alert from "../../Components/alert/alert";
import Load from "../../Components/load/Load";

import { BiLockOpenAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [cookies, setCookie] = useCookies(['name']);

  const isLogin = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // if the user is login they should not be able to redirect to this page
  useEffect(() => {
    if (isLogin) {
      navigate(`/`);
    }
  });

  async function handleSubmit(event) {
    dispatch(load());
    event.preventDefault();
    try {
      const response = await loginAPI.login({ username: userName, password: password });
      console.log(response);
      if (response.status !== 200) {
        dispatch(
          open_alert(
            true,
            "Error",
            "Wrong username or password.",
            "close"
          )
        );
      } else {
        const json = await response.json();
        console.log(json.token);
        migrateValue(json.token);
      }
      dispatch(unload());
    } catch (error) {
      console.log("error", error);
      dispatch(unload());
    }
  }

  async function migrateValue(token) {

    //store token in cookie 
    setCookie("jwtToken", token, {maxAge: 10500 });
    try {
      const response = await UserDetailAPI.getCurrentUserDetail(token);
      console.log(response);
      if (response.status === 200) {
        const resJson = await response.json()
        dispatch(
          set_detail(resJson.username, resJson.email, resJson.displayname, resJson.public_id)
        );
        dispatch(log_in());
      }  
    } catch (error) {
      console.log("error", error);

    }
  }


  function modifyValue(name, value) {
    if (name === "Username") {
      setUserName(value);
    } else if (name === "Password") {
      setPassword(value);
    }
  }

  return (
    (
      <div>
        <Load />
        <Alert />

        <Head isSearch={true} />
  
        <form id="login" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <LoginParam
            name="Username"
            IconContext={<BiUser />}
            type="text"
            value={userName}
            placeholder="Type your username"
            modifyValue={modifyValue}
          />
          <LoginParam
            name="Password"
            IconContext={<BiLockOpenAlt />}
            type="password"
            value={password}
            placeholder="Type your password"
            modifyValue={modifyValue}
          />
  
          <div className="reset-password ">forgot password</div>
  
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              value={remember}
              onClick={() => {
                setRemember(!remember);
              }}
            />
            <p>remember me</p>
          </div>
  
          <Button name="login" />
        </form>
      </div>
    )
  );

  
}

export default Login;
