import React from "react";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./ConsoleGames.scss";
import ListViewer from "./ListViewer";

export default function ConsoleGames() {
  return (
    <Element name={ElementNames.games}>
      <div className="console-games-container">
        <ListViewer />
      </div>
    </Element>
  );
}
