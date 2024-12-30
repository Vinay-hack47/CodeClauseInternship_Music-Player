import React from "react";

export default function PlayerControls({
  playPreviousTrack,
  playNextTrack,
  elapsedTime,
  duration,
  seekTrack,
  formatTime,
}) {
  return (
    <div className="player-controls">
      <button className="btn btn-secondary" onClick={playPreviousTrack}>
        Previous
      </button>
      <div className="progress-bar-container">
        <span>{formatTime(elapsedTime)}</span>
        <input
          type="range"
          value={(elapsedTime / duration) * 100 || 0}
          onChange={seekTrack}
        />
        <span>{formatTime(duration - elapsedTime)}</span>
      </div>
      <button className="btn btn-secondary" onClick={playNextTrack}>
        Next
      </button>
    </div>
  );
}
