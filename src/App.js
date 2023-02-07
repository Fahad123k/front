import React from "react";

import Navapp from "./components/navbardir/Navapp";
import Bars from "./components/Bars.js";
import Lines from "./components/Lines";
import Pies from "./components/pies";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Navapp />
      <Bars />
      <Lines />
      <Pies />

    </div>
  );
}


export default App;
