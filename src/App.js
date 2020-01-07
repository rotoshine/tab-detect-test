import React from "react";
import Cookies from "js-cookie";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {parseInt(Cookies.get("tabCount"), 10) > 1
            ? `Duplicated tab!!! ${Cookies.get("tabCount")}`
            : "Only one opend."}
        </p>
      </header>
    </div>
  );
}

export default App;
