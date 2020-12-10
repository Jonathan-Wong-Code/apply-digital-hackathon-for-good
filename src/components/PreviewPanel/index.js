import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const PreviewPanel = ({ panel, onClick }) => {
  return (
    <>
      <div style={{ height: 300 }}>
        <img src={panel.img} alt="" />
      </div>
      <div className="preview-panel__button-container">
        <Link
          to={`/editPanel/${panel.id}`}
          className="preview-panel__action-button"
          style={{ fontSize: "16px", marginRight: "12px" }}
        >
          Edit
        </Link>
        <button
          onClick={onClick}
          className="preview-panel__action-button"
          style={{ fontSize: "16px" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default PreviewPanel;
