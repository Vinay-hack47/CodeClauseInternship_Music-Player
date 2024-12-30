import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import PlayerControls from "./components/PlayerControls";
import RecentlyPlayed from "./components/RecentlyPlayed";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/vinay2004/spotify/ezjMijoOhSBTMQBb/search?q=${keyword}&type=track`
    )
    let convertedData = await data.json();
    setTracks(convertedData.tracks.items || []);
  };

  const addToPlaylist = (track) => {
    if (!playlist.some((item) => item.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((track) => track.id !== id));
    if (currentlyPlaying?.id === id) {
      stopCurrentTrack();
    }
  };

  const stopCurrentTrack = () => {
    if (audioElement) {
      audioElement.pause();
      setAudioElement(null);
      setCurrentlyPlaying(null);
      setCurrentTrackIndex(null);
      setElapsedTime(0);
    }
  };

  const handlePlayPause = (track, index, isPlaylist) => {
    if (currentlyPlaying?.id === track.id) {
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    } else {
      stopCurrentTrack();
      const newAudio = new Audio(track.preview_url);
      setAudioElement(newAudio);
      setCurrentlyPlaying(track);
      setCurrentTrackIndex(index);
      newAudio.play();

      if (!isPlaylist) {
        setRecentlyPlayed([track, ...recentlyPlayed.slice(0, 4)]);
      }

      newAudio.onloadedmetadata = () => {
        setDuration(newAudio.duration);
      };

      newAudio.ontimeupdate = () => {
        setElapsedTime(newAudio.currentTime);
      };

      newAudio.onended = () => {
        playNextTrack();
      };
    }
  };

  const playNextTrack = () => {
    if (playlist.length > 0) {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      handlePlayPause(playlist[nextIndex], nextIndex, true);
    }
  };

  const playPreviousTrack = () => {
    if (playlist.length > 0) {
      const prevIndex =
        (currentTrackIndex - 1 + playlist.length) % playlist.length;
      handlePlayPause(playlist[prevIndex], prevIndex, true);
    }
  };

  const seekTrack = (event) => {
    if (audioElement) {
      const newTime = (event.target.value / 100) * duration;
      audioElement.currentTime = newTime;
      setElapsedTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar keyword={keyword} setKeyword={setKeyword} getTracks={getTracks} />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SearchResults
        tracks={tracks}
        handlePlayPause={handlePlayPause}
        addToPlaylist={addToPlaylist}
        currentlyPlaying={currentlyPlaying}
        audioElement={audioElement}
      />
      <Playlist
        playlist={playlist}
        handlePlayPause={handlePlayPause}
        removeFromPlaylist={removeFromPlaylist}
        currentlyPlaying={currentlyPlaying}
        audioElement={audioElement}
      />
      {playlist.length > 0 && currentlyPlaying && (
        <PlayerControls
          playPreviousTrack={playPreviousTrack}
          playNextTrack={playNextTrack}
          elapsedTime={elapsedTime}
          duration={duration}
          seekTrack={seekTrack}
          formatTime={formatTime}
        />
      )}
      <RecentlyPlayed recentlyPlayed={recentlyPlayed} />
    </div>
  );
}
