import Layout from "@/components/Layout";
import AddUserButton from "@/components/subComponents/AddUserButton";
import User from "@/components/subComponents/User";
import React, { useEffect, useState } from "react";
import { BsPersonAdd } from "react-icons/bs";

const Customers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showAddButton, setShowAddButton] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const buttonShowHandler = () => {
    setShowAddButton(!showAddButton);
  };
  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:5050/user");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="p-4">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          <input
            placeholder="Search"
            type="text"
            className="border rounded-lg p-4 my-4"
            value={searchValue}
            onChange={handleSearchInputChange}
          />

          <button
            onClick={buttonShowHandler}
            className="flex gap-3 bg-gray-100 p-4 rounded-lg inline-block hover:bg-gray-200 cursor-pointers my-4 bg-gray-100 hover:bg-gray-200 bg-sky-800 text-white"
          >
            Add User <BsPersonAdd size={23} />
          </button>
          {showAddButton ? <AddUserButton setUsers={setUsers} /> : <></>}
          <table className="justify-around w-full">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) =>
                  `${user.firstName} ${user.lastName} ${user.phone} ${user.email}`
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((user) => (
                  <User key={user._id} user={user} setUsers={setUsers} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Customers;
