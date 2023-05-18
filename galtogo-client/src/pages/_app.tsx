import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Loader from "@/components/Loader";
import UserProvider from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loader>
        <UserProvider>
          <Component {...pageProps} className={inter.className} />
        </UserProvider>
      </Loader>
    </>
  );
}
