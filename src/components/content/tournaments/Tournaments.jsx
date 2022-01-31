import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";
import { Trans } from "react-i18next";

import "./Tournaments.scss";
import { useTranslation } from "react-i18next";

export default function Tournaments() {
  useTranslation();

  return (
    <Element name={ElementNames.tournaments}>
      <Parallax bgImage="https://i.postimg.cc/fLDNf0N8/testimonials.jpg" strength={300} blur={1}>
        <div className="tournaments-main-container">
          <div className="tournaments-description">
            <Trans i18nKey="tournaments_desc_key" components={{ color: <span style={{ color: "#bafc00", whiteSpace:"nowrap" }} /> }}/>
            <div className="tournaments-description-contact">
              <Trans i18nKey="tournaments_desc_contact_key" />
            </div>
          </div>
          <a className="tournaments-events-btn" href="https://www.facebook.com/baronkrakow/events" target="_blank" rel="noreferrer noopener">
            <Trans i18nKey="tournaments_btn_desc_key" />
          </a>
        </div>
      </Parallax>
    </Element>
  );
}
