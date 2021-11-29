import React from "react";

import "./LoadingPage.scss";
import BaronLogoPng from "./logo.png";

export default function LoadingPage() {
  const startDate = new Date("11/01/2021")
  const endDate = new Date("01/06/2022")
  const duration = endDate.getTime() - startDate.getTime();

  const progression = () => ((new Date().getTime() - startDate.getTime()) * 100) / duration

  return (
    <div className="loading-page-container">
      <div className="loading-page-logo-container">
        <img src={BaronLogoPng} alt="logo" id="loading-page-baron-logo-img" />
      </div>
      <div className="loading-bar">
        <div className="loading-bar-anim" style={{width: `${progression() > 100 ? 100 : progression()}%`}}/>
        <span className="loading-bar-desc">LOADING</span>
      </div>
    </div>
  );
}