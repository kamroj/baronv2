import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
import Video from "../../../assets/video/beer.webm";
import { Key } from "../../../Keys";
import { ElementNames, ScrollerProp } from "../../navbar/NavbarData";
import "./WelcomeV2.scss";

export default function WelcomeV2() {
  const { t } = useTranslation();
  const [logoHovered, setLogoHovered] = useState(false);

  function changeLogoHoveredState() {
    setLogoHovered(!logoHovered);
  }

  function colorFirstLetter(txt) {
    return (
      <span>
        <span className="welcome-baron-logo-desc-letter-col">{txt[0]}</span>
        {txt.substring(1)}
      </span>
    );
  }

  return (
    <section className="welcome-section">
      <video id="welcome-background-video" muted={true} autoPlay loop>
        <source src={Video} type="video/webm" />
      </video>
      <div className="welcome-content-container">


        <div className="welcome-menu-container">
          <div className="welcome-menu-top-container">
            <div className="welcome-menu-element-container welcome-menu-element-btn-top-side welcome-menu-element-btn-left-side">
              <button>{t(Key.Gallery)}</button>
            </div>
            <div className="welcome-menu-element-container welcome-menu-element-btn-center-side">
              <button>{t(Key.Reservation)}</button>
            </div>
            <div className="welcome-menu-element-container welcome-menu-element-btn-top-side welcome-menu-element-btn-right-side">
              <button>{t(Key.Promotion)}</button>
            </div>
          </div>
          <div className="welcome-menu-bottom-container">
            <div className="welcome-menu-element-container welcome-menu-element-btn-bottom-side welcome-menu-element-btn-left-side">
              <button>{t(Key.Games)}</button>
            </div>
            <div className="welcome-menu-element-container welcome-menu-element-btn-center-side">
              <button>{t(Key.Tournaments)}</button>
            </div>
            <div className="welcome-menu-element-container welcome-menu-element-btn-bottom-side welcome-menu-element-btn-right-side">
              <button>{t(Key.Contact)}</button>
            </div>
          </div>
        </div>

        {/* <div className="welcome-baron-logo-conteiner">
          <button
            className="welcome-baron-logo"
            onClick={() => scroller.scrollTo(ElementNames.aboutUs, { smooth: ScrollerProp.smooth, duration: ScrollerProp.duration })}
            onMouseEnter={() => changeLogoHoveredState()}
            onMouseLeave={() => changeLogoHoveredState()}
          >
            <div className={`welcome-baron-logo-triangle-${logoHovered ? "hovered" : "not-hovered"}`} />
            <span className="welcome-baron-logo-name">
              BAR<span style={{ color: "black" }}>ON</span>
            </span>
          </button>
          <span className="welcome-baron-logo-desc">
            {colorFirstLetter(t("logo_description_consols_key"))} {t("logo_description_and_key")} {colorFirstLetter(t("logo_description_board_games_key"))}
          </span>
        </div> */}
      </div>
    </section>
  );
}
