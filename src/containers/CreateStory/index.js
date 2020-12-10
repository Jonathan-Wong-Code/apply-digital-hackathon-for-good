import React, { useReducer } from "react";
import PreviewPanel from "../../components/PreviewPanel";
import "./index.css";

const reducer = (oldState, newState) => ({ ...oldState, ...newState });

const mockStories = [
  {
    position: undefined,
    img: "http://www.fillmurray.com/200/300",
    text: "some text 1",
    id: 1,
  },
  {
    position: undefined,
    img: "http://www.fillmurray.com/g/200/300",
    text: "some text 2",
    id: 2,
  },
  {
    position: undefined,
    img: "http://www.fillmurray.com/284/196",
    text: "some text 2",
    id: 3,
  },
];

const CreateStory = () => {
  const [state, setState] = useReducer(reducer, {});

  return (
    <div>
      <h2>Create your story here!</h2>
      <ul className="create-story__panel-list">
        {mockStories.map((panel) => (
          <li key={panel.id}>
            <PreviewPanel panel={panel} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateStory;
