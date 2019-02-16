import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock.jsx";
import Tabs from "./tabs.jsx";

const Root = () => {
  return (
    <>
      <Clock/>
      <Tabs />
    </>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});
