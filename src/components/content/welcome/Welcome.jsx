import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useContext, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { Trans, useTranslation } from "react-i18next";
import { Link, scroller } from "react-scroll";
import { IsMobileContext } from "../../../App";
import Video from "../../../assets/video/intro.mp4";
import Language from "../../navbar/lang/Language";
import { ElementNames, NavbarData, ScrollerProp } from "../../navbar/NavbarData";
import "./Welcome.scss";

export default function Welcome() {
  const menuBtnWidth = "14vw";
  const menuBtnHeight = "5vh";

  const { t } = useTranslation();
  const [logoHovered, setLogoHovered] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const [menuButtonDisabled, setMenuButtonDisabled] = useState(true);
  const scrollTargetRef = useRef(null);
  const isMobile = useContext(IsMobileContext);

  function calculatePointOnCircle(radius, angle, cx, cy) {
    angle *= Math.PI / 180;
    let x = cx + radius * Math.cos(angle);
    let y = cy + radius * Math.sin(angle);
    return { x: x, y: y };
  }

  function decorateDataWithPointsPositionOnCircle(data, radius, cx, cy, startingAngle = 180) {
    let decoratedData = [];
    let angleIncremental = 360 / data.length;
    let angle = startingAngle;

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
      setLogoHovered(false);
    } else {
      disableBodyScroll(scrollTargetRef);
    }
  }

  function generateButtons(isMobile) {
    let btnData = isMobile ? NavbarData : decorateDataWithPointsPositionOnCircle(NavbarData, 35, 50, 50, 200);

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
        <Link
          key={index}
          activeClass="active"
          smooth={ScrollerProp.smooth}
          to={item.element}
          duration={ScrollerProp.duration}
          offset={ScrollerProp.offset}
          onClick={() => toggleMenu()}
        >
          <button key={index} disabled={menuButtonDisabled} className={`welcome-menu-btn${menuButtonDisabled ? "" : "-hover"}`} style={btnStyle}>
            {t(item.title).toUpperCase()}
          </button>
        </Link>
      );
    });
  }

  return (
    <section className="welcome-section" ref={scrollTargetRef}>
      {!menuDisplayed && <Language mainDivStyle={{ position: "absolute", right: "0.5vw", top: "1vh" }} />}

      <video id="welcome-background-video" autoPlay loop muted playsInline src={Video} type="video/mp4" />

      <div className="welcome-content-container">
        <div className={`welcome-menu-background ${menuDisplayed ? "welcome-menu-background-fade-in" : "welcome-menu-background-fade-out"}`} />
        {menuDisplayed && (
          <div className="welcome-menu-container">
            <FadeIn delay={100} onComplete={() => setMenuButtonDisabled(false)}>
              {generateButtons(isMobile())}
            </FadeIn>
          </div>
        )}

        {(!menuDisplayed || (menuDisplayed && !isMobile())) && (
          <div className="welcome-baron-logo-conteiner">
            <button
              className="welcome-baron-logo"
              onClick={() => toggleMenu()}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
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
              <Trans i18nKey="logo_description_key" components={{ span: <span className="welcome-baron-logo-desc-letter-col" /> }} />
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
