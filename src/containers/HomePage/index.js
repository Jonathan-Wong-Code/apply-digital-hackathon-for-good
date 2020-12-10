import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="homepage__body">
      <h2>Welcome to Reel Science!</h2>
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
    </section>
  );
};

export default HomePage;
