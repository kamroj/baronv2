import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import { useOutsideHook } from "../../hooks/useOutsideHook";
import "./Navbar.scss";
import { NavbarData } from "./NavbarData";
import logo from "../../assets/images/logo.png";
import Language from "./lang/Language";

export default function Menu() {
  const { t } = useTranslation();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navbarRef = useRef(null);
  const toggleNav = () => setToggleMenu(!toggleMenu);

  useOutsideHook(navbarRef, () => toggleMenu && toggleNav());

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="navbar-container" ref={navbarRef}>
      <div className="navbar-items-container">
        <img src={logo} alt="logo" className="navbar-logo" />
        <button onClick={toggleNav} className="navbar-btn">
          <AiOutlineMenu size={30} color={"rgb(0, 144, 0)"} />
        </button>
      </div>
      {(toggleMenu || screenWidth > 900) && (
        <>
          <ul className="navbar-list-container">
            {NavbarData.map((item, index) => {
              return (
                <li key={index} onClick={toggleNav}>
                  <span>{t(item.title).toUpperCase()}</span>
                </li>
              );
            })}
            <Language />
          </ul>
        </>
      )}
    </div>
  );
}
