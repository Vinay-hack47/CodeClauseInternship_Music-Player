import React from "react";

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="theme-toggle">
      <button
        className="btn btn-secondary"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
