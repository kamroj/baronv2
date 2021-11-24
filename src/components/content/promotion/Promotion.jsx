import React from "react";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";
import Card from "./Card";
import ShotsImg from "../../../assets/images/promotion/shots.jpg";
import SyropImg from "../../../assets/images/promotion/syrop.png";
import LocalBeerImg from "../../../assets/images/promotion/local_beer.jpg";
import BeerImg from "../../../assets/images/promotion/beer.png";
import VodkaImg from "../../../assets/images/promotion/vodka.png";
import DrinkImg from "../../../assets/images/promotion/drink.png";
import "./Promotion.scss";

export default function Promotion() {
  return (
    <Element name={ElementNames.promotion}>
      <div className="promotion-container">
        <h1 className="promotion-header"> ODKRYJ NASZE PROMOCJE </h1>
        <div className="promotion-card-container"> 
        <Card frontCoverDesc="P" backCoverHeader="SHOTY" backCoverDisc="-1 PLN" backCoverImage={ShotsImg} />
        <Card frontCoverDesc="W" backCoverHeader="PIWO LANE" backCoverDisc="SYROP GRATIS" backCoverImage={SyropImg} />
        <Card frontCoverDesc="S" backCoverHeader="PIWO REGIONALNE" backCoverDisc="-2 PLN" backCoverImage={LocalBeerImg} />
        <Card frontCoverDesc="C" backCoverHeader="PIWO 0.5L LANE" backCoverDisc="8 PLN" backCoverImage={BeerImg} />
        <Card frontCoverDesc="P" backCoverHeader="WODKA" backCoverDisc="LITR SOKU LUB COCA COLA GRATIS" backCoverImage={VodkaImg} />
        <Card frontCoverDesc="S" backCoverHeader="DRINK" backCoverDisc="-5 PLN" backCoverImage={DrinkImg} />
        <Card frontCoverDesc="N" backCoverHeader="DRINK" backCoverDisc="-5 PLN" backCoverImage={DrinkImg} />
      </div>
      </div>
    </Element>
  );
}
