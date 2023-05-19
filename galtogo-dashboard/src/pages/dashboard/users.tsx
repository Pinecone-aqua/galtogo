import Layout from "@/components/Layout";
import AddUserButton from "@/components/subComponents/AddUserButton";
import Button from "@/components/subComponents/Button";
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user`
      );
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
            <Button
              type="button"
              variant="default"
              size="lg"
              className="sm:mx-6 m-3"
              onClick={buttonShowHandler}
            >
              Add User <BsPersonAdd size={23} />
            </Button>
            <input
              placeholder="Search"
              type="text"
              className="border rounded-lg p-4 my-4 h-11 px-8"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </div>

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
