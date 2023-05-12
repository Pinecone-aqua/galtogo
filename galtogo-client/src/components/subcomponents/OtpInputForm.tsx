import React from "react";
import Button from "./Button";
import { MuiOtpInput } from "mui-one-time-password-input";
import { auth } from "../../config/firebase-config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export const OtpInput = (): JSX.Element => {
  const router = useRouter();
  const [otp, setOtp] = React.useState("");
  const [timer, setTimer] = React.useState(false);
  const [seconds, setSeconds] = React.useState(59);
  const [success, setSuccess] = React.useState(false);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (inputValue: any): void => {
    isFinite(inputValue) && setOtp(inputValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateChar = (value: any) => {
    const isNumber = typeof value === "number";
    const isString = typeof value === "string";
    return (isNumber || (isString && value !== "")) && !isNaN(Number(value));
  };

  const handleSend = async () => {
    setTimer(true);
    if (phoneNumber.length === 8) {
      setSuccess(true);
      await onCaptcha();
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        "+976" + phoneNumber,
        appVerifier
      );
      toast.success("Sent!");
      window.confirmationResult = confirmationResult;
      return confirmationResult;
    }
  };

  const handleVerify = () => {
    if (otp) {
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          console.log(res.user.phoneNumber);
          // requestAppointment();

          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <MuiOtpInput
          value={otp && otp}
          length={6}
          onChange={handleChange}
          validateChar={validateChar}
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
          disabled={!otp}
          type="button"
          onClick={handleVerify}
          disabled={otp.length < 6}
        >
          Verify
        </Button>
      </div>
    </>
  );
};
