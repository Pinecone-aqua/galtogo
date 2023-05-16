/* eslint-disable @typescript-eslint/no-explicit-any */
import { tableTimes } from "@/utils/constants";
import { Dispatch, SetStateAction, useState } from "react";

export default function AvailableTime({
  setTime,
}: {
  setTime: Dispatch<SetStateAction<string | undefined>>;
}) {
  const [selectedTime, setSelectedTime] = useState<string>("--:--");
  const [selectedId, setSelectedId] = useState<number>();

  return (
    <div className="grid grid-cols-3 gap-2 w-full mt-[8px]">
      {tableTimes.map((cell: any, index: number) =>
        selectedTime && selectedId === index ? (
          <div
            className="px-[20px] py-[16px] text-center rounded-md bg-[#0D5C63] text-white"
            onClick={() => {
              setSelectedTime(cell.time),
                setSelectedId(index),
                setTime(cell.time);
            }}
            key={index}
          >
            {cell.time}
          </div>
        ) : (
          <div
            className="px-[20px] py-[16px] text-center rounded-md border bg-white"
            onClick={() => {
              setSelectedTime(cell.time),
                setSelectedId(index),
                setTime(cell.time);
            }}
            key={index}
          >
            {cell.time}
          </div>
        )
      )}
    </div>
  );
}
