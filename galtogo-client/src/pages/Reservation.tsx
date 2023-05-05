import Layout from "@/components/Layout";
import Button from "@/components/subcomponents/Button";
import { tableTimes } from "@/utils/constants";
import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import axios from "axios";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default function Reservation(props: {
  disabledDaysData: IDisabledDay[];
}): JSX.Element {
  const { disabledDaysData } = props;
  const [occupiedData, setOccupiedData] = useState<IOccupied[]>([]);
  const [current, setCurrent] = useState("");
  const [slide, setSlide] = useState(
    `translate-x-96 invisible w-[100%] text-transparent`
  );
  const today = {
    year: Number(moment().format("YYYY")),
    month: Number(moment().format("M")),
    day: Number(moment().format("D")),
  };
  const [date, setDate] = useState<IDate>(today);
  const [tables, setTables] = useState<ITable[]>([]);

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

  const tableCells = [...tableTimes];

  tableTimes.forEach((el, i) => {
    occupiedData.forEach((occupied) => {
      if (el.time === occupied.time) {
        tableCells[i] = { time: el.time, isOccupied: true };
      }
    });
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
    setCurrent("");
  };

  // const newReservation = {
  //   time: e.target.time.value,
  //   date: e.target.date.value,
  //   persons: e.target.persons.value,
  //   user: userId._id,
  //   table: e.target.table.value,
  //   status: "pending",
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickTime = async (e: any) => {
    console.log("Date: ", date, "clickTime: ", e.target.id);
    setCurrent(e.target.id);
    await axios
      .get("http://localhost:5050/table")
      .then((res) => setTables(res.data));
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
                minimumDate={today}
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
              Date selected:{" "}
              {`${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
                date.day < 10 ? "0" : ""
              }${date.day}`}
            </div>
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
                      : "bg-slate-200 cursor-pointer"
                  } m-2 p-3 ${
                    cell.time === current ? "bg-green-400" : "bg-slate-200"
                  } w-20 rounded-xl text-center hover:bg-slate-400 `}
                >
                  {cell.time}
                </button>
              ))}
            </div>
            {current && (
              <div>
                {tables.map((table, index) => (
                  <div
                    key={index}
                    className="p-3 m-2 rounded-xl bg-slate-200 hover:bg-slate-400"
                  >
                    Table#{table.name}
                  </div>
                ))}
              </div>
            )}
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
  props: {
    disabledDaysData: IDisabledDay[] | null;
  };
}> = async () => {
  const disabledDaysData = await axios
    .get("http://localhost:5050/days")
    .then((res) => res.data);
  console.log(disabledDaysData);
  return {
    props: {
      disabledDaysData,
    },
  };
};
