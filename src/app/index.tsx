import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <span>my pwa</span>
    </BrowserRouter>
  );
}

export default App;
