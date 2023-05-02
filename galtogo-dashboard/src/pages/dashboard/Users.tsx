import Layout from "@/components/Layout";
import AddUserButton from "@/components/subComponents/AddUserButton";
import User from "@/components/subComponents/User";
import React, { useEffect, useState } from "react";
import { BsPersonAdd } from "react-icons/bs";

const Customers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showAddButton, setShowAddButton] = useState(false);

  const buttonShowHandler = () => {
    setShowAddButton(!showAddButton);
  };

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
          <div className="flex justify-between">
            <button
              onClick={buttonShowHandler}
              className="flex gap-3 bg-gray-100 p-4 rounded-lg inline-block hover:bg-gray-200 cursor-pointers my-4"
            >
              Add User <BsPersonAdd size={23} />
            </button>
            {showAddButton ? <AddUserButton setUsers={setUsers} /> : <></>}{" "}
            <input
              placeholder="Search"
              type="text"
              className="border rounded-lg p-4 my-4"
            />
          </div>
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
              {users.map((user) => (
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
