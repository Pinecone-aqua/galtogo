/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";

interface EditUserProps {
  user: IUser;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUser: React.FC<EditUserProps> = ({ user, setUsers, setShowEdit }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitHandler = async (e: any): Promise<void> => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user/${user._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phone, email }),
      }
    );

    if (response.ok) {
      setUsers((prevUsers) =>
        prevUsers.map((prevUser) =>
          prevUser._id === user._id
            ? { ...prevUser, firstName, lastName, phone, email }
            : prevUser
        )
      );
      setShowEdit(false);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <div className="relative bg-white rounded-lg max-w-md w-full mx-auto p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Edit User</h2>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowEdit(false)}
            >
              <span className="sr-only">Close</span>
            </button>
          </div>

          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                className="border rounded-lg py-2 px-3"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                className="border rounded-lg py-2 px-3"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="number"
                className="border rounded-lg py-2 px-3"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                className="border rounded-lg py-2 px-3"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none mr-3"
                onClick={() => setShowEdit(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
