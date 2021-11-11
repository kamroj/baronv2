import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, scroller } from "react-scroll";
import Video from "../../../assets/video/beer.webm";
import { ElementNames, NavbarData, ScrollerProp } from "../../navbar/NavbarData";
import FadeIn from "react-fade-in";
import "./Welcome.scss";
import Language from "../../navbar/lang/Language";
import useWindowDimensions from "../../../hooks/useWindowDimensionsHook";

export default function Welcome() {
  const menuBtnWidth = "14vw";
  const menuBtnHeight = "5vh";
  const mobileWidth = 650;

  const { t } = useTranslation();
  const [logoHovered, setLogoHovered] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const [menuButtonDisabled, setMenuButtonDisabled] = useState(true);
  const { windowWidth } = useWindowDimensions();

  const scrollTargetRef = useRef(null);

  const isMobile = () => windowWidth < mobileWidth;

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

  function calculatePointOnCircle(radius, angle, cx, cy) {
    angle *= Math.PI / 180;
    let x = cx + radius * Math.cos(angle);
    let y = cy + radius * Math.sin(angle);
    return { x: x, y: y };
  }

  function decorateDataWithPointsPositionOnCircle(data, radius, cx, cy) {
    let decoratedData = [];
    let angleIncremental = 360 / data.length;
    let angle = 0;

    for (let i = 0; i < data.length; i++) {
      let point = calculatePointOnCircle(radius, angle, cx, cy);
      angle += angleIncremental;
      decoratedData.push({ ...data[i], ...point });
    }

    return decoratedData;
  }

  function toggleMenu() {
    scroller.scrollTo(ElementNames.top, { smooth: "false", duration: 20 });
    setMenuDisplayed(!menuDisplayed);

    if (menuDisplayed) {
      enableBodyScroll(scrollTargetRef);
      setMenuButtonDisabled(true);
    } else {
      disableBodyScroll(scrollTargetRef);
    }
  }

  function generateButtons(isMobile) {
    let btnData = isMobile ? NavbarData : decorateDataWithPointsPositionOnCircle(NavbarData, 35, 50, 50);

    return btnData.map((item, index) => {
      let btnStyle = isMobile
        ? {
            width: "50vw",
            height: "100%",
            position: "static",
          }
        : {
            width: menuBtnWidth,
            height: menuBtnHeight,
            left: `calc(${item.x}vw - ${menuBtnWidth} / 2)`,
            top: `calc(${item.y}vh - ${menuBtnHeight} / 2)`,
          };
      return (
        <Link key={index} activeClass="active" smooth={ScrollerProp.smooth} to={item.element} duration={ScrollerProp.duration} onClick={() => toggleMenu()}>
          <button key={index} disabled={menuButtonDisabled} className={`welcome-menu-btn${menuButtonDisabled ? "" : "-hover"}`} style={btnStyle}>
            {t(item.title).toUpperCase()}
          </button>
        </Link>
      );
    });
  }

  return (
    <section className="welcome-section" ref={scrollTargetRef}>
      {!menuDisplayed && <Language style={{ position: "absolute", right: "0.5vw", top: "1vh" }} />}

      <video id="welcome-background-video" muted={true} autoPlay loop>
        <source src={Video} type="video/webm" />
      </video>

      <div className="welcome-content-container">
        <div className={`welcome-menu-background ${menuDisplayed ? "welcome-menu-background-fade-in" : "welcome-menu-background-fade-out"}`} />
        {menuDisplayed && (
          <div className="welcome-menu-container">
            <FadeIn delay={200} onComplete={() => setMenuButtonDisabled(false)}>
              {generateButtons(isMobile())}
            </FadeIn>
          </div>
        )}

        {(!menuDisplayed || (menuDisplayed && !isMobile())) && (
          <div className="welcome-baron-logo-conteiner">
            <button
              className="welcome-baron-logo"
              onClick={() => toggleMenu()}
              onMouseEnter={() => changeLogoHoveredState()}
              onMouseLeave={() => changeLogoHoveredState()}
            >
              <div
                className={`welcome-baron-logo-triangle ${
                  menuDisplayed ? "welcome-baron-logo-triangle-clicked" : logoHovered ? "welcome-baron-logo-triangle-hovered" : ""
                }`}
              />
              <span className="welcome-baron-logo-name">
                BAR<span style={{ color: "black" }}>ON</span>
              </span>
            </button>
            <span className="welcome-baron-logo-desc" style={{ "&:hover": { background: "red" } }}>
              {colorFirstLetter(t("logo_description_consols_key"))} {t("logo_description_and_key")} {colorFirstLetter(t("logo_description_board_games_key"))}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
