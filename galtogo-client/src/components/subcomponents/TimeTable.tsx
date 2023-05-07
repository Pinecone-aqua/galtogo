import { today } from "@/utils/constants";
import { tableTimes } from "@/utils/constants";
import axios from "axios";
import { useState, useEffect } from "react";

const TimeTable = ({
  setNewReservation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewReservation: any;
}): JSX.Element => {
  const tableCells = [...tableTimes];
  const [occupiedData, setOccupiedData] = useState<IOccupied[]>([]);
  const [date, setDate] = useState<IDate>(today);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5050/reservation/time/${date.year}-${
          date.month < 10 ? "0" : ""
        }${date.month}-${date.day < 10 ? "0" : ""}${date.day}`
      )
      .then((res) => {
        setOccupiedData(res.data);
      });
  }, [date]);

  tableTimes.forEach((el, i) => {
    occupiedData.forEach((occupied) => {
      if (el.time === occupied.time) {
        tableCells[i] = { time: el.time, isOccupied: true };
      }
    });
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickTime = (e: any): void => {
    setCurrent(e.target.id);
    setNewReservation((prev: IReservation) => ({ ...prev, time: e.target.id }));
  };
  return (
    <div className="flex flex-wrap justify-center my-10">
      {tableCells.map((cell, index) => (
        <button
          key={index}
          onClick={handleClickTime}
          id={cell.time}
          disabled={cell.isOccupied}
          className={`${
            cell.isOccupied
              ? "bg-slate-400"
              : "bg-slate-200 hover:bg-green-500 active:scale-95 active:bg-green-600 cursor-pointer"
          } m-2 p-3 ${
            cell.time === current ? "bg-green-500" : "bg-slate-200"
          } w-20 rounded-xl text-center `}
        >
          {cell.time}
        </button>
      ))}
    </div>
  );
};
export default TimeTable;
