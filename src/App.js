import React from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import AboutUs from "./components/content/aboutus/AboutUs";
import { Element } from "react-scroll";
import Welcome from "./components/content/welcome/Welcome";
import Gallery from "./components/content/gallery/Gallery";
import useWindowDimensions from "./hooks/useWindowDimensionsHook";
import Reservation from "./components/content/reservation/Reservation";
import Promotion from "./components/content/promotion/Promotion";
import Games from "./components/content/games/Games";
import Tournaments from "./components/content/tournaments/Tournaments";
import Contact from "./components/content/contact/Contact";

export const IsMobileContext = React.createContext();

function App() {
  const { windowWidth } = useWindowDimensions();
  const isMobile = (mobileWidth = 750) => windowWidth < mobileWidth;

  return (
    <IsMobileContext.Provider value={isMobile}>
      <div>
        <Element name="top-element" />
        <Welcome />
        <div>
          <Navbar />
          <AboutUs />
          <Gallery />
          <Reservation />
          <Promotion />
          <Games />
          <Tournaments />
          <Contact />
        </div>
      </div>
    </IsMobileContext.Provider>
  );
}

export default App;
