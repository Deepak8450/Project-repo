import React from "react";
import "./Login.css";
import Illustration from "./Illustration.png";

export default function Login() {
    
  return (
    <div className="main-body">
      <div className="login-container">
        <span id="heading">Register/Login</span>
        <div className="sub-container">
          <div className="input-container">
            <input type="text" placeholder="Full-name.."/>
            <input type="email" placeholder="e-mail/address..."/>
            <input type="password" placeholder="password..."/>
            <button id="login-btn">Register</button>
          </div>
          <div className="login-illustration">
            <img src={Illustration} id="poster" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
