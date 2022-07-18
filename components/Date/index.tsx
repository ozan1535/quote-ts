import { useEffect } from "react";
import { IDateProps } from "../../IModels";
import classes from "./../FilterDate/filterDate.module.css";

export default function Date(props: IDateProps) {
  const { setYear, setMonth } = props;

  useEffect(() => {
    setYear("2021");
    setMonth("01");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <select
        className={classes.year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      <select
        className={classes.year}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
}
