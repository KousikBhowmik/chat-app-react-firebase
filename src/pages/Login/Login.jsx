import React, { useState } from "react";
import "./login.css";
import assert from "../../assets/assets.js";
import { singup, loginUser, logOut } from "../../config/firebase.js";

const login = () => {
  const [currState, setCurrState] = useState("Sing up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sing up") {
      singup(username, email, password);
    } else {
      loginUser(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assert.logo_big} className="logo" />
      <form onSubmit={submitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sing up" ? (
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            className="form-input"
            placeholder="Username"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-input"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-input"
          placeholder="Password"
          required
        />
        <button type="submit">
          {currState === "Sing up" ? "Sing up" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            {currState === "Sing up"
              ? "Already have a account"
              : "Create new account"}
            <span
              onClick={() => {
                if (currState === "Sing up") {
                  setCurrState("Login");
                } else {
                  setCurrState("Sing up");
                }
              }}
            >
              Click here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
