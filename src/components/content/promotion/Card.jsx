import React, { useContext, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IsMobileContext } from "../../../App";
import ClikCursor from "../../../assets/images/click_cursor.png";
import ClikedCursor from "../../../assets/images/click_cursor_clicked.png";

import "./Card.scss";

export default function Card({ frontCoverDesc, backCoverHeader, backCoverDisc, backCoverImage }) {
  const cursorPosSetting = "6 0, auto";
  const [flipped, setFlipped] = useState(false);
  const [cursor, setCursor] = useState(`url(${ClikCursor}) ${cursorPosSetting}`);
  const isMobile = useContext(IsMobileContext);
  const decoratedBackCoverDisc = <span style={{color: "rgb(0, 144, 0)"}}>{backCoverDisc}</span>

  return (
    <div>
      <ReactCardFlip isFlipped={flipped} flipDirection={isMobile() ? "vertical" : "horizontal"}>
        <button
          style={{ cursor: cursor }}
          onClick={() => setFlipped(true)}
          className="card-front-container"
          onMouseLeave={() => setCursor(`url(${ClikCursor}) ${cursorPosSetting}`)}
          onMouseDown={() => setCursor(`url(${ClikedCursor}) ${cursorPosSetting}`)}
          onMouseUp={() => setCursor(`url(${ClikCursor}) ${cursorPosSetting}`)}
        >
          <div className="card-front-cover">
            <span>{frontCoverDesc}</span>
          </div>
        </button>

        <button className={`card-back-container ${flipped ? "card-front-clicked" : ""}`}>
          {true && <div className="card-back-cover-background-image" style={{ backgroundImage: `url(${backCoverImage})` }} />}
          <div className="card-back-cover">
            {isMobile() ? (
              <span className="card-back-mobile-desc">{backCoverHeader} {decoratedBackCoverDisc}</span>
            ) : (
              <div className="card-back-cover-content">
                <span className="card-back-header">{backCoverHeader}</span>
                <span className="card-back-discount">{decoratedBackCoverDisc}</span>
              </div>
            )}
          </div>
        </button>
      </ReactCardFlip>
    </div>
  );
}
