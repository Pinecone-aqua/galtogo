import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import { ReservationStatus } from "@/utils/constants";
import axios from "axios";

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
            className="sm:mx-6 m-3"
            onClick={handleClick}
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
                  <p className="bg-sky-600 p-3 rounded-lg text-center">
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
                <Button
                  onClick={handleStatus(reservation._id)}
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
              </div>
            ))}
          </div>
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

const handleStatus = ({ _id }) => {
  axios.get(`http://localhost:5050/${:_id/submit}`).then().catch((err)=>console.log('Current id is not found');)
};
