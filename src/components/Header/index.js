import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header>
      <h1>Reel Science</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createStory">Create Story</Link>
          </li>
          <li>
            <Link to="/story">View Story</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
