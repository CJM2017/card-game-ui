import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import Login from "./components/Login";
import logo from "./logo.svg";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
       <Login />
    </div>
  );
}
