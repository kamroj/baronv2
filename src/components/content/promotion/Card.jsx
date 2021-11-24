import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import "./Card.scss";

export default function Card({ frontCoverDesc, backCoverHeader, backCoverDisc, backCoverImage }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={flipped}>
        <button onClick={() => setFlipped(true)} className="card-front-cover">
          <div className="card-front-container">
            <span>{frontCoverDesc}</span>
          </div>
        </button>

        <button className="card-back-cover">
          <div className="card-back-cover-background-image" style={{ backgroundImage: `url(${backCoverImage})` }} />
          <div className="card-back-container">
            <span className="card-back-header">{backCoverHeader}</span>
            <span className="card-back-discount">{backCoverDisc}</span>
          </div>
        </button>
      </ReactCardFlip>
    </div>
  );
}
