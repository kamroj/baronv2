import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import i18next from "i18next";
import { LanguageData } from "./LanguageData";
import "./Language.scss";

import "flag-icon-css/css/flag-icons.min.css";

export default function Language({ mainDivStyle, dropDownStyle, onClick }) {
  const [flag, setFlag] = useState(undefined);

  useEffect(() => {
    setFlag(`flag-icon-${Cookies.get("i18next")}`);
  }, []);

  function changeLang(code) {
    i18next.changeLanguage(code);
    setFlag(`flag-icon-${code}`);
  }

  return (
    <div className="language dropdown" style={mainDivStyle}>
      <button className="dropdown-lng-menu-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <span className={`flag-icon ${flag}`}></span>
      </button>
      <ul className="dropdown-menu" style={dropDownStyle} aria-labelledby="dropdownMenuButton1">
        {LanguageData.map(({ code, name }) => (
          <li key={code}>
            <button
              className="dropdown-item"
              onClick={() => {
                changeLang(code);
                onClick();
              }}
            >
              <span className={`flag-icon flag-icon-${code} mx-2`}></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
