import React from "react";

import "./App.scss";
import LoadingPage from "./components/loadingpage/LoadingPage";
import useWindowDimensions from "./hooks/useWindowDimensionsHook";

function App() {
  const { windowWidth } = useWindowDimensions();
  const isMobile = (mobileWidth = 650) => windowWidth < mobileWidth;

  return (
    <div>
      <LoadingPage />
      {/* <Element name="top-element" /> */}
      {/* <Welcome /> */}
      {/* <div> */}
      {/* <Navbar /> */}
      {/* <AboutUs /> */}
      {/* <Gallery /> */}
      {/* <Reservation /> */}
      {/* <Promotion /> */}
      {/* </div> */}
      {/* <MessengerCustomerChat pageId="229571084064511" appId="1520264291685156" /> */}
    </div>
  );
}

export default App;
