import { Parallax } from "react-parallax";
import "./Tournaments.scss";

export default function Tournaments() {
  return (
    <Parallax bgImage="https://i.postimg.cc/fLDNf0N8/testimonials.jpg" strength={500}>
      <div className="tournaments-main-container">
        <div className="tournaments-description">
          <p>
            Lubisz rywalizację? <br />
            Weź udział w naszych TURNIEJACH! <br />
            Dla większych grup lub firm istnieje możliwość organizacji specjalnych turniejów! <br />
            Przejdz do sekcji kontakty aby skontaktować się z nami.
          </p>
        </div>
      </div>
    </Parallax>
  );
}
