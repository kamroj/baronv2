import React from "react";

import Video from "../../../assets/video/beer.webm";
import "./Welcome.scss";

export default function Welcome() {
  return (
    <section className="welcome-section">
      <video id="welcome-background-video" muted={true} autoPlay loop>
        <source src={Video} type="video/webm" />
      </video>
      <div className="welcome-content-container">
        <div className="welcome-baron-logo">
          <div className="welcome-baron-logo-triangle" />
          <span className="welcome-baron-logo-desc">BarON</span>
        </div>
      </div>
    </section>
  );
}
