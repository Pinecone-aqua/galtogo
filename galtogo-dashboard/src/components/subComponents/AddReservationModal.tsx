import { tableTimes } from "@/utils/constants";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";

export default function AddReservationModal({
  setShowAddModal,
  tablesData,
  reservation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setShowAddModal: any;
  tablesData: ITable[];
  reservation: IReservation[];
}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    const userId = await axios
      .get(
        `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/user/phone/${e.target.phone.value}`
      )
      .then((res) => res.data)
      .catch((err) => console.log("user: ", err));

    const newReservation = {
      time: e.target.time.value,
      date: e.target.date.value,
      persons: e.target.persons.value,
      user: userId._id,
      table: e.target.table.value,
      status: "pending",
    };
    setShowAddModal((prev: boolean) => !prev);
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/add`,
          newReservation
        )
        .then((res) => {
          console.log(res);
          toast.success("Reservation successfully added!");
        })
        .catch((err) =>
          toast.error(`Wrong phone number! ${err.message}`, {
            position: "top-center",
          })
        );
    } catch (error) {
      console.log(error);
    }
  }
  console.log("reservation in add", reservation);
  return (
    <form
      className="absolute top-20 left-0 bg-slate-200 p-3 flex flex-col z-10 rounded-xl"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
    >
      <label>Date:</label>
      <input
        className="m-2 p-2 rounded-xl"
        type="text"
        name="date"
        defaultValue={moment().format("YYYY-MM-DD")}
      />
      <label>Time:</label>
      <select className="m-2 p-2 rounded-xl" name="time">
        {tableTimes.map((times, index) => (
          <option key={index} value={times.time}>
            {times.time}
          </option>
        ))}
      </select>
      <label>Table:</label>
      <select className="m-2 p-2 rounded-xl" name="table">
        {tablesData.map((table, index) => (
          <option key={index} value={table._id}>
            {`Table # ${table.name}`}
          </option>
        ))}
      </select>
      <label>Persons:</label>
      <input
        className="m-2 p-2 rounded-xl"
        type="number"
        name="persons"
        defaultValue={6}
      />
      <label>Phone:</label>
      <input
        className="m-2 p-2 rounded-xl"
        type="string"
        name="phone"
        placeholder="88112233"
      />
      <input
        type="submit"
        value="Add Reservation"
        className="m-2 p-3 rounded-xl bg-slate-300 hover:bg-slate-600 hover:text-white ursor-pointer"
      />
    </form>
  );
}
