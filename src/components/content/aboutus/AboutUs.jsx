import React, { useState } from "react";
import { Element } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import { Trans, useTranslation } from "react-i18next";
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
    <ReactTypingEffect text={t("aboutus_header_key")} className="about-us-header-text" eraseDelay={360000} cursorClassName="aboutus-header-cursor" />
  );

  function hasLanguageChanged(lg) {
    if (currentLanguage !== lg) {
      setCurrentLanguage(i18next.language);
      setLanguageChanged(!languageChangedStateHack);
    }

    return languageChangedStateHack;
  }

  function countWrapper(endCount, suffix = "&nbsp;", duration = 3, delay = 1) {
    return animationTriggered && <CountUp end={endCount} className="about-us-countup" delay={delay} duration={duration} suffix={suffix} />;
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
              <span className="aboutus-splash-art-desc-container">
                {countWrapper(5)}
                <span className="aboutus-splash-art-desc" style={{ whiteSpace: "nowrap" }}>
                  {t("aboutus_art_header_room_key")} /&nbsp;{countWrapper(130, "")}m<sup style={{ top: 5 }}>2</sup>
                </span>
              </span>
            </div>
            <div className="aboutus-splash-art-content">
              <img src={gameConsole} alt="gameConsole" className="aboutus-splash-art" />
              <span className="aboutus-splash-art-desc-container">
                {countWrapper(10)}
                <span className="aboutus-splash-art-desc">{t("aboutus_art_header_consoles_key")}</span>
              </span>
            </div>
            <div className="aboutus-splash-art-content">
              <img src={boardgame} alt="boardgame" className="aboutus-splash-art" />
              <span className="aboutus-splash-art-desc-container">
                {countWrapper(50)}
                <span className="aboutus-splash-art-desc">{t("aboutus_art_header_board_games_key")}</span>
              </span>
            </div>
          </div>
          {animationTriggered && (<div className="aboutus-line-separator"  />)}
          <div className="aboutus-description-container">
            <Trans i18nKey="aboutus_desc_key" components={{ span: <span style={{ color: "rgb(0, 144, 0)" }} /> }} />
          </div>
        </div>
      </section>
    </Element>
  );
}
