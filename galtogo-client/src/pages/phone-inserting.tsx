import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PhoneInserting() {
  const router = useRouter();
  const [users, setUsers] = useState<IUser[]>([]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("http://localhost:5050/user")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  console.log("user FE", users);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5050/user/${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    if (response.ok) {
      // setUsers((prevUsers) =>
      //   prevUsers.map((prevUser) =>
      //     prevUser._id === user._id ? { ...prevUser, phone } : prevUser
      //   )
      // );
      router.push("/");
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
