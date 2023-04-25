import { MdTableRestaurant } from "react-icons/md";
const tableTimes = [
  { time: "10:00", isOccupied: false },
  { time: "11:00", isOccupied: false },
  { time: "12:00", isOccupied: false },
  { time: "13:00", isOccupied: false },
  { time: "14:00", isOccupied: true },
  { time: "15:00", isOccupied: false },
  { time: "16:00", isOccupied: true },
  { time: "17:00", isOccupied: false },
  { time: "18:00", isOccupied: false },
  { time: "19:00", isOccupied: false },
  { time: "20:00", isOccupied: true },
  { time: "21:00", isOccupied: false },
];

interface TableBarProps {
  reservation: IReservation;
}

export default function TableBar({ reservation }: TableBarProps) {
  // console.log(reservation);
  return (
    <div className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg my-3">
      <div className="flex items-center ">
        <div className="bg-purple-200 rounded-lg p-3">
          <MdTableRestaurant className="text-purple-800" />
        </div>
        <p className="pl-4">Table {reservation.table.name}</p>
      </div>
      <div className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-12 sm:grid-cols-6 grid-cols-3 gap-1 items-center justify-between cursor-pointer">
        {tableTimes.map((tableTime, index: number) => (
          <div
            key={index}
            className={`${
              tableTime.isOccupied ? "bg-gray-400" : "bg-gray-200"
            } hover:bg-gray-300 rounded-lg p-3`}
          >
            {tableTime.time}
          </div>
        ))}
      </div>
    </div>
  );
}
