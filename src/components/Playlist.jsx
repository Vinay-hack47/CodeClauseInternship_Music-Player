import React from "react";

export default function Playlist({
  playlist,
  handlePlayPause,
  removeFromPlaylist,
  currentlyPlaying,
  audioElement,
}) {
  return (
    <div className="container mt-5">
      <h3>Playlist</h3>
      {playlist.length === 0 ? (
        <p>No songs in playlist. Add some from the search results.</p>
      ) : (
        <div className="row">
          {playlist.map((track, index) => (
            <div className="col-md-4 mb-3" key={track.id}>
              <div className="card">
                <img
                  src={track.album.images[0]?.url}
                  className="card-img-top"
                  alt="Album"
                />
                <div className="card-body">
                  <h5 className="card-title">{track.name}</h5>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handlePlayPause(track, index, true)}
                  >
                    {currentlyPlaying?.id === track.id && !audioElement?.paused
                      ? "Pause"
                      : "Play"}
                  </button>
                  <button
                    className="btn btn-danger mt-2 ms-2"
                    onClick={() => removeFromPlaylist(track.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
