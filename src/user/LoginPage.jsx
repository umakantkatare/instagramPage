/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/instagram.png";

function LoginPage() {
  const [login, setLogin] = useState(true);

  const logInSwitch = () => {
    setLogin(!login);
  };
  return (
    <div className=" min-h-screen bg-slate-500 flex items-center justify-center flex-col gap-3 ">
      <div className="bg-black text-white  p-4 rounded-md  w-96">
        <h1 className=" text-2xl font-bold text-center text-white mb-4 ">
          <img src={logo} alt="" />
        </h1>
        <div className=" gap-2">
          <input
            hidden={login}
            type="text"
            placeholder="email or mobile number"
          />
          <input hidden={login} type="text" placeholder="fullname" />
          <input
            className=" "
            placeholder="username, phone number / email"
            type="text"
          />
          <input placeholder="password" type="text" />
          <button>login</button>
          <div>
            {login ? "Don't have an account" : "Have an account"}
            <span onClick={logInSwitch}>{login ? "Sign Up" : "Log In"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
