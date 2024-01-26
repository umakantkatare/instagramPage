/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import LoginPage from "./user/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
