import React from "react";
import { useStoryState } from "../../contexts/story";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import playButton from "../../images/play-button.png";
import breadCrumb from "../../images/breadcrumbArrow.png";
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
    <section className="read-story__section">
      <div
        className="read-story__top-section"
        style={{ marginBottom: "32px", position: "relative" }}
      >
        <div
          className="read-story__bread-crumb"
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <img
            src={breadCrumb}
            alt=""
            style={{ width: "36px", height: "15px", marginRight: "16px" }}
          />
          <span>Return to topic</span>
        </div>
        <h2
          style={{
            width: "100%",
            fontSize: "36px",
            textAlign: "center",
          }}
        >
          {story[page].title}
        </h2>
      </div>
      <div className="read-story__story-panel">
        <div className="read-story__image read-story__half">
          <img src={story[page].img} alt="" />
        </div>
        <div className="read-story__text read-story__half">
          {story[page].text}
        </div>
      </div>
      <div className="read-story__button-container">
        <div className="read-story__button-container">
          <button onClick={goToPreviousPage} className="read-story__button">
            <img src={leftArrow} alt="" style={{}} />
            <span
              className="read-story__button-label"
              style={{ marginLeft: 16, fontSize: 16 }}
            >
              Previous
            </span>
          </button>
          <img src={playButton} alt="" className="read-story__play-button" />
          <button onClick={goToNextPage} className="read-story__button">
            <span
              className="read-story__button-label"
              style={{ marginRight: 16, fontSize: 16 }}
            >
              Next
            </span>
            <img
              src={rightArrow}
              alt=""
              style={{ width: 50, height: "auto" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadStory;
