import React, { useReducer } from "react";

const reducer = (oldState, newState) => ({ ...oldState, ...newState });

const CreateStory = () => {
  const [state, setState] = useReducer(reducer, {});

  return <div>Create Story</div>;
};

export default CreateStory;
