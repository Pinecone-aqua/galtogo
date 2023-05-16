import { useState } from "react";
import { BiPlus } from "react-icons/bi";

export default function AddUser({
  setUsers,
}: {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}): JSX.Element {
  const [newUser, setNewUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user/add`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, data]);
        setNewUser({ firstName: "", lastName: "", email: "", phone: "" });
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form className="grid grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="lastName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Овог"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="firstName"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Нэр"
          value={newUser.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="И-мэйл"
          value={newUser.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="phone"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Утасны дугаар"
          value={newUser.phone}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="submit"
        className="flex justify-center text-md w-2/8 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 border-green-500 hover:text-green-500"
      >
        Add
        <span className="px-1">
          <BiPlus size={24} />
        </span>
      </button>
    </form>
  );
}
