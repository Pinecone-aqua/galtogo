import Button from "@/components/subcomponents/Button";
import Image from "next/image";
import { useState } from "react";

const LoginPage = (): JSX.Element => {
  const [slide, setSlide] = useState(
    "text-base text-slate-300 top-5 left-20 -z-20"
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("(+976)", e.target.phone.value);
  };

  return (
    <div className="w-screen h-screen flex justify-center ">
      <div className="max-w-lg flex flex-col justify-center items-center">
        <div className="text-center p-3 m-10 mx-auto text-lg font-bold">
          To confirm the Reservation you need to login
        </div>
        <form id="login" onSubmit={handleSubmit} className="mx-auto relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={8}
            pattern="[2-9]{4}[0-9]{4}"
            autoComplete="off"
            required
            className={`ps-16 py-2 m-3 w-64 border rounded-lg bg-white/5 text-slate-500 invalid:text-red-600 focus:outline-none focus:border-sky-800`}
            onFocus={() => setSlide("text-sm -top-0 left-5 text-sky-800 z-1")}
            onBlur={(e) =>
              !e.target.value &&
              setSlide("text-base text-slate-300 top-5 left-20 -z-20")
            }
          />
          <p className="absolute top-5 left-5 text-slate-500">(+976)</p>
          <p
            className={`absolute text-center bg-white select-none px-1 ${slide} duration-300`}
          >
            Phone number
          </p>
          <Button type="submit" className="hover:cursor-pointer" value="Verify">
            Verify
          </Button>
          <p className="text-gray-400 text-sm text-center mx-auto">
            Phone format: 99112233
          </p>
        </form>
        <p className="text-center m-10">- or -</p>
        <div className="p-3 bg-slate-300 text-center w-1/2 hover:cursor-pointer rounded-lg flex justify-evenly items-center">
          <span>
            <Image src="./google.svg" alt="googleLogo" width={20} height={20} />
          </span>
          <span>Google Login</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
