import React, { useRef, useState } from "react";
import useInput from "../hooks/use-input.jsx";
import emailjs from "emailjs-com";
import { useSnackbar } from "react-simple-snackbar";
import { options } from "../config.jsx";
import ValidateEmail from "../utils/ValidateEmail";

const isEmail = (value) => ValidateEmail(value);

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar] = useSnackbar(options);
  const form = useRef();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim().length >= 5);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim().length >= 5);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    setLoading(true);
    await emailjs.sendForm(
      "service_wv85c26",
      "template_tha9w0c",
      form.current,
      "user_4ll1yQcJszeRMIrqapJRL"
    );
    openSnackbar("Send your message to Ali.", 1000);
    setLoading(false);
    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  };

  const nameClasses = nameInputHasError ? "invalid" : "";
  const emailClasses = emailInputHasError ? "invalid" : "";
  const subjectClasses = subjectInputHasError ? "invalid" : "";
  const messageClasses = messageInputHasError ? "invalid" : "";

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className={nameClasses}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
      </div>

      <div className={emailClasses}>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
      </div>

      <div className={subjectClasses}>
        <input
          placeholder="Subject"
          type="text"
          name="subject"
          value={enteredSubject}
          onBlur={subjectBlurHandler}
          onChange={subjectChangeHandler}
        />
      </div>

      <div className={messageClasses}>
        <textarea
          rows="6"
          placeholder="Your Message"
          name="message"
          value={enteredMessage}
          onBlur={messageBlurHandler}
          onChange={messageChangeHandler}
        />
      </div>
      <button disabled={!formIsValid} className="btn btn-contact">
        {!loading ? "Send" : <span class="spinner"></span>}
      </button>
    </form>
  );
};
