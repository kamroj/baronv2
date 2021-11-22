import React from "react";
import ReactImageGallery from "react-image-gallery";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./Gallery.scss";
import { BaronImageUrls } from "./ImgUlrs";
import { Trans, useTranslation } from "react-i18next";

export default function Gallery() {
  
  return (
    <Element name={ElementNames.gallery}>
      <div className="gallery-container">
        <div className="gallery-header-container">
          <Trans i18nKey="gallery_header_key" components={{ baron: <span style={{ color: "rgb(0, 144, 0)" }} /> }} />
        </div>
        <div className="gallery-container-outer-lines">
          <div className="gallery-image-gallery">
            <ReactImageGallery autoPlay={true} slideInterval={5000} items={BaronImageUrls} />
          </div>
        </div>
      </div>
    </Element>
  );
}
