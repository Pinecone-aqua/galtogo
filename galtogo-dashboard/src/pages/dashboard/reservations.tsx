import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import Card from "@/components/subComponents/Card";
import axios from "axios";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

export default function Reservations(props: {
  reservationData: IReservation[];
}): JSX.Element {
  const { reservationData } = props;

  const handleClick = () => {
    console.log("Reservation add button");
  };
  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 bg-white border rounded-lg overflow-y-auto">
          <Button
            type="button"
            variant="default"
            size="lg"
            className=""
            onClick={handleClick}
          >
            Add Reservation
          </Button>

          <div className="p-2 my-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer ">
            <span>Reservation</span>
            <span className="hidden sm:flex ">Table</span>
            <span className="hidden md:grid">Booked Time</span>
            <span className="flex items-center justify-between">
              <p>Status</p>
              <BsThreeDotsVertical className="" />
            </span>
          </div>
          <ul>
            {reservationData.map((reservation, index) => (
              <li
                key={index}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 flex-wrap items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-sky-100 rounded-lg p-3">
                    <FaShoppingBag className="text-sky-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      {reservation.date}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {`${reservation.user.firstName} ${reservation.user.lastName}`}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex">
                  <p className="bg-sky-600 p-3 rounded-lg">
                    {"# " + reservation.table.name}
                  </p>
                </div>
                <p className="hidden md:grid">{reservation.time}</p>
                <p className="text-gray-600 flex items-center justify-between">
                  <span
                    className={
                      reservation.isCompleted
                        ? "bg-green-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {reservation.isCompleted ? "Completed" : "Pending"}
                  </span>
                  <BsThreeDotsVertical />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: () => Promise<{
  props: { reservationData: IReservation[] | null };
}> = async () => {
  const reservationData = await axios
    .get("http://localhost:5050/reservation")
    .then((res) => res.data);
  return {
    props: {
      reservationData,
    },
  };
};
