import React from "react";
import "./styles/App.scss";
import ReactFCCtest from "react-fcctest";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";

function App() {
  return (
    <div id="clock">
      <Timer />
      <div id="session-break-container">
        <Break />
        <Session />
      </div>
      <ReactFCCtest />
    </div>
  );
}

export default App;
