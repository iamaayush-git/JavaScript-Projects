import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [value, setValue] = useState(0);
  function increase() {
    if (value <= 19) {
      value += 1;
    }
    setValue(value);
  }
  function decrease() {
    if (value >= 1) {
      value -= 1;
      setValue(value);
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h1>{value}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
