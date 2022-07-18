import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./../styles/singlePost.module.css";
import { useSession } from "next-auth/react";
import { IAuthorQuotes, IGetQuotes, IQuoteProps } from "../IModels";

export default function SinglePost({ quotes }: IQuoteProps) {
  const router = useRouter();
  const quoteId = router.query.id;
  const quote = quotes.authorquotes;
  const [singleQuote, setSingleQuote] = useState<IGetQuotes>();

  const session = useSession();
  useEffect(() => {
    if (!session.data) {
      router.push("/");
    }
  }, [router, session]);

  useEffect(() => {
    setSingleQuote(quote.filter((item: IGetQuotes) => item._id === quoteId)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quotes]);

  if (!session.data) {
    return <h1>Loading</h1>;
  }

  if (!singleQuote) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.author}>
        <h1>{singleQuote.author}</h1>
      </div>
      <div className={classes.quote}>
        <p>{singleQuote.quote}</p>
      </div>
      <div className={classes.date}>
        <p>
          {singleQuote.year}/{singleQuote.month}/23
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://nextjs-project-dnja6jscr-ozanbilgic-nextedycom.vercel.app/api/get`
  );
  const data = await res.json();
  return { props: { quotes: data } };
}
