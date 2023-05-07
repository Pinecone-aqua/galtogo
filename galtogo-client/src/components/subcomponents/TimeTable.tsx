import { tableTimes } from "@/utils/constants";
import { useState } from "react";

export default function TimeTable(): JSX.Element {
  const [selectedTime, setSelectedTime] = useState("")
  return (
    <div className="grid grid-cols-3 gap-2 mt-[16px] m-2">
      {tableTimes.map((item, index) =>
        selectedTime == item.time ?
          (<div className="p-2 text-center border rounded-lg bg-[#0D5C63] text-white" key={index} onClick={() => setSelectedTime(item.time)}>{item.time}</div>)
          :
          (<div className="p-2 text-center border rounded-lg " key={index} onClick={() => setSelectedTime(item.time)}>{item.time}</div>)
      )}
    </div >
  )
}
