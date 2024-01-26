/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./assets/instagram.png";

function LoginPage() {
  return (
    <div className=" min-h-screen bg-slate-500 flex items-center justify-center flex-col gap-3 ">
      <div className="bg-black  p-4 rounded-md  w-96">
        <h1 className=" text-2xl font-bold text-center text-white mb-4 ">
          <img src={logo} alt="" />
        </h1>
      </div>
    </div>
  );
}

export default LoginPage;
