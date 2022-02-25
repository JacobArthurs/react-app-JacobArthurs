import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footer-icons row">
        <div className="col">
          <a
            href="mailto:&#065;&#114;&#116;&#104;&#117;&#114;&#115;&#074;&#097;&#099;&#111;&#098;&#048;&#049;&#064;&#071;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/in/JacobArthurs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </div>
        <div className="col">
          <a
            href="https://github.com/JacobArthurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <h1>
        Designed and Developed with&nbsp;
        <FontAwesomeIcon icon={faHeart} style={{ color: `#ff4033` }} />
        &nbsp;by Jacob using{" "}
        <a href="https://github.com/JacobArthurs/react-app-JacobArthurs">
          React.js and Node.js
        </a>
        <br />
        Copyright © 2022 Jacob Arthurs. All Rights Reserved.
      </h1>
    </div>
  );
};
export default Footer;
