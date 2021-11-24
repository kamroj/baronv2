import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./Reservation.scss";

export default function Reservation() {
  useTranslation();

  return (
    <Element name={ElementNames.reservation}>
      <div className="reservation-container">
        <Trans i18nKey="reservation_desc_key" components={{ green: <span style={{ color: "rgb(0, 144, 0)", whiteSpace:"nowrap" }} /> }} />
      </div>
    </Element>
  );
}
