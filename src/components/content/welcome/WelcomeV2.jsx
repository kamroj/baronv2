import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, scroller } from "react-scroll";
import Video from "../../../assets/video/beer.webm";
import { ElementNames, NavbarData, ScrollerProp } from "../../navbar/NavbarData";
import "./WelcomeV2.scss";

export default function WelcomeV2() {
  const menuBtnWidth = "14vw";
  const menuBtnHeight = "6vh";

  const { t } = useTranslation();
  const [logoHovered, setLogoHovered] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const scrollTargetRef = useRef(null)

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
    setMenuDisplayed(!menuDisplayed)
    menuDisplayed ? enableBodyScroll(scrollTargetRef) : disableBodyScroll(scrollTargetRef)
  }

  return (
    <section className="welcome-section" ref={scrollTargetRef}>
      <video id="welcome-background-video" muted={true} autoPlay loop>
        <source src={Video} type="video/webm" />
      </video>

      <div className="welcome-content-container">
        {menuDisplayed && (
          <div className="welcome-menu-container">
            {decorateDataWithPointsPositionOnCircle(NavbarData, 35, 50, 50).map((item, index) => {
              return (
                <Link key={index} activeClass="active" smooth={ScrollerProp.smooth} to={item.element} duration={ScrollerProp.duration}>
                  <button
                    key={index}
                    className="welcome-menu-btn"
                    style={{
                      width: menuBtnWidth,
                      height: menuBtnHeight,
                      left: `calc(${item.x}vw - ${menuBtnWidth} / 2)`,
                      top: `calc(${item.y}vh - ${menuBtnHeight} / 2)`,
                    }}
                  >
                    {t(item.title).toUpperCase()}
                  </button>
                </Link>
              );
            })}
          </div>
        )}

        <div className="welcome-baron-logo-conteiner">
          <button
            className="welcome-baron-logo"
            // onClick={() => scroller.scrollTo(ElementNames.aboutUs, { smooth: ScrollerProp.smooth, duration: ScrollerProp.duration })}
            // onClick={() => setMenuDisplayed(!menuDisplayed)}
            onClick={() => toggleMenu()}
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
        </div>
      </div>
    </section>
  );
}
