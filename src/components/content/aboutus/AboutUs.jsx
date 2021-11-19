import React, { useState } from "react";
import { Element } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import InView from "react-intersection-observer";
import CountUp from "react-countup";
import "./AboutUs.scss";
import dimension from "../../../assets/images/dimension.png";
import gameConsole from "../../../assets/images/console.png";
import boardgame from "../../../assets/images/boardgame.png";

export default function AboutUs() {
  const { t } = useTranslation();
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [languageChangedStateHack, setLanguageChanged] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const renderAboutUsAnim = () => (
    <ReactTypingEffect text={t("aboutus_header_desc_key")} className="about-us-header-text" eraseDelay={360000} cursorClassName="aboutus-header-cursor" />
  );

  function hasLanguageChanged(lg) {
    if (currentLanguage !== lg) {
      setCurrentLanguage(i18next.language);
      setLanguageChanged(!languageChangedStateHack);
    }

    return languageChangedStateHack;
  }

  function countWrapper(endCount, duration=3, delay=1) {
    return animationTriggered && <CountUp end={endCount} className="about-us-countup" delay={delay} duration={duration} />;
  }

  return (
    <Element name="aboutus-element">
      <section className="aboutus-section">
        <div className="aboutus-header">
          <InView
            onChange={(inView) => {
              if (inView) setAnimationTriggered(true);
            }}
          />
          {animationTriggered && hasLanguageChanged(i18next.language) ? renderAboutUsAnim() : ""}
          {animationTriggered && hasLanguageChanged(i18next.language) ? "" : renderAboutUsAnim()}
        </div>
        <div className="aboutus-content">
          <div className="aboutus-splash-arts-container">
            <div className="aboutus-splash-art-content">
              <img src={dimension} alt="dimensions" className="aboutus-splash-art" />
              <span className="aboutus-splash-art-desc">
                {countWrapper(5)}SAL / {countWrapper(130)}m<sup>2</sup>
              </span>
            </div>
            <div className="aboutus-splash-art-content">
              <img src={gameConsole} alt="gameConsole" className="aboutus-splash-art" />

              <span className="aboutus-splash-art-desc">
              {countWrapper(10)}x XBOX ONE
              </span>
            </div>
            <div className="aboutus-splash-art-content">
              <img src={boardgame} alt="boardgame" className="aboutus-splash-art" />
              <span className="aboutus-splash-art-desc">
                {countWrapper(50)} TYTUŁÓW PLANSZÓWEK
              </span>
            </div>
          </div>
          <div className="aboutus-line-separator" style={{ height: "30rem" }} />
          <div className="aboutus-line-separator" style={{ height: "25rem" }} />
          <div className="aboutus-description-container">
            <p>
              BarON - pub / bar usytuowany w samym centrum Krakowa (ul. Stefana Batorego 1). Bar z wyśmienitym piwem i innymi trunkami w którym zagrasz wraz z
              przyjaciółmi w topowe tytuły konsolowe (FIFA 20, Mortal Kombat XL, Teeken, Forza 6 i inne) lub w dużej sali zagrasz w gry planszowe / towarzyskie
              / strategiczne.
            </p>
            <p>
              Oczywiści Nasi klienci w gry (konsolwe i planszówkowe) grają za DARMO!
              <br />A przy tym wszystkim uraczysz się trunkami z Naszego baru !
            </p>
            <p>Zatem BarON!</p>
          </div>
        </div>
      </section>
    </Element>
  );
}
