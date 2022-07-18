import Date from "../Date";
import classes from "./addForm.module.css";
import { useRef, useState } from "react";
import Error from "../Error";
import { IPreventDefault } from "../../IModels";

export default function AddForm() {
  const authorRef = useRef<HTMLInputElement>(null);
  const quoteRef = useRef<HTMLTextAreaElement>(null);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [infoMessage, setInfoMessage] = useState("");

  const addQuote = (e: IPreventDefault): void => {
    e.preventDefault();
    if (
      !authorRef.current?.value ||
      !quoteRef.current?.value ||
      !year ||
      !month
    ) {
      setShowError(true);
      setSuccess(false);
      setInfoMessage("Error Occured");
    } else {
      fetch("/api/add", {
        method: "POST",
        body: JSON.stringify({
          author: authorRef.current?.value,
          quote: quoteRef.current?.value,
          year,
          month,
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
    }

    authorRef.current!.value = "";
    quoteRef.current!.value = "";
  };

  return (
    <div className={classes.mainDiv}>
      <form className={classes.container} onSubmit={addQuote}>
        <div>
          <label htmlFor="author">Author</label> <br />
          <input type="text" id="author" ref={authorRef} />
        </div>
        <div>
          <label htmlFor="quote">Quote</label>
          <br />
          <textarea id="quote" rows={5} ref={quoteRef}></textarea>
        </div>
        <div>
          <label htmlFor="quote">Date</label>
          <Date setYear={setYear} setMonth={setMonth} />
        </div>
        <button>Add Quote</button>
      </form>
      {showError && <Error success={success} infoMessage={infoMessage} />}
    </div>
  );
}
