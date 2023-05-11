import Button from "@/components/subcomponents/Button";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = (): JSX.Element => {
  // const router = useRouter();
  const [translate, setTranslate] = useState(
    "text-base text-slate-300 top-5 left-20 -z-20"
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(phoneNumber);
    const data = await axios
      .post(`${process.env.NEXT_PUBLIC_PORT}/user/login`, { phoneNumber })
      .then((res) => res.data);
    // const { verificationId } = data;
    // router.push(
    //   `api/verify-otp?phoneNumber=${phoneNumber}&verificationId=${verificationId}`
    // );
    console.log(data);
    console.log("(+976)", phoneNumber);
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
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            maxLength={8}
            pattern="[5-9]{1}[0-9]{7}"
            autoComplete="off"
            required
            className={`ps-16 py-2 m-3 w-64 border rounded-lg bg-white/5 text-slate-500 invalid:text-red-600 focus:outline-none focus:border-sky-800`}
            onFocus={() =>
              setTranslate("text-sm -top-0 left-5 text-sky-800 z-1")
            }
            onBlur={(e) =>
              !e.target.value &&
              setTranslate("text-base text-slate-300 top-5 left-20 -z-20")
            }
          />
          <p className="absolute top-5 left-5 text-slate-500">(+976)</p>
          <p
            className={`absolute text-center bg-white select-none px-1 ${translate} duration-300`}
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
