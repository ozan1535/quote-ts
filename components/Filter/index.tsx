import classes from "./filter.module.css";
import Link from "next/link";
import { IGetQuotes, IQuoteProps } from "../../IModels";

export default function Filter({ quotes }: IQuoteProps) {
  const { authorquotes } = quotes;

  return (
    <>
      {authorquotes.map((quote: IGetQuotes) => (
        <div className={classes.smContainer} key={quote._id}>
          <div className={classes.filterCard}>
            <div className={classes.filterCardText}>
              <div className={classes.filterCardTextSmall}>
                <small>{quote.author}</small>
                <small>
                  {quote.year}/{quote.month}/23
                </small>
              </div>
              <div className={classes.filterCardTextQuote}>
                {quote.quote.substring(0, 250)}...
              </div>
            </div>
            <Link href={`/${quote._id}`}>
              <a className={classes.filterCardButton}>Read More...</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
