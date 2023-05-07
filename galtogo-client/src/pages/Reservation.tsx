import Layout from "@/components/Layout";
import Button from "@/components/subcomponents/Button";
import RoomArea from "@/components/subcomponents/RoomArea";
import { tableTimes, today } from "@/utils/constants";
import { useEffect, useState } from "react";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import moment from "moment";
import axios from "axios";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";

export default function Reservation(props: {
  disabledDaysData: IDisabledDay[];
  tablesData: ITable[];
}): JSX.Element {
  const { disabledDaysData } = props;
  const { tablesData } = props;

  const [occupiedData, setOccupiedData] = useState<IOccupied[]>([]);
  const [slide, setSlide] = useState(
    `translate-x-96 invisible w-[100%] text-transparent`
  );

  const [date, setDate] = useState<IDate>(today);

  const [newReservation, setNewReservation] = useState({
    time: "",
    date: "",
    persons: 0,
    user: "",
    table: "",
  });

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
    setNewReservation((prev) => ({
      ...prev,
      date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));
  };

  const handleBack = () => {
    setSlide(`w-1 opacity-0 text-transparent`);
  };

  const handleConfirm = () => {
    console.log("newReservation: ", newReservation);
    toast.success("Reservation successfully added!");
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
        <div className="relative flex lg:col-span-2">
          <div className="bg-slate-100 p-2 w-[100%] h-[100%] text-center">
            Please choose a date from the calendar
          </div>
          <div
            className={`absolute top-0 left-0 duration-500 bg-slate-100 p-2 h-[100%] text-center transition-all ${slide}`}
          >
            <div className="mb-2 font-bold">Select a table</div>
            <div className="text-gray-300 font-bold p-3 bg-slate-500 rounded-xl">
              Date selected:{" "}
              {`${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
                date.day < 10 ? "0" : ""
              }${date.day}`}
            </div>

            <RoomArea
              tablesData={tablesData}
              setNewReservation={setNewReservation}
            />

            <div className="flex justify-center">
              <Button variant="default" size="sm" onClick={handleConfirm}>
                Confirm Reservation
              </Button>
            </div>

            <div className="my-6">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                {"< Back"}
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
    tablesData: ITable[] | null;
  };
}> = async () => {
  const disabledDaysData = await axios
    .get("http://localhost:5050/days")
    .then((res) => res.data);
  const tablesData = await axios
    .get("http://localhost:5050/table")
    .then((res) => res.data);
  console.log(disabledDaysData);
  return {
    props: {
      disabledDaysData,
      tablesData,
    },
  };
};
