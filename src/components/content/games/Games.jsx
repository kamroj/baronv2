import React from "react";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";
import { Trans, useTranslation } from "react-i18next";

import "./Games.scss";
import ListViewer from "./ListViewer";
import { ConsoleGamesList } from "./ConsoleGamesList";
import { BoardGamesList } from "./BoardGamesList";

export default function Games() {
  const { t } = useTranslation();

  return (
    <Element name={ElementNames.games}>
      <div className="games-main-container">
        <div className="games-title-container">
         <Trans i18nKey="games_header_key" components={{ green: <span style={{ color: "rgb(0, 144, 0)"}} /> }} />
        </div>
        <ListViewer title={t('games_header_console_games')} gameList={ConsoleGamesList} />
        <ListViewer title={t('games_header_board_games')} gameList={BoardGamesList} reverseDirection={true} />
      </div>
    </Element>
  );
}
