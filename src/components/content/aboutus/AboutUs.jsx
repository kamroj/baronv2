import React from "react";
import { Element } from "react-scroll";
import "./AboutUs.scss";
import dimension from "../../../assets/images/dimension.png";
import console from "../../../assets/images/console.png";
import boardgame from "../../../assets/images/boardgame.png";

export default function AboutUs() {
  return (
    <Element name="aboutus-element">
      <section className="aboutus-section">
        <div className="aboutus-splash-arts-container">
          <div className="aboutus-splash-art-content">
            <img src={dimension} alt="dimensions" className="aboutus-splash-art" />
            <h1 className="aboutus-splash-art-desc">
              130m<sup>2</sup> / 5 SAL
            </h1>
          </div>
          <div className="aboutus-splash-art-content">
            <img src={console} alt="console" className="aboutus-splash-art" />

            <h1 className="aboutus-splash-art-desc">10 x XBOX ONE</h1>
          </div>
          <div className="aboutus-splash-art-content">
            <img src={boardgame} alt="boardgame" className="aboutus-splash-art" />
            <h1 className="aboutus-splash-art-desc">PONAD 50 TYTUŁÓW PLANSZÓWEK</h1>
          </div>
        </div>
        <div className="aboutus-description-container">
          <p>
            BarON - pub / bar usytuowany w samym centrum Krakowa (ul. Stefana Batorego 1). Bar z wyśmienitym piwem i innymi trunkami w którym zagrasz wraz z
            przyjaciółmi w topowe tytuły konsolowe (FIFA 20, Mortal Kombat XL, Teeken, Forza 6 i inne) lub w dużej sali zagrasz w gry planszowe / towarzyskie /
            strategiczne.
          </p>
          <p>
            Oczywiści Nasi klienci w gry (konsolwe i planszówkowe) grają za DARMO!
            <br />A przy tym wszystkim uraczysz się trunkami z Naszego baru !
          </p>
          <p>
          Zatem BarON!
          </p>
        </div>
      </section>
    </Element>
  );
}
