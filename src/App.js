import React from "react";
import "./styles/App.scss";
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
    </div>
  );
}

export default App;
