import React from "react";
import ReactImageGallery from "react-image-gallery";
import { Element } from "react-scroll";
import { ElementNames } from "../../navbar/NavbarData";

import "./Gallery.scss";
import { BaronImageUrls } from "./ImgUlrs";

export default function Gallery() {
  return (
    <Element name={ElementNames.gallery}>
      <div className="gallery-container">
        <div className="gallery-header-container">
          <span>Nigdy u nas nie byłeś?<br />Zobacz galerię zdjęć jak wygląda BarON w środku!</span>
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
