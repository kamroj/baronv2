import React from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import AboutUs from "./components/content/aboutus/AboutUs";
import { Element } from "react-scroll";
import Welcome from "./components/content/welcome/Welcome";
import Gallery from "./components/content/gallery/Gallery";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div>
      <Element name="top-element" />
      <Welcome />
      
      <div>
        <Navbar />
        <AboutUs />
        <Gallery />
      </div>
      <MessengerCustomerChat pageId="229571084064511" appId="1520264291685156" />
    </div>
  );
}

export default App;
