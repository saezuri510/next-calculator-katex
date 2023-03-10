import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";

const ROBOTO_MEDIUM = Roboto({ weight: "500", subsets: ["cyrillic"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --font-roboto-medium: ${ROBOTO_MEDIUM.style.fontFamily};
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
