import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [flip, setFlip] = React.useState();
  const flipClassName = flip ? "flip" : "";

  return (
    <section id="Home" className="row">
      <div className="titleSection">
        <div className="businessCard">
          <div
            className={"frontCard " + flipClassName}
            onClick={() => {
              setFlip(!flip);
            }}
          ></div>
          <div
            className={"backCard " + (flip ? "" : "flip")}
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <div className="insideBack">
              <ul>
                <li>
                  <a href="mailto:ArthursJacob01@Gmail.com">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    ArthursJacob01@Gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jacobarthurs/">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    Jacob Arthurs
                  </a>
                </li>
                <li>
                  <a href="https://github.com/JacobArthurs">
                    <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    Jacob Arthurs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
