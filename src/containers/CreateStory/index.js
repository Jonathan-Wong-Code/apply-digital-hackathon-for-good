import React from "react";
import PreviewPanel from "../../components/PreviewPanel/index";
import "./index.css";
import { Link } from "react-router-dom";
import { useStoryState } from "../../contexts/story";
import { useStoryDispatch } from "../../contexts/story";
import trashCan from "../../images/trashCan.png";

const CreateStory = () => {
  const stories = useStoryState();

  const { deletePanel } = useStoryDispatch();

  return (
    <section style={{ padding: "32px 0" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "64px" }}
      >
        <h2 style={{ width: "100%" }}>
          Drag and drop the panels to rearrange your story.
        </h2>
        <div style={{ display: "flex", width: "100%" }}>
          <button className="create-story__button">Publish</button>
          <button className="create-story__button">Save</button>
          <button className="create-story__button">Preview</button>
          <button className="create-story__delete-button">
            <span style={{ marginRight: "8px" }}>Delete</span>
            <img
              src={trashCan}
              alt=""
              style={{ width: "25px", height: "29px" }}
            />
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className="create-story__panel-list">
          {stories.map((panel) => {
            const onClick = () => deletePanel(panel.id);

            return (
              <li key={panel.id}>
                <PreviewPanel panel={panel} onClick={onClick} />
              </li>
            );
          })}
          <Link
            style={{ width: "100%", height: 300, border: "1px solid black" }}
            to="/createPanel"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
              alt=""
            />
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default CreateStory;
