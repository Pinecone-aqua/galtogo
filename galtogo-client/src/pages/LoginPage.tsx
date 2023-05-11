import React from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

import { PhoneInputForm } from "@/components/subcomponents/PhoneInputForm";
import { OtpInput } from "@/components/subcomponents/OtpInputForm";

const LoginPage = (): JSX.Element => {
  // const router = useRouter();

  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    if (phoneNumber) {
      console.log("LoginPage: ", phoneNumber);
    }
  }, [phoneNumber]);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="max-w-lg flex flex-col justify-center items-center">
        <div className="text-center p-3 m-10 mx-auto text-lg font-bold">
          Please confirm your phone number to create the Reservation.
        </div>
        <PhoneInputForm
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />

        <div className="text-center p-3 m-10 mx-auto text-lg font-bold">
          {`Please input 6-digit code sent to your ******${phoneNumber.slice(
            6,
            8
          )} number.`}
        </div>
        <OtpInput />
      </div>
    </div>
  );
};

export default LoginPage;
