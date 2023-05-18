import { useState } from "react";

export default function Timer() {


  const [days, setDays] = useState<number>()
  const [hour, setHour] = useState<number | undefined>()
  const [minute, setMinute] = useState<number>()

  const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;


    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))






  }, 1000);

  return (
    <div>
      <h1>Master class starts in</h1>
      <div className="flex gap-[40px]">
        <div className="flex flex-col text-center">
          <h1 className="text-[64px] font-thin">{days && days < 9 ? "0" + days : days}</h1>
          <p className="text-[40px] font-medium">days</p>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="text-[64px] font-thin">{hour && hour < 9 ? "0" + hour : hour}</h1>
          <p className="text-[40px] font-medium">Hours</p>
        </div>

        <div className="flex flex-col text-center">
          <h1 className="text-[64px] font-thin">{minute && minute < 9 ? "0" + minute : minute}</h1>
          <p className="text-[40px] font-medium">minute</p>
        </div>
      </div>
    </div>
  )
}