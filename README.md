# Music Player

This project is a music player application built using React and Vite. It allows users to search for tracks, add them to a playlist, and play them with basic controls. The application also supports dark mode and keeps track of recently played tracks.

## Features

1. **Search Tracks**: Users can search for tracks using the Spotify API.
2. **Add to Playlist**: Users can add tracks from the search results to their playlist.
3. **Play/Pause Tracks**: Users can play or pause tracks. The currently playing track is highlighted.
4. **Next/Previous Track**: Users can navigate to the next or previous track in the playlist.
5. **Recently Played**: The application keeps track of the last five tracks played.
6. **Dark Mode**: Users can toggle between light and dark modes.
7. **Track Progress**: Users can see the progress of the currently playing track and seek to different parts of the track.

## Components

- **App.jsx**: The main component that handles the state and logic of the application.
- **Navbar.jsx**: A component for the navigation bar, which includes the search input and search button.
- **ThemeToggle.jsx**: A component for toggling between light and dark modes.
- **SearchResults.jsx**: A component for displaying the search results, including play/pause and add to playlist buttons.
- **Playlist.jsx**: A component for displaying the user's playlist, including play/pause and remove from playlist buttons.
- **PlayerControls.jsx**: A component for displaying the player controls, including previous, next, and track progress.
- **RecentlyPlayed.jsx**: A component for displaying the recently played tracks.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## API

The application uses the Spotify API to search for tracks. You need to replace the API key in the `getTracks` function with your own.

## Code Structure

- **State Management**: The application uses React's `useState` hook to manage state.
- **Fetching Data**: The `getTracks` function fetches data from the Spotify API.
- **Event Handlers**: Functions like `handlePlayPause`, `addToPlaylist`, and `removeFromPlaylist` handle user interactions.
- **Audio Management**: The application uses the `Audio` object to play and pause tracks, and to manage track progress.

## Future Improvements

- **User Authentication**: Add user authentication to save playlists and recently played tracks.
- **Enhanced UI**: Improve the UI with better styling and animations.
- **More Controls**: Add more controls like shuffle and repeat.

## License

This project is licensed under the MIT License.
