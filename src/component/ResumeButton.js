import React, { useState } from "react";
import "./ResumeButton.css";
import pdfFile from "../assets/res.pdf";

const ResumeButton = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!isDownloaded && !isDownloading) {
      setIsDownloading(true);
      setIsChecked(true);

      setTimeout(() => {
        setIsDownloaded(true);
        setIsDownloading(false);
      }, 2000);
    } else if (isDownloaded) {
      window.open(pdfFile, "_blank");
    }
  };

  return (
    <div className="ResumeButton-container">
      <label
        className={`ResumeButton-label ${
          isDownloading ? "ResumeButton-downloading" : ""
        }`}
        onClick={handleClick}
      >
        <input
          type="checkbox"
          className="ResumeButton-input"
          checked={isChecked}
          readOnly
        />
        <span className="ResumeButton-circle">
          <svg
            className="ResumeButton-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="ResumeButton-square"></div>
        </span>
        <p className="ResumeButton-title">
          {isDownloading
            ? "Downloading..."
            : isDownloaded
            ? "Open"
            : "Resume"}
        </p>
      </label>
    </div>
  );
};

export default ResumeButton;
