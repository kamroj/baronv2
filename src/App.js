import React from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import AboutUs from "./components/content/aboutus/AboutUs";
import { Element } from "react-scroll";
import Welcome from "./components/content/welcome/Welcome";

function App() {
  return (
    <div>
      <Element name="top-element" />
      <Welcome />
      <div>
        <Navbar />
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
