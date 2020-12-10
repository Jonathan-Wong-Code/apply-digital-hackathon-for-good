import React, { createContext, useReducer, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
const mockStories = [
  {
    img:
      "https://images.unsplash.com/photo-1607469256721-13472920da4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    text: "some text 1",
    id: uuidv4(),
  },
  {
    img:
      "https://images.unsplash.com/photo-1607469256721-13472920da4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    text: "some text 2",
    id: uuidv4(),
  },
  {
    img:
      "https://images.unsplash.com/photo-1607608879760-c1464a648e72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    text: "some text 3",
    id: uuidv4(),
  },
];

const StoryContextState = createContext();
const StoryContextDispatch = createContext();

// In this state = our story which is an array of panel objects.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PANEL": {
      return [...state, action.panel];
    }

    case "DELETE_PANEL": {
      return state.filter((panel) => panel.id !== action.id);
    }

    case "UPDATE_PANEL": {
      return state.map((panel) =>
        panel.id === action.id ? action.panel : panel
      );
    }
    default:
      return state;
  }
};

export const StoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, mockStories);
  console.log(state)
  return (
    <StoryContextState.Provider value={state}>
      <StoryContextDispatch.Provider value={dispatch}>
        {children}
      </StoryContextDispatch.Provider>
    </StoryContextState.Provider>
  );
};

export const useStoryState = () => {
  const context = useContext(StoryContextState);

  if (!context) {
    throw new Error("must use this context within the provider");
  }

  return context;
};

export const useStoryDispatch = () => {
  const dispatch = useContext(StoryContextDispatch);

  if (!dispatch) {
    throw new Error("must use this context within the provider");
  }

  const addPanel = (panelData) => {
    dispatch({ type: "ADD_PANEL", panel: panelData });
  };

  const updatePanel = (panelData) => {
    dispatch({ type: "UPDATE_PANEL", id: panelData.id, panel: panelData });
  };

  const deletePanel = (id) => {
    dispatch({ type: "DELETE_PANEL", id });
  };

  return { addPanel, updatePanel, deletePanel };
};
