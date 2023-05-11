import axios from "axios";
import React from "react";
import Button from "./Button";

export const PhoneInputForm = (props: {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  const { phoneNumber, setPhoneNumber } = props;
  const [translate, setTranslate] = React.useState<string>(
    "text-base text-slate-300 top-5 left-20 -z-20"
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) =>
    isFinite(e.target.value) && setPhoneNumber(e.target.value);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const data = axios
    //   .post(`${process.env.NEXT_PUBLIC_PORT}/user/login`, { phoneNumber })
    //   .then((res) => res.data);
    // console.log(data);
    console.log("(+976)", phoneNumber);
  };

  return (
    <form id="login" onSubmit={handleSubmit} className="mx-auto relative">
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phoneNumber}
        onChange={handleChange}
        maxLength={8}
        pattern="[5-9]{1}[0-9]{7}"
        autoComplete="off"
        required
        className={`ps-16 py-2 m-3 w-64 border rounded-lg bg-white/5 text-slate-500 invalid:text-red-600 focus:outline-none focus:border-sky-800`}
        onFocus={() => setTranslate("text-sm -top-0 left-5 text-sky-800 z-1")}
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
      <Button type="submit" disabled={phoneNumber.length < 8}>
        Send
      </Button>
      <p className="text-gray-400 text-sm text-center mx-auto">
        Phone format: 99112233
      </p>
    </form>
  );
};
