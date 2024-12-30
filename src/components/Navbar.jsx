import React from "react";

export default function Navbar({ keyword, setKeyword, getTracks }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          v-music
        </a>
        <div className="d-flex">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button onClick={getTracks} className="btn btn-success">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
