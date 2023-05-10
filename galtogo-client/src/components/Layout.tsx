import Head from "next/head";
import { ReactNode } from "react";
// import Navigation from "./Navigation";
// import Footer from "./Footer";
import Button from "./subcomponents/Button";
import { NextRouter, useRouter } from "next/router";
import Footer from "./Footer";

type PropType = {
  children: ReactNode;
};
export default function Layout({ children }: PropType) {
  const router: NextRouter = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("Reservation");
  };
  return (
    <>
      <Head>
        <title>GALTOGO APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white w-full">
        <Button
          className="fixed bottom-4 right-3 sm:right-20 lg:top-8 z-20"
          size="sm"
          onClick={handleClick}
        >
          + Reservation
        </Button>
        {/* <Navigation /> */}
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
}
