import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header
      style={{ display: "flex", alignItems: "center", padding: "32px 0" }}
    >
      <h1 style={{ width: "100%" }}>Reel Science</h1>
      <nav style={{ width: "100%" }}>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createStory">Create Story</Link>
          </li>
          <li>
            <Link to="/readStory">View Story</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
