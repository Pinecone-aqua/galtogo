import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loader>
        <Component {...pageProps} />
      </Loader>
    </>
  );
}
