import React from "react";

import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/content/welcome/Welcome";
import "./App.scss";
import AboutUs from "./components/content/aboutus/AboutUs";
import { Element } from "react-scroll";
import WelcomeV2 from "./components/content/welcome/WelcomeV2";

function App() {
  return (
    <div>
      <Element name="top-element" />
      {/* <Navbar /> */}
      {/* <Welcome /> */}
      <WelcomeV2 />
      <AboutUs />
    </div>
  );
}

export default App;
