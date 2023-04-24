import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import { ReservationStatus } from "@/utils/constants";
import axios from "axios";
import { useState } from "react";

export default function Reservations(props: {
  reservationData: IReservation[];
}): JSX.Element {
  const { reservationData } = props;
  const [statusBtns, setButtons] = useState<string[]>(
    Object.values(ReservationStatus)
  );
  const handleAdd = () => {
    console.log("Reservation add button");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeStatus = (e: any) => {
    axios
      .patch(
        `http://localhost:5050/reservation/${e.target.id}/confirm?status=${e.target.name}`
      )
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => console.log("Current id is not found", err));
  };

  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 pb-28 bg-white border rounded-lg overflow-y-auto">
          <Button
            type="button"
            variant="default"
            size="lg"
            className="sm:mx-6 m-3"
            onClick={handleAdd}
          >
            Add Reservation
          </Button>
          <div className="m-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between">
            {reservationData.map((reservation, index) => (
              <div
                className="bg-gray-50 hover:bg-gray-100 rounded-lg sm:mx-3 my-3 p-2"
                key={index}
              >
                <div className="p-4 flex items-center justify-between border-b-4">
                  <p className="bg-sky-600 p-3 rounded-lg text-center text-white font-bold">
                    {"# " + reservation.table.name}
                  </p>
                  <div className="">
                    <p className="text-gray-800 font-bold">
                      {reservation.date}
                    </p>
                    <p className="text-gray-400">{reservation.time}</p>
                  </div>
                </div>
                <div className="cardBody p-4 text-gray-400 text-md">
                  <p className="text-gray-800">
                    {`${reservation.user.firstName} ${reservation.user.lastName}`}
                  </p>
                  <p className="">{reservation.user.phone}</p>
                  <p className="text-sm">{reservation.user.email}</p>
                </div>
                <div className="relative group/status">
                  <Button
                    id={reservation._id}
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
                      className={`hidden group-focus-within/status:flex absolute bg-gray-50 rounded-xl top-0 order-20 w-fit flex-col`}
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
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: () => Promise<{
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
