/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";

function LoginPage() {
  return (
    <div className=" min-h-screen bg-slate-500 flex items-center justify-center flex-col gap-3 ">
      <div className=" text-blue-500">Instagram</div>
      <div>
        <label htmlFor="">Username:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">password:</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default LoginPage;
