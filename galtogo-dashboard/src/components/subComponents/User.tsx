import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import EditUser from "./EditUser";

interface UserProps {
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  user: IUser;
}

const User: React.FC<UserProps> = ({ user, setUsers }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [reservations, setReservations] = useState<IReservation[]>([]);

  function deleteHandler(id: string): void {
    fetch(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log("res: ", res);
      if (res.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      }
    });
  }

  function showReservationHandler(id: string): void {
    fetch(
      `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation?user=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        const userReservations = data.filter(
          (reservation: { user: { _id: string } }) =>
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            reservation.user && reservation.user._id === id
        );
        setReservations(userReservations);
        setShowReservation(!showReservation);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <tr className="my-3 p-2 cursor-pointer hover:bg-gray-200 justify-between">
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>
        <td>
          <button
            onClick={() => showReservationHandler(user._id)}
            className="bg-yellow-200 p-2 rounded-lg text-black hover:bg-yellow-400"
          >
            <AiOutlineEye />
          </button>
          {showReservation && (
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-lg mb-2">Reservation history:</p>
                {reservations
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                  )
                  .map((reservation) => (
                    <p key={reservation._id}>
                      {reservation.date} {reservation.time} {reservation.status}
                    </p>
                  ))}
                <button
                  onClick={() => setShowReservation(false)}
                  className="bg-blue-500 p-2 rounded-lg text-white mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </td>
        <td>
          <button
            onClick={() => setShowEdit(true)}
            className="bg-green-200 p-2 rounded-lg text-black hover:bg-green-400"
          >
            <AiOutlineEdit />
          </button>
          {showEdit && (
            <EditUser
              user={user}
              setUsers={setUsers}
              setShowEdit={setShowEdit}
            />
          )}
        </td>
        <td>
          <button
            onClick={() => deleteHandler(user._id)}
            className="bg-red-200 p-2 rounded-lg text-black hover:bg-red-400"
          >
            <AiOutlineDelete />
          </button>
        </td>
      </td>
    </tr>
  );
};

export default User;
