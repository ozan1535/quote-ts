import { useRef, useState } from "react";
import { IPreventDefault } from "../../IModels";
import Error from "../Error";
import classes from "./contactForm.module.css";

export default function ContactForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [infoMessage, setInfoMessage] = useState("");

  const sendMessage = (e: IPreventDefault) => {
    e.preventDefault();
    if (!titleRef.current?.value || !messageRef.current?.value) {
      setShowError(true);
      setSuccess(false);
      setInfoMessage("Fill inputs");
    } else {
      fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          title: titleRef.current?.value ?? "",
          message: messageRef.current?.value ?? "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          setShowError(true);
          setSuccess(true);
          setInfoMessage("Request Successful");
          setTimeout(() => {
            setShowError(false);
          }, 3000);
        } else {
          setShowError(true);
          setSuccess(false);
          setInfoMessage("Error Occured");
          setTimeout(() => {
            setShowError(false);
          }, 3000);
        }
      });
      titleRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.contactText}>Contact Us</div>
      <form className={classes.contactForm} onSubmit={sendMessage}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" ref={messageRef} rows={5}></textarea>
        </div>
        <button>Send Message</button>
      </form>
      {showError && <Error success={success} infoMessage={infoMessage} />}
    </div>
  );
}
