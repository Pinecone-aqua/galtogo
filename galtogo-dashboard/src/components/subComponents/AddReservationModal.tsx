import axios from "axios";

export default function AddReservationModal({ setShowAddModal }) {

  async function handleSubmit(e: any) {
    e.preventDefault();
    const newReservation = {
      time: e.target.time.value,
      date: e.target.date.value,
      persons: e.target.persons.value,
      user: e.target.user.value,
      table: e.target.table.value,
      status: "pending",
    };
    setShowAddModal((prev) => !prev);
    try {
      await axios
        .post("http://localhost:5050/reservation/add", newReservation)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      className="absolute top-20 left-0 bg-slate-200 p-3 flex flex-col z-10 rounded-xl"
      onSubmit={handleSubmit}
    >
      <input
        className="m-2 p-2 rounded-xl"
        type="text"
        name="date"
        defaultValue="2023-04-29"
      />
      <input
        className="m-2 p-2 rounded-xl"
        type="text"
        name="time"
        defaultValue="18:00"
      />
      <input
        className="m-2 p-2 rounded-xl"
        type="text"
        name="table"
        defaultValue="644083ce00cd4c337032f46d"
      />
      <input
        className="m-2 p-2 rounded-xl"
        type="number"
        name="persons"
        defaultValue={6}
      />
      <input
        className="m-2 p-2 rounded-xl"
        type="text"
        name="user"
        defaultValue="643cc79f35de8088d1b1b08d"
      />
      <input
        type="submit"
        value="Add Reservation"
        className="m-2 p-3 rounded-xl bg-slate-300 hover:bg-slate-600 hover:text-white ursor-pointer"
      />
    </form>
  );
}
