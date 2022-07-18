import LayoutDefault from "../layout";
import "./../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StateContextProvider } from "../store/state-context";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <StateContextProvider>
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      </StateContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
