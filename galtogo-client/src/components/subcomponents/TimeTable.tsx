import { tableTimes } from "@/utils/constants";
import axios from "axios";
import { useState, useEffect } from "react";

const TimeTable = ({
  setNewReservation,
  newReservation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewReservation: any;
  newReservation: IReservation;
}): JSX.Element => {
  const tableCells = [...tableTimes];
  const [occupiedData, setOccupiedData] = useState<IOccupied[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/time/${newReservation.date}`
      )
      .then((res) => {
        setOccupiedData(res.data);
      });
  }, [newReservation.date]);

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
            cell.time === current ? "bg-green-400" : "bg-slate-200"
          } w-20 rounded-xl text-center `}
        >
          {cell.time}
        </button>
      ))}
    </div>
  );
};
export default TimeTable;
