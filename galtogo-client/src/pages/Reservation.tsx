import Layout from "@/components/Layout";
import Button from "@/components/subcomponents/Button";
import RoomArea from "@/components/subcomponents/RoomArea";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { today } from "@/utils/constants";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { useRouter } from "next/router";

export default function Reservation(props: {
  disabledDays: IDisabledDay[];
}): JSX.Element {
  const { disabledDays } = props;

  const [translate, setTranslate] = useState(
    `translate-x-96 invisible w-[100%] text-transparent`
  );
  const router = useRouter();
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
  const handleClickDay = (date: any) => {
    setTablesData([]);
    setDate(date);
    console.log("ClickDay: ", date);
    setTranslate(`z-30 w-[100%]`);
    setNewReservation((prev) => ({
      ...prev,
      date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));

    // branchId/tables
    axios
      .get(`${process.env.NEXT_PUBLIC_PORT}/table`)
      .then((res) => setTablesData(res.data))
      .catch((err) => toast.error(err));
  };

  const handleBack = () => {
    setTranslate(`w-1 opacity-0 text-transparent`);
  };

  const handleConfirm = () => {
    console.log("newReservation: ", newReservation);
    localStorage.setItem("newReservation: ", JSON.stringify(newReservation));
    toast.success("Reservation successfully added!");
    router.push("/loginPage");
  };

  return (
    <Layout>
      <div className="lg:grid lg:grid-cols-3 h-[1700px] lg:h-[1200px] border mx-auto bg-slate-50 p-3 pt-28 justify-center">
        <div className="mx-auto">
          <div className="m-8 font-bold text-center">Select a date</div>
          <div className="flex justify-center">
            <Calendar
              value={date}
              onChange={handleClickDay}
              minimumDate={today}
              disabledDays={disabledDays}
              shouldHighlightWeekends
            />
          </div>
        </div>
        <div className="relative flex lg:col-span-2">
          <div className="bg-slate-100 p-2 w-[100%] h-[100%] text-center">
            Please choose a date from the calendar
          </div>
          {translate == "z-30 w-[100%]" && (
            <div
              className={`absolute top-0 left-0 duration-500 bg-slate-100 p-2 h-[100%] text-center transition-all ${translate}`}
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
    disabledDays: IDisabledDay[] | null;
  };
}> = async () => {
  const disabledDays = await axios
    .get(`${process.env.NEXT_PUBLIC_PORT}/days`)
    .then((res) => res.data);
  return {
    props: {
      disabledDays,
    },
  };
};
