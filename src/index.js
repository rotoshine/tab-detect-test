import Cookies from "js-cookie";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.onload = () => {
  console.log("loaded.");
  const storedTabCount = parseInt(Cookies.get("tabCount"));

  if (!storedTabCount) {
    Cookies.set("tabCount", "1");
  } else {
    const nextTabCount = storedTabCount + 1;
    Cookies.set("tabCount", String(nextTabCount));
  }

  ReactDOM.render(<App />, document.getElementById("root"));
});

window.onunload = window.onbeforeunload = () => {
  console.log("bye..");

  const storedTabCount = parseInt(Cookies.get("tabCount"));

  if (!storedTabCount) {
    Cookies.set("tabCount", "1");
  } else {
    const nextTabCount = storedTabCount - 1;
    Cookies.set("tabCount", String(nextTabCount));
  }
});
