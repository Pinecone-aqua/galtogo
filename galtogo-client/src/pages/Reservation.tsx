import Layout from "@/components/Layout";
import Button from "@/components/subcomponents/Button";

import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

import "react-modern-calendar-datepicker/lib/DatePicker.css";

export default function Reservation() {
  const [slide, setSlide] = useState(
    `translate-x-96 invisible w-[100%] text-transparent`
  );
  const todayDate = new Date();
  const [date, setDate] = useState({
    year: todayDate.getFullYear(),
    month: todayDate.getMonth() + 1,
    day: todayDate.getDay(),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDay = (d: any) => {
    setDate(d);
    setSlide(`z-20 w-[100%]`);
  };
  const handleNext = () => {
    setSlide(`z-20 w-[100%]`);
  };
  const handleBack = () => {
    setSlide(`w-1 translate-x-96 invisible text-transparent`);
  };
  return (
    <Layout>
      <div className="grid grid-cols-3  h-[500px] border mx-auto bg-slate-50 p-3">
        <div className="col-span-1 bg-slate-100 p-2">left</div>
        <div className="relative flex col-span-2 w-full">
          <div className=" absolute top-0 left-0 bg-slate-100 p-2  h-[100%]">
            <div>Date picker</div>
            <Calendar
              value={date}
              onChange={handleClickDay}
              shouldHighlightWeekends
            />

            <Button variant="ghost" size="sm" onClick={handleNext}>
              next
            </Button>
          </div>
          <div
            className={`absolute top-0 left-0 ease-in duration-300 bg-slate-100 p-2 h-[100%]  ${slide}`}
          >
            <div>Time picker</div>
            <div className="text-gray-500">
              Date selected: {`${date.year}-${date.month}-${date.day}`}
            </div>
            <Button variant="ghost" size="sm" onClick={handleBack}>
              previous
            </Button>
            <Button variant="ghost" size="sm">
              next
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
