import Layout from "@/components/Layout";
import Button from "@/components/subcomponents/Button";
import { tableTimes } from "@/utils/constants";
import moment from "moment";
import { useState } from "react";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import axios from "axios";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default function Reservation(props: {
  disabledDaysData: IDisabledDay[];
}): JSX.Element {
  const { disabledDaysData } = props;
  const [slide, setSlide] = useState(
    `translate-x-96 invisible w-[100%] text-transparent`
  );

  const [date, setDate] = useState<IDate>({
    year: Number(moment().format("YYYY")),
    month: Number(moment().format("M")),
    day: Number(moment().format("D")),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDay = (d: any) => {
    setDate(d);
    setSlide(`z-30 w-[100%]`);
  };
  const handleNext = () => {
    setSlide(`z-30 w-[100%]`);
  };
  const handleBack = () => {
    setSlide(`w-1 opacity-0 text-transparent`);
  };
  return (
    <Layout>
      <Breadcrumbs
        items={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Reservation",
            path: "/Reservation"
          },
          {
            label: "Confirmation",
            path: "/Confirmation"
          }

        ]}
      />
      <div className="md:grid md:grid-cols-3 h-[500px] border mx-auto bg-slate-50 p-3  max-w-screen-lg justify-center">
        <div className="hidden md:block md:col-span-1 bg-slate-200 p-3 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa
          eligendi quam rerum iste voluptate minus pariatur hic ut, saepe
          accusamus voluptatem mollitia nisi distinctio. Unde soluta saepe nemo,
          temporibus illum incidunt eveniet a numquam corrupti suscipit placeat
          facere eligendi delectus aut exercitationem dignissimos obcaecati nisi
          inventore nulla quos perspiciatis.
        </div>
        <div className="relative flex col-span-2">
          <div className="bg-slate-100 p-2 w-[100%] h-[100%] text-center">
            <div className="mb-2 font-bold">Select a date</div>
            <div className="flex justify-center">
              <Calendar
                value={date}
                onChange={handleClickDay}
                disabledDays={disabledDaysData}
                shouldHighlightWeekends
              />
            </div>
            <div className="mt-6">
              <Button variant="ghost" size="sm" onClick={handleNext}>
                {"Next >"}
              </Button>
            </div>
          </div>
          <div
            className={`absolute top-0 left-0 duration-500 bg-slate-100 p-2 h-[100%] text-center transition-all ${slide}`}
          >
            <div className="mb-2 font-bold">Select a time</div>
            <div className="text-gray-300 p-3 bg-slate-500 rounded-xl">
              Date selected: {`${date.year}-${date.month}-${date.day}`}
            </div>
            <div className="flex flex-wrap justify-center my-10">
              {tableTimes.map((table, index) => (
                <div
                  key={index}
                  className="m-2 p-3 bg-slate-200 w-20 rounded-xl text-center hover:bg-slate-400 cursor-pointer"
                >
                  {table.time}
                </div>
              ))}
            </div>
            <div className="my-6">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                {"< Back"}
              </Button>
            </div>

            <div className="flex justify-center">
              <Button variant="default" size="sm">
                Confirm Reservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: () => Promise<{
  props: { disabledDaysData: IDisabledDay[] | null };
}> = async () => {
  const disabledDaysData = await axios
    .get("http://localhost:5050/days")
    .then((res) => res.data);
  return {
    props: {
      disabledDaysData,
    },
  };
};
