import React from "react";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./Games.scss";
import ListViewer from "./ListViewer";
import { ConsoleGamesList } from "./ConsoleGamesList";

export default function Games() {
  return (
    <Element name={ElementNames.games}>
      <div className="games-main-container">
        <div className="games-title-container">
          W co możesz u nas zagrać
          {/* <Trans i18nKey="reservation_desc_key" components={{ green: <span style={{ color: "rgb(0, 144, 0)", whiteSpace:"nowrap" }} /> }} /> */}
        </div>
        <ListViewer title="GRY NA KONSOLE" gameList={ConsoleGamesList} />
        <ListViewer title="GRY PLANSZOWE" gameList={ConsoleGamesList} reverseDirection={true} />
      </div>
      ł
    </Element>
  );
}
