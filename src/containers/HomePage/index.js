import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HomePage = () => {
  return (
    <section
      className="homepage__body"
      style={{ height: "80vh", display: "relative" }}
    >
      <h2>Welcome to Reel Science!</h2>
      <div
        style={{
          display: "flex",
          gap: "64px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <Link to="/createStory" className="homepage__link">
            Create a Story
          </Link>
        </div>
        <div>
          <Link to="/readStory" className="homepage__link">
            View Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
