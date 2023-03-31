import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import "./Player.css";
import ghettoblaster from "../../assets/ghettoblaster.png";
import { useEffect, useRef, useState } from "react";

function Player({ src }) {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0);
  const currentTimeFormatted = formatTime(currentTime);

  useEffect(() => {
    audio.addEventListener("timeupdate", handleTimeUpdate);
    // audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      // audio.removeEventListener("ended", handleEnded);
    };
  }, [audio]);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  // const handleEnded = () => {
  //   setIsPlaying(false);
  //   setCurrentTime(0);
  // };

  //* Play Pause
  const handlePlay = () => {
    if (isPlaying) {
      audio.pause();
      window.location.reload();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  //* Volume controls
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audio.volume = event.target.value;
  };

  //* Seekbar
  const handleSeek = (event) => {
    audio.currentTime = event.target.value;
    setCurrentTime(audio.currentTime);
  };

  //* Conversion decimal > time
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const hoursStr = hours > 0 ? hours.toString().padStart(2, "0") + ":" : "";
    const minutesStr = minutes.toString().padStart(2, "0");
    const secsStr = secs.toString().padStart(2, "0");
    return `${hoursStr}${minutesStr}:${secsStr}`;
  }

  return (
    <div className="player">
      {/* COVER ghettoblaster */}
      <div className="player-cover">
        <img
          id="cover"
          style={{ opacity: isPlaying ? "1" : "0.2" }}
          src={ghettoblaster}
          alt="ghettoblaster"
        />
      </div>

      {/* The Seekbar */}
      <div className="seekbar-container">
        <div className="current-time">{currentTimeFormatted}</div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={currentTime}
          className="seekbar"
          style={{ opacity: isPlaying ? "1" : "0.2" }}
          onChange={handleSeek}
        />
        {/* <div className="total-duration">{audio.duration}</div> */}
      </div>

      {/* The Volume */}
      <div className="volume-container">
        <FaVolumeDown />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          className="volume-slider"
          onChange={handleVolumeChange}
        />
        <FaVolumeUp />
      </div>

      {/* The audio controls */}
      <div className="controls">
        <div className="playpause" onClick={handlePlay}>
          {isPlaying ? (
            <FaRegPauseCircle fontSize="3rem" />
          ) : (
            <FaPlayCircle fontSize="3rem" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Player;
