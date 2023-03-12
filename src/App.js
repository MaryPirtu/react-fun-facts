import React from "react";
import logo from "./logo.png"


export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="react-logo" width={"60px"} />
      <h1>Reasons I like React</h1>
      <ol>
        <li>it's composable</li>
        <li>it's declarativd </li>
        <li>it's a hearable skill</li>
        <li>it's actively maintained by skilled people</li>
      </ol>
    </div>
  );
}
