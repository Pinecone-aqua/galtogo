import Head from "next/head";
import { ReactNode } from "react";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { NextRouter, useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

type PropType = {
  children: ReactNode;
};
export default function Layout({ children }: PropType) {
  const router: NextRouter = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault(); // ?
    router.push("reservation");
  };

  // challange title n product iin name baih
  return (
    <>
      <Head>
        <title>GALTOGO APP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="fixed bottom-4 right-2 p-1 md:bottom-[50%] md:right-8 md:p-3 rounded-full z-40 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div
            className="py-3 px-3 md:px-4 md:py-4 border rounded-full text-[#0D5C63] hover:bg-[#0D5C63] transition-all duration-200 hover:text-white"
            onClick={handleClick}
          >
            <div className="flex flex-col items-center text-sm">
              <RiShoppingBasket2Fill size={"18px"} />
            </div>
          </div>

          <div
            className="mt-2 px-3 py-3 md:px-4 md:py-4 border rounded-full  text-[#0D5C63] hover:bg-[#0D5C63] transition-all duration-200 hover:text-white"
            onClick={handleClick}
          >
            <div className="flex flex-col items-center text-sm">
              <MdOutlineTableRestaurant size={"18px"} />
            </div>
          </div>
        </div>
        <Navigation />

        <ToastContainer
          autoClose={3000}
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
}
