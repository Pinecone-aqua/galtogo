import RoomArea from "@/components/subcomponents/RoomArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { today } from "@/utils/constants";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import GuestInput from "@/components/subcomponents/GuestInput";
import AvailableTime from "@/components/subcomponents/AvailableTime";
import { toast } from "react-toastify";
import OrderDetails from "@/components/subcomponents/OrderDetails";
import Button from "@/components/subcomponents/Button";
import { useRouter } from "next/router";

export default function Reservation(props: {
  disabledDays: IDisabledDay[];
}): JSX.Element {
  const { disabledDays } = props;
  const router = useRouter();
  const [date, setDate] = useState<IDate>(today);
  const [tablesData, setTablesData] = useState<ITable[]>([]);

  const [tableNumber, setTableNumber] = useState<number>(0);
  const [newReservation, setNewReservation] = useState<IReservation>({
    time: "",
    date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
      date.day < 10 ? "0" : ""
    }${date.day}`,
    persons: 0,
  });

  useEffect(() => {
    getTables();
  }, []);

  const getTables = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/table`)
      .then((res) => setTablesData(res.data))
      .catch((err) => toast.error(err));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDay = (date: any) => {
    setTablesData([]);
    setDate(date);

    setNewReservation((prev) => ({
      ...prev,
      date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));
    getTables();
  };

  const handleContinue = () => {
    localStorage.setItem("newRes", JSON.stringify(newReservation));
    router.push("/loginPage");
  };
  const handleCancel = () => {
    router.push("/reservation");
  };
  return (
    <div className="flex md:flex-nowrap flex-wrap gap-[16px] m-[40px]">
      <div className="mx-auto">
        <Calendar
          value={date}
          onChange={handleClickDay}
          minimumDate={today}
          disabledDays={disabledDays}
          shouldHighlightWeekends
        />
        <GuestInput setNewReservation={setNewReservation} />
        <AvailableTime
          newReservation={newReservation}
          setNewReservation={setNewReservation}
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="border">
          <RoomArea
            setTableNumber={setTableNumber}
            tablesData={tablesData}
            setNewReservation={setNewReservation}
            newReservation={newReservation}
          />
        </div>
        <div className="">
          <OrderDetails
            newReservation={newReservation}
            tableNumber={tableNumber}
          />

          <div className="flex justify-center">
            <Button
              size={"lg"}
              variant={"ghost"}
              onClick={handleCancel}
              className="m-4"
            >
              Cancel
            </Button>
            <Button
              className={`${
                newReservation._id !== "" &&
                newReservation.date !== "" &&
                newReservation.persons !== 0 &&
                newReservation.table &&
                newReservation.time !== "--:--"
                  ? "bg-[#0D5C63]"
                  : "bg-slate-400"
              } m-4`}
              size={"lg"}
              disabled={
                newReservation._id == "" ||
                newReservation.date == "" ||
                newReservation.persons == 0 ||
                newReservation.table == undefined ||
                newReservation.time == "--:--"
              }
              variant={"brand"}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: () => Promise<{
  props: {
    disabledDays: IDisabledDay[] | null;
  };
}> = async () => {
  const disabledDays = await axios
    .get(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/days`)
    .then((res) => res.data);
  return {
    props: {
      disabledDays,
    },
  };
};
