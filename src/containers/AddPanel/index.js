import React, { useState, useEffect } from "react";
import StoryPanel from "../../components/StoryPanel";

const CreatePanel = () => {
  const [panelType, setPanelType] = useState("");

  const onSubmit = () => {};

  return (
    <div className="createPanel">
      <div className></div>

      <StoryPanel />
    </div>
  );
};

export default CreatePanel;
