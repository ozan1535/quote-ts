import ContactForm from "../components/ContactForm";
import classes from "./../styles/contact.module.css";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Contact() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.data) {
      router.push("/");
    }
  }, [router, session]);

  if (session.data) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={classes.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactForm />
    </div>
  );
}
