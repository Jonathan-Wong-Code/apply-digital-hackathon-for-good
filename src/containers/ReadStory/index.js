import React from "react";
import { useStoryState } from "../../contexts/story";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images//rightArrow.png";
import "./index.css";
const ReadStory = () => {
  const [page, setPage] = React.useState(0);
  const story = useStoryState();

  const goToPreviousPage = () => {
    if (page === 0) {
      return;
    }

    setPage((page) => page - 1);
  };

  const goToNextPage = () => {
    if (page >= story.length - 1) {
      return;
    }

    setPage((page) => page + 1);
  };

  return (
    <>
      <div className="read-story__story-panel">
        <div className="read-story__image">
          <img src={story[page].img} alt="" />
        </div>
        <div className="read-story__text">{story[page].text}</div>
      </div>
      <div className="read-story__button-container">
        <div>
          <button onClick={goToPreviousPage} className="read-story__button">
            <img src={leftArrow} alt="" style={{}} />
            <span className="read-story__button-label">Previous</span>
          </button>
          <button onClick={goToNextPage} className="read-story__button">
            <span className="read-story__button-label">Next Panel</span>
            <img
              src={rightArrow}
              alt=""
              style={{ width: 50, height: "auto" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ReadStory;
