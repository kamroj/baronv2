import React from "react";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./ConsoleGames.scss";
import ListViewer from "./ListViewer";
import { ConsoleGamesList } from "./ConsoleGamesList";

export default function ConsoleGames() {
  return (
    <Element name={ElementNames.games}>
      <div className="games-main-container">
      <div className="games-title-container">
        W co możesz u nas zagrać
        {/* <Trans i18nKey="reservation_desc_key" components={{ green: <span style={{ color: "rgb(0, 144, 0)", whiteSpace:"nowrap" }} /> }} /> */}
      </div>
      <div className="games-type-desc-container">GRY KONSOLE</div>
      <div className="console-games-container">
        <ListViewer gameList={ConsoleGamesList} />
      </div>

      <div className="console-games-container">
        <ListViewer gameList={ConsoleGamesList} />
      </div>
      </div>ł
    </Element>
  );
}
