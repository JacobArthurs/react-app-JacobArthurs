import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [transition, setTransition] = React.useState();
  const transitionClassName = transition ? "show" : "";
  const [submitted, setSubmitted] = React.useState();

  return (
    <section id="Contact" className="row">
      <div className="container">
        <div className="col-sm-6" id="imgContainer">
          <div id="personalImg"></div>
          <div
            className={"overlay " + transitionClassName}
            onClick={() => {
              setTransition(!transition);
            }}
          >
            <div className="hiddenText">
              Hardworking and self-motivated individual with experience in web
              development. Proficient in various platforms, languages, and
              embedded systems. A creative thinker, adept in the software
              development life cycle. Seeking employment as a software engineer
              or web developer in the College Station, Texas area or a remote
              location. Expected to graduate Oklahoma State University in May
              2022 with a Bachelor of Science majoring in Computer Science.
            </div>
          </div>
        </div>
        <div className="col-sm-6" id="form-container">
          <div id="form-blurb">Connect with Me</div>
          <div>
            <div className="form-group">
              <label className="input-text" htmlFor="nameInput">
                NAME
              </label>
              <input
                title="Please enter your first and last name"
                type="text"
                className="form-control"
                id="nameInput"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-text" htmlFor="emailInput">
                EMAIL
              </label>
              <input
                title="Please enter your email address"
                type="text"
                className="form-control"
                id="emailInput"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label className="input-text" htmlFor="phoneInput">
                PHONE NUMBER
              </label>
              <input
                title="Please enter your phone number"
                type="text"
                className="form-control"
                id="phoneInput"
                name="phone"
                placeholder="Optional"
              />
            </div>
            <div className="form-group">
              <label className="input-text" htmlFor="messageInput">
                MESSAGE
              </label>
              <textarea
                title="Please enter your message"
                type="text"
                className="form-control"
                id="messageInput"
                name="message"
                required
              />
            </div>
            <button
              id="submitBtn"
              className="btn btn-primary"
              onClick={() => setSubmitted(true)}
            >
              <>
                {submitted ? (
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                ) : (
                  "SUBMIT"
                )}
              </>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
