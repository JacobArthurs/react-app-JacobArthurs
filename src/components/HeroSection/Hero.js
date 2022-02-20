import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Granim from "react-granim";

const Hero = () => {
  const [flip, setFlip] = React.useState();
  const flipClassName = flip ? "flip" : "";

  return (
    <section id="Home" className="row">
      <div className="titleSection">
        <Granim
          direction={"diagonal"}
          isPausedWhenNotInView={true}
          stateTransitionSpeed={5}
          states={{
            "default-state": {
              gradients: [
                ["#001219", "#005F73"],
                ["#0A9396", "#94D2BD"],
                ["#E9D8A6", "#EE9B00"],
                ["#CA6702", "#BB3E03"],
                ["#AE2012", "#9B2226"],
              ],
            },
          }}
        />
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
                  <a
                    href="mailto:&#065;&#114;&#116;&#104;&#117;&#114;&#115;&#074;&#097;&#099;&#111;&#098;&#048;&#049;&#064;&#071;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    &#065;&#114;&#116;&#104;&#117;&#114;&#115;&#074;&#097;&#099;&#111;&#098;&#048;&#049;&#064;&#071;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/JacobArthurs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    LinkedIn/JacobArthurs
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/JacobArthurs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    GitHub/JacobArthurs
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
