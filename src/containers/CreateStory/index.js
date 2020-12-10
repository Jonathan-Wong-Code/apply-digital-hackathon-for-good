import React from "react";
import PreviewPanel from "../../components/PreviewPanel/index";
import "./index.css";
import { Link } from "react-router-dom";

const mockStories = [
  {
    position: undefined,
    img:
      "https://images.unsplash.com/photo-1607469256721-13472920da4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    text: "some text 1",
    id: 1,
  },
  {
    position: undefined,
    img:
      "https://images.unsplash.com/photo-1607469256721-13472920da4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    text: "some text 2",
    id: 2,
  },
  {
    position: undefined,
    img:
      "https://images.unsplash.com/photo-1607608879760-c1464a648e72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    text: "some text 3",
    id: 3,
  },
];

const CreateStory = () => {
  const [stories, setStories] = React.useState(mockStories);
  return (
    <div>
      <h2>Create your story here!</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className="create-story__panel-list">
          {stories.map((panel) => (
            <li key={panel.id}>
              <PreviewPanel
                panel={panel}
                onClick={() => console.log(panel.id)}
              />
            </li>
          ))}
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
