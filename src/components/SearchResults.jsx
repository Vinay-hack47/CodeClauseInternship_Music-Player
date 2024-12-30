import React from "react";

export default function SearchResults({
  tracks,
  handlePlayPause,
  addToPlaylist,
  currentlyPlaying,
  audioElement,
}) {
  return (
    <div className="container mt-3">
      <h3>Search Results</h3>
      <div className="row">
        {tracks.map((track, index) => (
          <div className="col-md-4 mb-3" key={track.id}>
            <div className="card">
              <img
                src={track.album.images[0]?.url}
                className="card-img-top"
                alt="Album Art"
              />
              <div className="card-body">
                <h5 className="card-title">{track.name}</h5>
                <p className="card-text">Artist: {track.artists[0].name}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handlePlayPause(track, index, false)}
                >
                  {currentlyPlaying?.id === track.id && !audioElement?.paused
                    ? "Pause"
                    : "Play"}
                </button>
                <button
                  className="btn btn-secondary mt-2 ms-2"
                  onClick={() => addToPlaylist(track)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
