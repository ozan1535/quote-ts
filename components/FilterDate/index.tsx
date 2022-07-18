import Date from "../Date";
import classes from "./filterDate.module.css";
import { useState } from "react";
import Link from "next/link";

export default function FilterDate() {
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");

  return (
    <div className={classes.container}>
      <Date setYear={setYear} setMonth={setMonth} />
      <Link className={classes.button} href={`${year}/${month}`}>
        <a>Search</a>
      </Link>
    </div>
  );
}
