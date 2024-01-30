/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import logo from "../assets/instagram.png";

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  const login = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className=" min-h-screen bg-gray-200 flex items-center justify-center flex-col gap-3 dark:bg-slate-500 ">
      <div className="bg-white  p-4 rounded-md  w-96">
        <h1 className=" text-2xl font-bold text-center mb-4 ">
          <img
            src={logo}
            alt=""
            className="w-full text-center flex justify-center items-center"
          />
        </h1>
        <form action="">
          <div className="mb-4 ">
            <input
              placeholder="Email"
              type="email"
              hidden={isSignUp}
              name="email"
              className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
            />
          </div>

          <div className="mb-4 ">
            <input
              placeholder="Full Name"
              hidden={isSignUp}
              type="text"
              name="Full Name"
              className="mt-1 p-2 w-full border bg-slate-100 rounded-md"
            />
          </div>

          <div className=" mb-4">
            <input
              placeholder="username"
              name=" username"
              className=" mt-1 p-2 w-full border rounded-md text-sm bg-slate-100  text-black"
              type="text"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="password"
              className=" mt-2 p-2 w-full border rounded-md text-sm bg-slate-100  text-gray-700"
              type="password"
              name="password"
            />
          </div>
          <div className="text-center">
            <button className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {isSignUp ? "log in" : "sign up"}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white  p-4 rounded-md  w-96 text-center text-xl">
        {isSignUp ? "don't have an account? " : "have an account? "}
        <span
          className=" border-spacing-1  cursor-pointer rounded-md text-blue-600 p-1 pb-2"
          onClick={login}
        >
          {!isSignUp ? "log in" : "sign up"}
        </span>
      </div>
    </div>
  );
}

export default LoginPage;

// import { useState } from "react";
// import Logo from "../assets/instagram.png";

// function LoginPage() {
//   const [login, setLogin] = useState(true);
//   const logInSwitch = () => {
//     setLogin(!login);
//   };
//   return (
//     <div>
//       <div className=" mb-4">
//         <input
//           // value={username}
//           placeholder="username"
//           name=" username"
//           onChange={handleInput}
//           className=" mt-1 p-2 w-full border rounded-md text-sm  text-black"
//           type="text"
//         />
//       </div>
//       <div className=" mb-4">
//         <input
//           // value={username}
//           placeholder="username"
//           name=" username"
//           onChange={handleInput}
//           className=" mt-1 p-2 w-full border rounded-md text-sm  text-black"
//           type="password"
//         />
//       </div>
//       <button>{login ? "Sign in" : "Sign up"}</button>
//       <div>
//         {login ? "Don't have account?" : "have an account?"}{" "}
//         <span onClick={loginSwitch}>{login ? "Sign up" : "Log in"}</span>
//       </div>
//     </div>
//   );
// }
// export default LoginPage;
