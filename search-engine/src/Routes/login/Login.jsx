import React, { useState } from "react";
import loginAPI from "../../api/login";
import UserDetailAPI from "../../api/userDetail";
import { useDispatch } from "react-redux";
import { log_in, mod_token, open_alert, set_detail } from "../../redux/action";
import { BiLockOpenAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import Head from "../../Components/head/Head";
import LoginParam from "../../Components/loginParam/LoginParam";
import Button from "../../Components/button/Button";
import Alert from "../../Components/alert/alert";

import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    loginAPI
      .login({ username: userName, password: password })
      .then((response) => migrateValue(response.token))
      .catch((error) => console.log("error", error));
  }

  function migrateValue(token) {
    dispatch(mod_token(token));
    UserDetailAPI.getCurrentUserDetail(token)
      .then((response) =>
        dispatch(
          set_detail(response.username, response.email, response.displayname, response.public_id)
        )
      )
      .catch((error) => console.log("error", error));
    dispatch(log_in());
    dispatch(open_alert(true,
      "Logged in",
      "User has been sucessfully logged in to the system",
      "close"));
  }

  function modifyValue(name, value) {
    if (name === "Username") {
      setUserName(value);
    } else if (name === "Password") {
      setPassword(value);
    }
  }

  return (
    <div>
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
  );
}

export default Login;
