import "@/styles/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import type { AppProps } from "next/app";
import Load from "@/components/subComponents/Load";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Load />
      <Component {...pageProps} />
    </>
  );
}

export default App;
