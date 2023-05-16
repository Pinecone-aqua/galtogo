import { tableTimes } from "@/utils/constants";
import { Dispatch, SetStateAction, useState } from "react";

export default function AvailableTime({ setTime }: { setTime: Dispatch<SetStateAction<string | undefined>> }) {
  const [selectedTime, setSelectedTime] = useState<string>("--:--")
  const [selectedId, setSelectedId] = useState<number>()
  setTime(selectedTime)
  return (
    <div className="grid grid-cols-3 gap-2 w-full mt-[8px] p-2">
      {tableTimes.map((cell, index) =>

        selectedTime && selectedId === index ?
          (<div className="px-[20px] py-[16px] text-center rounded-md bg-[#0D5C63] text-white" onClick={() => { setSelectedTime(cell.time), setSelectedId(index) }} key={index}>{cell.time}</div>)
          :
          (<div className="px-[20px] py-[16px] text-center rounded-md border bg-white" onClick={() => { setSelectedTime(cell.time), setSelectedId(index) }} key={index}>{cell.time}</div>)
      )}
    </div>
  )
}