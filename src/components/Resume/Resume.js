import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import PDF from "./JacobArthurs_Resume.pdf";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <a href={PDF} target="_blank" rel="noopener noreferrer">
        View Resume&nbsp;
        <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
      </a>
    </div>
  );
};
export default Resume;
