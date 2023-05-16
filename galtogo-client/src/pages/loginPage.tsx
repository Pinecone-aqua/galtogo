import React from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../config/firebase-config";

import { MuiOtpInput } from "mui-one-time-password-input";
import { toast } from "react-toastify";
import Button from "@/components/subcomponents/Button";
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recaptchaVerifier: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    confirmationResult: any;
  }
}
const LoginPage: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = React.useState<string>();
  const [timer, setTimer] = React.useState(false);
  const [seconds, setSeconds] = React.useState(59);
  const [success, setSuccess] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [translate, setTranslate] = React.useState<string>(
    "text-base text-slate-300 top-5 left-20 -z-20"
  );

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (phoneNumber) {
      console.log("LoginPage: ", phoneNumber);
    }
  }, [phoneNumber]);

  const onCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          // callback: (response: string) => {
          //   console.log("Recaptcha response:", response);
          // },
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
    console.log("(+976)", phoneNumber);

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
          toast.success("Sent!");
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
        .then(
          (res: {
            user: { phoneNumber: string };
            _tokenResponse: { idToken: string };
          }) => {
            console.log("Verify: ", res.user.phoneNumber);
            console.log("Verified user token: ", res._tokenResponse.idToken);

            router.push("/account");
          }
        )
        .catch((err: object) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center">
      <div id="recaptcha-container" />
      {success ? (
        <section className="max-w-lg flex flex-col justify-center items-center">
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
          </div>
        </section>
      ) : (
        <section className="phone-input max-w-lg flex flex-col justify-center items-center">
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
    </div>
  );
};

export default LoginPage;