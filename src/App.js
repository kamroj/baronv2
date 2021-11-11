import React from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import AboutUs from "./components/content/aboutus/AboutUs";
import { Element } from "react-scroll";
import Welcome from "./components/content/welcome/Welcome";
import Language from "./components/navbar/lang/Language";

function App() {
  return (
    <div>
      <Element name="top-element" />
      {/* <Navbar /> */}
      {/* <Welcome /> */}
      <Welcome />
      <AboutUs />
    </div>
  );
}

export default App;
