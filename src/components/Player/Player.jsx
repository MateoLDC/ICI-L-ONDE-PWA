import "./Player.css";
import ghettoblaster from "../../assets/ghettoblaster.png";

function Player() {
  return (
    <div className="player">
      {/* COVER ghettoblaster */}
      <div className="player-cover">
        <img id="cover" src={ghettoblaster} alt="ghettoblaster" />
      </div>

      <iframe
        className="infomaniak-player"
        src="https://player-radio.infomaniak.com/prod/small/icilondelawebradio/6b872b84-9fb2-41fd-b2c7-3ef4f62c6c18"
      ></iframe>
    </div>
  );
}

export default Player;
