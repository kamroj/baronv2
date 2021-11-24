import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ClikCursor from "../../../assets/images/click_cursor.png"
import ClikedCursor from "../../../assets/images/click_cursor_clicked.png"

import "./Card.scss";

export default function Card({ frontCoverDesc, backCoverHeader, backCoverDisc, backCoverImage }) {
  
  const cursorPosSetting = "6 0, auto"
  const [flipped, setFlipped] = useState(false);
  const [cursor, setCursor] = useState(`url(${ClikCursor}) ${cursorPosSetting}`)

  return (
    <div>
      <ReactCardFlip isFlipped={flipped}>
        <button
          style={{ cursor: cursor }}
          onClick={() => setFlipped(true)}
          className="card-front-cover"
          onMouseLeave={() => setCursor(`url(${ClikCursor}) ${cursorPosSetting}`)}
          onMouseDown={() => setCursor(`url(${ClikedCursor}) ${cursorPosSetting}`)}
          onMouseUp={() => setCursor(`url(${ClikCursor}) ${cursorPosSetting}`)}
        >
          <div className="card-front-container">
            <span>{frontCoverDesc}</span>
          </div>
        </button>

        <button className="card-back-cover">
          <div className="card-back-cover-background-image" style={{ backgroundImage: `url(${backCoverImage})` }} />
          <div className={`card-back-container ${flipped ? "card-front-cover-clicked" : ""}`}>
            <span className="card-back-header">{backCoverHeader}</span>
            <span className="card-back-discount">{backCoverDisc}</span>
          </div>
        </button>
      </ReactCardFlip>
    </div>
  );
}
