/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./login.css";
import assert from "../../assets/assets.js";

const login = () => {

  const [currState, setCurrState] = useState("Sing up")


  return (
    <div className="login">
      <img src={assert.logo_big} className="logo" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sing up" ? (
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            required
          />
        ) : null}
        <input
          type="email"
          className="form-input"
          placeholder={currState === "Login" ? "Username or Email" : "Email"}
          required
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          required
        />
        <button type="submit">
          {currState === "Sing up" ? "Sing up" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" required />
          <p>Agree to terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            {currState === "Sing up"
              ? "Already have a account": "Create new account"}
            <span
              onClick={() => {
                if (currState === "Sing up") {
                  setCurrState("Login");
                }else{
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
