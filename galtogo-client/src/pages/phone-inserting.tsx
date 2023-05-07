import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface PhoneInsertingProps {
  token: string;
}

export default function PhoneInserting({ token }: PhoneInsertingProps) {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/phone", {
        token,
        phone,
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
