import React from "react";

import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/content/welcome/Welcome";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
