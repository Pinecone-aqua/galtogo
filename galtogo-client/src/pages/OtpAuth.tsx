import { FunctionComponent, useState } from "react";
import { getAuth } from "firebase/auth";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import Button from "@/components/subcomponents/Button";
import OTPInput, { PhoneInput } from "otp-input-react";
import { MuiOtpInput } from "mui-one-time-password-input";

interface OtpAuthProps {}

const OtpAuth: FunctionComponent<OtpAuthProps> = () => {
  const [otp, setOtp] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div>
      <div>
        <BsTelephoneFill />

        <label>Verify your phone number</label>
        <PhoneInput country={"mn"} onChange={setPhone} />
        <Button variant={"default"} size={"lg"}>
          {loading && <CgSpinner size={20} />}
          <span>Verify Phone Number</span>
        </Button>
      </div>
      <div>
        <BsFillShieldLockFill />
        <label>Enter your OTP</label>
        <MuiOtpInput value={otp} onChange={setOtp} />
        <Button variant={"default"} size={"lg"}>
          {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
          <span>Verify OTP</span>
        </Button>
      </div>
    </div>
  );
};

export default OtpAuth;

const auth = getAuth();
