import React from "react";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";
import Card from "./Card";
import ShotsImg from "../../../assets/images/promotion/shots.jpg";
import SyropImg from "../../../assets/images/promotion/syrop.png";
import LocalBeerImg from "../../../assets/images/promotion/local_beer.png";
import BeerImg from "../../../assets/images/promotion/beer.png";
import VodkaImg from "../../../assets/images/promotion/vodka.png";
import DrinkImg from "../../../assets/images/promotion/drink.png";
import "./Promotion.scss";
import { Trans, useTranslation } from "react-i18next";

export default function Promotion() {
  const { t } = useTranslation();

  return (
    <Element name={ElementNames.promotion}>
      <div className="promotion-container">

        <h1 className="promotion-header">
          <Trans i18nKey="promotion_header_key" components={{ green: <span style={{ color: "rgb(0, 144, 0)"}} /> }} />
        </h1>
        <div className="promotion-card-container">
          <Card
            frontCoverDesc={t("promotion_card_mon_front_desc_key")}
            backCoverHeader={t("promotion_card_mon_back_header_key")}
            backCoverDisc={t("promotion_card_mon_back_disc_key")}
            backCoverImage={ShotsImg}
          />
          <Card
            frontCoverDesc={t("promotion_card_tue_front_desc_key")}
            backCoverHeader={t("promotion_card_tue_back_header_key")}
            backCoverDisc={t("promotion_card_tue_back_disc_key")}
            backCoverImage={SyropImg}
          />
          <Card
            frontCoverDesc={t("promotion_card_wen_front_desc_key")}
            backCoverHeader={t("promotion_card_wen_back_header_key")}
            backCoverDisc={t("promotion_card_wen_back_disc_key")}
            backCoverImage={LocalBeerImg}
          />
          <Card
            frontCoverDesc={t("promotion_card_thu_front_desc_key")}
            backCoverHeader={t("promotion_card_thu_back_header_key")}
            backCoverDisc={t("promotion_card_thu_back_disc_key")}
            backCoverImage={BeerImg}
          />
          <Card
            frontCoverDesc={t("promotion_card_fri_front_desc_key")}
            backCoverHeader={t("promotion_card_fri_back_header_key")}
            backCoverDisc={t("promotion_card_fri_back_disc_key")}
            backCoverImage={VodkaImg}
          />
          <Card
            frontCoverDesc={t("promotion_card_sat_front_desc_key")}
            backCoverHeader={t("promotion_card_sat_back_header_key")}
            backCoverDisc={t("promotion_card_sat_back_disc_key")}
            backCoverImage={DrinkImg}
          />
          <Card
            frontCoverDesc={t("promotion_card_sun_front_desc_key")}
            backCoverHeader={t("promotion_card_sun_back_header_key")}
            backCoverDisc={t("promotion_card_sun_back_disc_key")}
            backCoverImage={DrinkImg}
          />
        </div>
      </div>
    </Element>
  );
}
