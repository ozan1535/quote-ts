import Filter from "../components/Filter";
import FilterDate from "../components/FilterDate";
import classes from "./../styles/home12.module.css";
import Head from "next/head";
import { IQuoteProps } from "../IModels";

export default function Home({ quotes }: IQuoteProps) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Home</title>
      </Head>

      <div className={classes.filterDate}>
        <FilterDate />
      </div>
      <div className={classes.filter}>
        <Filter quotes={quotes} />
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
