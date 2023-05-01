import Layout from "@/components/Layout";
import User from "@/components/subComponents/User";
import axios from "axios";
import { useState } from "react";

export default function Customers(props: { usersData: IUser[] }): JSX.Element {
  const { usersData } = props;
  const [users, setUsers] = useState(usersData);

  console.log("users:", users);
  console.log("usersData:", usersData);

  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          {users &&
            users.map((user: IUser, i: number) => <User user={user} key={i} />)}
        </div>
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:5050/user");
//   const usersData = await res.json();
//   return {
//     props: {
//       usersData,
//     },
//   };
// }

export const getServerSideProps: () => Promise<{
  props: { usersData: IUser[] | null };
}> = async () => {
  const usersData = await axios
    .get(`http://localhost:5050/user`)
    .then((res) => res.data);
  return {
    props: {
      usersData,
    },
  };
};
