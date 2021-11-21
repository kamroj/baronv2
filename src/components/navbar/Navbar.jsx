import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import { useOutsideHook } from "../../hooks/useOutsideHook";
import "./Navbar.scss";
import { ElementNames, NavbarData, ScrollerProp } from "./NavbarData";
import logo from "../../assets/images/logo.png";
import Language from "./lang/Language";
import { Link, scroller } from "react-scroll";
import { useRect } from "../../hooks/useRectHook";

export default function Menu() {
  const { t } = useTranslation();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [rect, ref] = useRect();

  const navbarRef = useRef(null);
  const toggleNav = () => setToggleMenu(!toggleMenu);

  useOutsideHook(navbarRef, () => toggleMenu && toggleNav());

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="navbar-container-ref-wrapper" ref={ref}>
      {rect.y <= 0 && (<div className="navbar-container" ref={navbarRef}>
        <div className="navbar-items-container">
          <button
            className="navbar-logo-btn"
            onClick={() => scroller.scrollTo(ElementNames.top, ScrollerProp)}
          >
            <img src={logo} alt="logo" className="navbar-logo" />
          </button>
          <button onClick={toggleNav} className="navbar-btn">
            <AiOutlineMenu size={30} color={"rgb(0, 144, 0)"} />
          </button>
        </div>
        {(toggleMenu || screenWidth > 900) && (
          <>
            <ul className="navbar-list-container">
              {NavbarData.map((item, index) => {
                return (
                  <Link key={index} activeClass="active" smooth={ScrollerProp.smooth} to={item.element} duration={ScrollerProp.duration} offset={ScrollerProp.offset}>
                    <li key={index} onClick={toggleNav}>
                      <span>{t(item.title).toUpperCase()}</span>
                    </li>
                  </Link>
                );
              })}
              <Language dropDownStyle={{backgroundColor: "black"}}/>
            </ul>
          </>
        )}
      </div>
      )}
    </div>
  );
}
