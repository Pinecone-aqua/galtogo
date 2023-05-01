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
    fetch(`http://localhost:5050/user/${id}`, {
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
    fetch(`http://localhost:5050/reservation?user=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const userReservations = data.filter(
          (reservation: { user: { _id: string } }) =>
            reservation.user._id === id
        );
        setReservations(userReservations);
        setShowReservation(!showReservation); // toggle showReservation
      });
  }

  return (
    <tr className="text-center text-left">
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>
        <td>
          <button
            onClick={() => showReservationHandler(user._id)}
            className="bg-blue-500 p-2 rounded-lg text-white"
          >
            <AiOutlineEye />
          </button>
          {showReservation && (
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-lg mb-2">Reservation dates:</p>
                {reservations
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                  )
                  .map((reservation) => (
                    <p key={reservation._id}>{reservation.date}</p>
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
            className="bg-green-500 p-2 rounded-lg text-white"
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
            className="bg-red-500 p-2 rounded-lg text-white"
          >
            <AiOutlineDelete />
          </button>
        </td>
      </td>
    </tr>
  );
};

export default User;
