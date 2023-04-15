import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const ROBOTO_MEDIUM = Roboto({ subsets: ["cyrillic"], weight: "500" });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
      <style global jsx>
        {`
          :root {
            --font-roboto-medium: ${ROBOTO_MEDIUM.style.fontFamily};
          }
        `}
      </style>
    </div>
  );
};

export default MyApp;
