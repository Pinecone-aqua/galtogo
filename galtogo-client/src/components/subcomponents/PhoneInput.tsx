import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../../config/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import Button from "@/components/subcomponents/Button";
import axios from "axios";
import { useReservation } from "@/context/ReservationContext";
import OrderDetails from "./OrderDetails";
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recaptchaVerifier: any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    confirmationResult: any;
  }
}
const PhoneInput = ({ tableNumber }: { tableNumber: number }): JSX.Element => {
  // const router = useRouter();
  const { newReservation, setNewReservation } = useReservation();
  const [otp, setOtp] = useState<string>();
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const [success, setSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [translate, setTranslate] = useState<string>(
    "text-base text-slate-300 top-5 left-20 -z-20"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds !== 0 && timer) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        setTimer(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, timer]);

  const onCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) =>
    isFinite(e.target.value) && setPhoneNumber(e.target.value);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSend: (e: any) => void = (e) => {
    e.preventDefault();
    console.log("send: (+976)", phoneNumber);

    setTimer(true);

    if (phoneNumber.length === 8) {
      setSuccess(true);
      onCaptcha();
      signInWithPhoneNumber(
        auth,
        "+976" + phoneNumber,
        window.recaptchaVerifier
      )
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          toast.success("Phone number sent!");
        })
        .catch((error) => toast.error("Error! SMS not sent", error));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeOtp = (inputValue: any): void => {
    isFinite(inputValue) && setOtp(inputValue);
  };

  const handleVerify = () => {
    if (otp) {
      window.confirmationResult
        .confirm(otp)
        .then(async (res: { user: { phoneNumber: string } }) => {
          console.log("Verified: ", res.user.phoneNumber);

          const resData: IUser = await axios
            .get(
              `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user/phone/${phoneNumber}`
              // `${process.env.NEXT_PUBLIC_PORT}/user/phone/${phoneNumber}`
            )
            .then((res) => res.data)
            .catch((error) => console.log("Axios error!", error));

          resData._id &&
            setNewReservation((prev: IReservation) => ({
              ...prev,
              user: resData._id,
            }));
        })
        .catch(() => toast.error("Invalid Verification Code!"));
    } else {
      console.log(`No Verification Code!`);
    }
  };

  const addReservation = () => {
    newReservation.user &&
      axios
        .post(
          `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/add`,
          // `${process.env.NEXT_PUBLIC_PORT}/reservation/add`,
          newReservation
        )
        .then((res) => {
          console.log(res.data);
          setNewReservation(res.data);
          toast.success("Reservation successfully added!");
        })
        .catch((err) => console.log("newError: ", err));

    newReservation.user &&
      axios.get(
        `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user/auth/user?id=${newReservation.user}`
        // `${process.env.NEXT_PUBLIC_PORT}/user/auth/user?id=${newReservation.user}`
      );
  };
  return (
    <div className="w-screen h-screen flex flex-col md:pt-40 pt-10">
      <div id="recaptcha-container" />
      <section className="flex justify-center mx-auto">
        <OrderDetails tableNumber={tableNumber} />
      </section>
      {success ? (
        <section className="max-w-lg flex flex-col justify-center items-center mx-auto">
          <div className="text-center p-3 m-10 mx-auto text-lg font-bold">
            {`Please input 6-digit code sent to your ******${phoneNumber.slice(
              6,
              8
            )} number.`}
          </div>
          <div className="flex flex-col items-center gap-4">
            <MuiOtpInput
              value={otp}
              length={6}
              onChange={handleChangeOtp}
              TextFieldsProps={{ placeholder: "-" }}
            />
            <div className="flex flex-col items-center">
              <div className="flex gap-3">
                <div>00:{`${seconds < 10 ? "0" : ""}` + `${seconds}`}</div>
              </div>

              <button
                onClick={handleSend}
                disabled={timer}
                className={`${timer ? "text-gray-400" : "text-green-500"}`}
              >
                Resend code
              </button>
            </div>
            <Button
              type="button"
              onClick={handleVerify}
              disabled={!otp || otp.length < 6}
            >
              Verify
            </Button>
            <Button
              type="button"
              onClick={addReservation}
              disabled={newReservation.user ? false : true}
            >
              Make Reservation
            </Button>
          </div>
        </section>
      ) : (
        <section className="phone-input max-w-lg flex flex-col justify-center items-center mx-auto">
          <div className="text-center p-3 m-10 mx-auto text-lg font-bold">
            Please confirm your phone number to create the Reservation.
          </div>

          <form id="login" onSubmit={handleSend} className="mx-auto relative">
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
            <Button type="submit" disabled={phoneNumber.length < 8}>
              Send
            </Button>
            <p className="text-gray-400 text-sm text-center mx-auto">
              Phone format: 99112233
            </p>
          </form>
        </section>
      )}
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
};

export default PhoneInput;
