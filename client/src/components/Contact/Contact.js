import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [transition, setTransition] = React.useState();
  const transitionClassName = transition ? "show" : "";
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [sentErrorMessage, setSentErrorMessage] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async (e) => {
    setNameError(false);
    setEmailError(false);
    setPhoneNoError(false);
    setMessageError(false);
    setSentErrorMessage(false);
    e.preventDefault();
    let invalidInput = false;
    //Validate name input
    if (!name.match(/^[a-zA-Z][a-zA-Z '-]{1,30}$/)) {
      console.log("invalid name");
      invalidInput = true;
      setNameError(true);
    }
    //Validate email input
    let lastAtPos = email.lastIndexOf("@");
    let lastDotPos = email.lastIndexOf(".");
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      setEmailError(true);
      invalidInput = true;
      console.log("invalid email");
    }
    //Validate phone input
    if (phoneNo !== "") {
      if (
        !phoneNo.match(
          /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
        )
      ) {
        console.log("invalid phone");
        invalidInput = true;
        setPhoneNoError(true);
      }
    }
    //Validate message input
    if (!message.match(/^.{1,1000}$/)) {
      console.log("invalid message");
      invalidInput = true;
      setMessageError(true);
    }
    if (!invalidInput) {
      handleSend(e);
      if (sent === true) {
        setName("");
        setEmail("");
        setPhoneNo("");
        setMessage("");
        await delay(5000);
        setSent(false);
      } else {
        setSentError(true);
        setSentErrorMessage(true);
        await delay(3000);
        setSentError(false);
      }
    } else {
      setSentError(true);
      setSentErrorMessage(true);
      await delay(3000);
      setSentError(false);
    }
  };

  const handleSend = async (e) => {
    let data = {
      name,
      email,
      phoneNo,
      message,
    };
    try {
      e.preventDefault();
      await axios.post("/send_mail", {
        data,
      });
      setSent(true);
    } catch (error) {
      console.log(error);
    }
  };

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
              Hardworking individual with experience in web development and a
              porven ability to design, implement, test, and debug web systems.
              A creative thinker, adept in the software development life cycle.
              Seeking employment as a software engineer or web developer in any
              remote location. Expected to graduate in May 2022 with a Bachelor
              of Science in Computer Science, but available for full-time
              employment immediately.
            </div>
          </div>
        </div>
        <form className="col-sm-6" id="form-container" onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span
                className={nameError ? "errorTextVisible" : "errorText"}
                id="nameError"
              >
                Please enter a valid name.
              </span>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className={emailError ? "errorTextVisible" : "errorText"}
                id="emailError"
              >
                Please enter a valid email
              </span>
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
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <span
                className={phoneNoError ? "errorTextVisible" : "errorText"}
                id="phoneNoError"
              >
                Please enter a valid phone number
              </span>
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span
                className={messageError ? "errorTextVisible" : "errorText"}
                id="messageError"
              >
                Please enter a valid message. Messages can only contain up to
                300 characters.
              </span>
            </div>
            <button
              id="submitBtn"
              className={
                sentError
                  ? "btn btn-primary sentError"
                  : sent
                  ? "btn btn-primary sentSuccess"
                  : "btn btn-primary"
              }
              type="submit"
              disabled={sent}
            >
              <>
                {sentError ? (
                  <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                ) : sent ? (
                  <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                ) : (
                  "SUBMIT"
                )}
              </>
            </button>
            <span
              className={sentErrorMessage ? "errorTextVisible" : "errorText"}
              id="submitError"
            >
              Sorry, there was an error sending your message. Please try again.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
