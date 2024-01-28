/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/instagram.png";

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleToogleMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
    else if (name === "email") setEmail(value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("signUp :", { username, password, email });
    } else {
      console.log("Login :", { username, password });
    }
  };
  return (
    <div className=" min-h-screen bg-gray-200 flex items-center justify-center flex-col gap-3 ">
      <div className="bg-white  p-4 rounded-md  w-96">
        <h1 className=" text-2xl font-bold text-center mb-4 ">
          <img
            src={logo}
            alt=""
            className="w-full text-center flex justify-center items-center"
          />
        </h1>
        <form action="">
          <div className=" mb-4">
            <label
              htmlFor=""
              className=" block text-sm font-semibold text-gray-500"
            >
              username:
            </label>
            <input
              value={username}
              placeholder="username"
              name=" username"
              onChange={handleInput}
              className=" mt-1 p-2 w-full border rounded-md text-sm font-bold text-black"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className=" block text-sm font-semibold text-gray-500"
              htmlFor=""
            >
              password:
            </label>
            <input
              onChange={handleInput}
              value={password}
              placeholder="password"
              className=" mt-2 p-2 w-full border rounded-md text-sm font-bold text-gray-700"
              type="text"
              name="password"
            />
          </div>
          {isSignUp && (
            <div className="mb-4 ">
              <label
                className="block text-sm font-bold text-gray-500"
                htmlFor=""
              >
                email
              </label>
              <input
                onChange={handleInput}
                value={email}
                type="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {/* {isSignUp ? "Sign Up" : "Login"} */} signUp
            </button>
            <p className=" text-sm text-gray-500 ">
              {isSignUp ? "Have an account" : "Don't have an account"}
              <button
                onClick={handleToogleMode}
                type="button"
                className="text-blue-600 hover:underline focus:outline-none"
              >
                {!isSignUp ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
