import Layout from "@/components/Layout";
import Button from "@/components/subcomponents/Button";
import RoomArea from "@/components/subcomponents/RoomArea";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { today } from "@/utils/constants";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

export default function Reservation(props: {
  disabledDaysData: IDisabledDay[];
}): JSX.Element {
  const { disabledDaysData } = props;

  const [slide, setSlide] = useState(
    `translate-x-96 invisible w-[100%] text-transparent`
  );

  const [date, setDate] = useState<IDate>(today);
  const [tablesData, setTablesData] = useState<ITable[]>([]);
  const [newReservation, setNewReservation] = useState({
    time: "",
    date: "",
    persons: 0,
    user: "",
    table: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDay = async (d: any) => {
    setTablesData([]);
    setDate(d);
    console.log("Date: ", d);
    setSlide(`z-30 w-[100%]`);
    setNewReservation((prev) => ({
      ...prev,
      date: `${d.year}-${d.month < 10 ? "0" : ""}${d.month}-${
        d.day < 10 ? "0" : ""
      }${d.day}`,
    }));
    await axios
      .get("http://localhost:5050/table")
      .then((res) => setTablesData(res.data));
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
<<<<<<< HEAD
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
=======
      <div className="lg:grid lg:grid-cols-3 h-[1700px] lg:h-[1200px] border mx-auto bg-slate-50 p-3 justify-center">
        <div className="mx-auto">
          <div className="m-8 font-bold text-center">Select a date</div>
          <div className="flex justify-center">
            <Calendar
              value={date}
              onChange={handleClickDay}
              minimumDate={today}
              disabledDays={disabledDaysData}
              shouldHighlightWeekends
            />
          </div>
>>>>>>> 7c419fc (client table modified)
        </div>
        <div className="relative flex lg:col-span-2">
          <div className="bg-slate-100 p-2 w-[100%] h-[100%] text-center">
            Please choose a date from the calendar
          </div>
          {tablesData.length > 0 && (
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
                newReservation={newReservation}
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
          )}
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
  return {
    props: {
      disabledDaysData,
    },
  };
};
