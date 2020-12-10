import React from "react";
import PreviewPanel from "../../components/PreviewPanel/index";
import "./index.css";
import { Link } from "react-router-dom";
import { useStoryState } from "../../contexts/story";
import { useStoryDispatch } from "../../contexts/story";

const CreateStory = () => {
  const stories = useStoryState();

  const { deletePanel } = useStoryDispatch();

  return (
    <div>
      <h2>Create your story here!</h2>
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
    </div>
  );
};

export default CreateStory;
