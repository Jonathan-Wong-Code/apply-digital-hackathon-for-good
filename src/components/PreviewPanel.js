import React from "react";

const PreviewPanel = ({ panel }) => {
  return (
    <>
      <div>
        <img src={panel.img} alt="" />
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
};

export default PreviewPanel;
