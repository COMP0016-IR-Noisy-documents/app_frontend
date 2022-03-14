import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterAPI from "../../api/register";

import { BiLockOpenAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import Head from "../../Components/head/Head";
import LoginParam from "../../Components/loginParam/LoginParam";
import Button from "../../Components/button/Button";
import Alert from "../../Components/alert/alert";

import "./Signup.css";
import { open_alert } from "../../redux/action";

function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(password, confirmPassword);
    if (confirmPassword === password) {
      RegisterAPI.register({
        username: userName,
        password: password,
        email: email,
        displayname: displayName,
      })
        .then((status) => handleResponse(status))
        .catch((error) => console.log("error", error));
    } else {
      dispatch(
        open_alert(
          true,
          "Wrong Password",
          "Password does not match the password confirmation",
          "close"
        )
      );
    }
  }

  function handleResponse(status) {
    console.log(status);
    if (status === 200) {
      dispatch(
        open_alert(
          true,
          "Success",
          "You have been successfully register",
          "close"
        )
      );
    } else if (status === 500) {
      dispatch(
        open_alert(
          true,
          "Error",
          "The server encountered an internal error and was unable to complete your request. Either the server is overloaded orthere is an error in the application.",
          "close"
        )
      );
    } else {
        console.log([ true,
            "Error",
            "The username or email has been taken",
            "close"]);
      dispatch(
        open_alert(
          true,
          "Error",
          "The username or email has been taken",
          "close"
        )
      );
    }
  }

  function modifyValue(name, value) {
    if (name === "Username") {
      setUserName(value);
    } else if (name === "Password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "Email") {
      setEmail(value);
    }
  }

  return (
    <div>
      <Alert />
      <Head isSearch={true} />

      <form id="signup" onSubmit={handleSubmit}>
        <h1>Signup</h1>
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
        <LoginParam
          name="confirmPassword"
          IconContext={<BiLockOpenAlt />}
          type="password"
          value={confirmPassword}
          placeholder="Confirm your password"
          modifyValue={modifyValue}
        />
        <LoginParam
          name="displayName"
          IconContext={<BiLockOpenAlt />}
          type="text"
          value={displayName}
          placeholder="Type your display name"
          modifyValue={modifyValue}
        />
        <LoginParam
          name="Email"
          IconContext={<BiLockOpenAlt />}
          type="email"
          value={email}
          placeholder="Type your email"
          modifyValue={modifyValue}
        />

        <div className="term-and-agreement">
          <p>By clicking on signup button</p>
          <p>I agree to the platform Terms of Service</p>
          <p>I agree to the platform Privacy Notice</p>
        </div>

        <Button name="signup" />
      </form>
    </div>
  );
}

export default Signup;
