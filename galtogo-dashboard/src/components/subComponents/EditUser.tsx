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

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5050/user/${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone, email }),
    });

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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
