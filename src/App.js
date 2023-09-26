import "./App.css";
import a, { testexp } from "./PropTest.js";
import Test from "./Test.jsx";
import React from "react";
import ImpTest from "./ImpTest";

function App() {
  console.log(React.useState("in state"));
  let obj = {
    q: "qq",
    w: "ee",
    z: testexp,
  };
  // console.log(obj)
  return (
    <>
      <div className="App">
        hello
        <div>{a.a}</div>
        <Test val={obj} />
        <ImpTest />
      </div>
    </>
  );
}

export default App;
