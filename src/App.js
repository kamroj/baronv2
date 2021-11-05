import React from "react";

import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/content/welcome/Welcome";
import "./App.scss";
import AboutUs from "./components/content/aboutus/AboutUs";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Element name="top-element" />
      <Navbar />
      <Welcome />
      <AboutUs />
    </div>
  );
}

export default App;
