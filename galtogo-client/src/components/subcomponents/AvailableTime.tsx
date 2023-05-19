/* eslint-disable @typescript-eslint/no-explicit-any */
import { tableTimes } from "@/utils/constants";
// import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function AvailableTime({
  // newReservation,
  setNewReservation,
}: {
  newReservation: IReservation;
  setNewReservation: Dispatch<SetStateAction<IReservation>>;
}) {
  // const [reservations, setReservations] = useState<IReservation[]>([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/reservation/date/${newReservation.date}`
  //     )
  //     .then((res) => setReservations(res.data));
  // }, [newReservation.date]);

  const [selectedTime, setSelectedTime] = useState<string>("--:--");
  const [selectedId, setSelectedId] = useState<number>();
  // const [table, setTables] = useState();
  // const tableCells = [...tableTimes];

  // reservations.length > 0 &&
  //   tableTimes.forEach((el, i) => {
  //     reservations.forEach((reservation) => {
  //       if (
  //         table.name === reservation.table.name &&
  //         el.time === reservation.time
  //       ) {
  //         tableCells[i] = { time: el.time, isOccupied: true };
  //       }
  //     });
  //   });

  useEffect(() => {
    setNewReservation((prev) => ({
      ...prev,
      time: selectedTime,
    }));
  }, [selectedTime, setNewReservation]);

  return (
    <div className="grid grid-cols-3 gap-2 w-full mt-[8px] p-3 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      {tableTimes.map((cell: any, index: number) => (
        <button
          className={
            selectedTime && selectedId === index
              ? "px-[20px] py-[16px] text-center rounded-md bg-[#0D5C63] text-white"
              : "px-[20px] py-[16px] text-center rounded-md border bg-white"
          }
          disabled={false}
          onClick={() => {
            setSelectedTime(cell.time), setSelectedId(index);
          }}
          key={index}
        >
          {cell.time}
        </button>
      ))}
    </div>
  );
}
