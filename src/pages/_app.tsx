import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { RecoilRoot } from "recoil";

import { AuthProvider } from "../components/contexts/AuthContext";
import { WarningToast } from "../components/toasts/WarningToast";
import apolloClient from "../lib/apollo";

const ROBOTO_MEDIUM = Roboto({ subsets: ["cyrillic"], weight: "500" });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <AuthProvider>
          <Component {...pageProps} />
          <WarningToast />
          <style global jsx>
            {`
              :root {
                --font-roboto-medium: ${ROBOTO_MEDIUM.style.fontFamily};
              }
            `}
          </style>
        </AuthProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default MyApp;
