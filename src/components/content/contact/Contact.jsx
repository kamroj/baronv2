import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./Contact.scss";

export default function Contact() {
  useTranslation();

  return (
    <Element name={ElementNames.contact}>
      <div className="contact-main-container">
        <div className="contact-map-container" />
        <div className="contact-contact-detials">
          <Trans i18nKey="contact_details_key" components={{ green: <span style={{ color: "#bafc00", whiteSpace: "nowrap" }} /> }} />
        </div>
      </div>
    </Element>
  );
}
