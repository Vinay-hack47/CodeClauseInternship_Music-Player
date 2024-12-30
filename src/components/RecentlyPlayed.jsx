import React from "react";

export default function RecentlyPlayed({ recentlyPlayed }) {
  return (
    <div className="container mt-5">
      <h3>Recently Played</h3>
      {recentlyPlayed.length === 0 ? (
        <p>No tracks played recently.</p>
      ) : (
        <ul>
          {recentlyPlayed.map((track, index) => (
            <li key={index}>
              {track.name} by {track.artists[0].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
