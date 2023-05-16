import { Dispatch, FC, SetStateAction, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { ReservationStatus } from "@/utils/constants";
import { toast } from "react-toastify";

interface CardProps {
  reservation: IReservation;
  setReservations: Dispatch<SetStateAction<IReservation[]>>;
}

const ReservationCard: FC<CardProps> = ({ reservation, setReservations }) => {
  const [showStatusBtns, setShowStatusBtns] = useState(false);
  const statusBtns = Object.values(ReservationStatus);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeStatus = (e: any) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/${e.target.id}/confirm?status=${e.target.name}`
      )
      .then((res) => {
        setReservations(res.data.result);
        toast.success(res.data.message);
      })
      .catch((err) => console.log("Current id is not found", err));
    setShowStatusBtns(false);
  };

  return (
    <div className="bg-gray-50 hover:bg-gray-100 rounded-lg sm:mx-3 my-3 p-2">
      <div className="p-4 flex items-center justify-between border-b-4">
        <p className="bg-sky-600 p-3 rounded-lg text-center text-white font-bold">
          {"# " + reservation.table.name}
        </p>
        <div className="">
          <p className="text-gray-800 font-bold">{reservation.date}</p>
          <p className="text-gray-400">{reservation.time}</p>
        </div>
      </div>
      {reservation.user.firstName ? (
        <div className="cardBody p-4 text-gray-400 text-md">
          <p className="text-gray-800">
            {`${reservation.user.firstName} ${reservation.user.lastName}`}
          </p>
          <p className="">
            {reservation.user.phone ? reservation.user.phone : "-"}
          </p>
          <p className="text-sm">
            {reservation.user.email ? reservation.user.email : "-"}
          </p>
        </div>
      ) : (
        <div>Deleted user</div>
      )}

      <div className="relative group/status">
        <Button
          id={reservation._id}
          onClick={() => setShowStatusBtns(true)}
          className="m-4"
          size="default"
          variant={
            reservation.status === ReservationStatus.PENDING
              ? "yellow"
              : reservation.status === ReservationStatus.CONFIRMED
              ? "green"
              : "red"
          }
        >
          {reservation.status}
        </Button>
        {
          <div
            className={`${
              showStatusBtns
                ? "hidden group-focus-within/status:flex"
                : "hidden"
            }  absolute bg-gray-50 rounded-xl top-0 order-20 w-fit flex-col`}
          >
            {statusBtns.map((statusName, index) => (
              <Button
                key={index}
                onClick={handleChangeStatus}
                name={statusName}
                id={reservation._id}
                className="m-4"
                size="default"
                variant={
                  statusName === ReservationStatus.PENDING
                    ? "yellow"
                    : statusName === ReservationStatus.CONFIRMED
                    ? "green"
                    : "red"
                }
              >
                {statusName}
              </Button>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default ReservationCard;
