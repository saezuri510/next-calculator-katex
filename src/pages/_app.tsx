import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import apolloClient from "../lib/apollo";

const ROBOTO_MEDIUM = Roboto({ subsets: ["cyrillic"], weight: "500" });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <style global jsx>
        {`
          :root {
            --font-roboto-medium: ${ROBOTO_MEDIUM.style.fontFamily};
          }
        `}
      </style>
    </ApolloProvider>
  );
};

export default MyApp;
