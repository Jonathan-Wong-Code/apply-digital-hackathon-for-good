import React from "react";
import { Link } from "react-router-dom";
const PreviewPanel = ({ panel, onClick }) => {
  return (
    <>
      <div style={{ height: 300 }}>
        <img src={panel.img} alt="" />
      </div>
      <div>
        <Link to="/editPanel" className="preview-panel__action-button">
          Edit
        </Link>
        <button onClick={onClick} className="preview-panel__action-button">
          Delete
        </button>
      </div>
    </>
  );
};

export default PreviewPanel;
