import React from "react";
import logo from "./logo.png"


export default function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="react-logo" width={"60px"} />
        </nav>
      </header>

      <h1>Fun facts about React</h1>

      <ol>
        <li>it's composable</li>
        <li>it's declarative </li>
        <li>it's a hearable skill</li>
        <li>it's actively maintained by Facebook</li>
      </ol>

      <footer>
        <small> &copy; 2023 Pirtu development. All rights reserved </small>
      </footer>
    </div>
  );
};
