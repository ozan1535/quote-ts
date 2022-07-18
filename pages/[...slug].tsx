import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilteredQuotes from "../components/FilteredQuotes";
import { IGetQuotes, IQuoteProps } from "../IModels";
import classes from "./../styles/slug.module.css";

export default function DateQuote({ quotes }: IQuoteProps) {
  const { authorquotes } = quotes;
  console.log(authorquotes);

  const router = useRouter();
  const [singlePost, setSinglePost] = useState<IGetQuotes[]>([]);
  const filterData: string | string[] | undefined = router.query.slug;

  const year = filterData![0];
  const month = filterData![1];

  useEffect(() => {
    setSinglePost(
      authorquotes.filter(
        (quote: IGetQuotes) => year === quote.year && month === quote.month
      )
    );
  }, [authorquotes, month, year]);

  if (!filterData) {
    return <h1>Loading...</h1>;
  }

  if (singlePost?.length === 0) {
    return <h1>No valid quote</h1>;
  }

  return (
    <div className={classes.container}>
      <FilteredQuotes quoteList={singlePost} />
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
