import axios from "axios";
import Layout from "@/components/Layout";
import Button from "@/components/subComponents/Button";
import { useState } from "react";
import { filterBtns } from "@/utils/constants";
import ReservationCard from "@/components/subComponents/ReservationCard";
import AddReservationModal from "@/components/subComponents/AddReservationModal";

export default function Reservations(props: {
  reservationData: IReservation[];
  tablesData: ITable[];
}): JSX.Element {
  const { reservationData } = props;
  const { tablesData } = props;
  const [reservations, setReservations] = useState(reservationData);
  const [toggleFilter, setToggleFilter] = useState<boolean>(true);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [searchReservation, setSearchReservation] = useState("");

  const handleAdd = () => {
    setShowAddModal((prev) => !prev);
  };

  const handleFilter = (filter: string) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_PORT}/reservation?filter=${filter}&isAsc=${
          toggleFilter ? "asc" : "desc"
        }`
      )
      .then((res) => setReservations(res.data))
      .catch((err) => console.log(err));
    setToggleFilter((prev) => !prev);
  };

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchReservation(event.target.value);
  }

  return (
    <Layout>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 pb-28 bg-white border rounded-lg overflow-y-auto">
          <div className="relative flex flex-wrap items-center justify-between">
            <Button
              type="button"
              variant="default"
              size="lg"
              className="sm:mx-6 m-3"
              onClick={handleAdd}
            >
              Add Reservation
            </Button>
            <input
              placeholder="Search"
              type="text"
              className="border rounded-lg p-4 my-4 h-11 px-8"
              value={searchReservation}
              onChange={handleSearch}
            />
            {showAddModal && (
              <AddReservationModal
                setShowAddModal={setShowAddModal}
                tablesData={tablesData}
              />
            )}
            <div>
              Sort by:
              {filterBtns.map((filterBtn, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="sm:mx-6 m-3"
                  onClick={() => handleFilter(filterBtn.name)}
                >
                  <span className="text-gray-600">{filterBtn.name}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="m-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between">
            {reservations
              .filter((reservation) =>
                `${reservation.time} ${reservation.date} ${reservation.user.firstName} ${reservation.user.lastName} ${reservation.user.email} ${reservation.user.phone} ${reservation.table} ${reservation.status} ${reservation.table}`
                  .toLocaleLowerCase()
                  .includes(searchReservation.toLocaleLowerCase())
              )
              .map((reservation, index) => (
                <ReservationCard
                  reservation={reservation}
                  setReservations={setReservations}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: () => Promise<{
  props: {
    reservationData: IReservation[] | null;
    tablesData: ITable[] | null;
  };
}> = async () => {
  const reservationData = await axios
    .get(`${process.env.NEXT_PUBLIC_PORT}/reservation?filter=date&isAsc=desc`)
    .then((res) => res.data);
  const tablesData = await axios
    .get(`http://localhost:5050/table`)
    .then((res) => res.data);
  return {
    props: {
      reservationData,
      tablesData,
    },
  };
};
