import RoomArea from "@/components/subcomponents/RoomArea";
import axios from "axios";
import { useState } from "react";
import { today } from "@/utils/constants";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";
import GuestInput from "@/components/subcomponents/GuestInput";
import AvailableTime from "@/components/subcomponents/AvailableTime";
import { toast } from "react-toastify";

export default function Reservation(props: {
  disabledDays: IDisabledDay[];
}): JSX.Element {
  const { disabledDays } = props;

  const [date, setDate] = useState<IDate>(today);
  const [tablesData, setTablesData] = useState<ITable[]>([]);
  const [guest, setGuest] = useState<number>();
  const [time, setTime] = useState<string>();
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [newReservation, setNewReservation] = useState<IReservation>({
    time: "",
    date: "",
    persons: 0,
    user: "",
    table: "",
  });

  console.log(tableNumber);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDay = (date: any) => {
    setTablesData([]);
    setDate(date);

    console.log("ClickDay: ", date);

    setNewReservation((prev) => ({
      ...prev,
      date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));

    // branchId/tables
    axios
      .get(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/table`)
      .then((res) => setTablesData(res.data))
      .catch((err) => toast.error(err));
  };

  // const handleBack = () => {
  //   setTranslate(`w-1 opacity-0 text-transparent`);
  // };

  return (
    <div className="flex gap-[16px] m-[40px]">
      <div className="">
        <Calendar
          value={date}
          onChange={handleClickDay}
          minimumDate={today}
          disabledDays={disabledDays}
          shouldHighlightWeekends
        />
        <GuestInput setGuest={setGuest} />
        <AvailableTime setTime={setTime} />
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
        <div className="border ">
          <h1 className="text-[24px]">Your order</h1>
          <div className="flex gap-2">
            <div className="px-[24px] py-[20px] border w-max rounded-lg">
              <h1>Picked Date</h1>
              <div className="flex items-center gap-2">
                <HiOutlineCalendarDays />
                <p>
                  {date.year} / {date.day} /{" "}
                  {date.month < 9 ? "0" + date.month : date.month}
                </p>
              </div>
            </div>

            <div className="px-[24px] py-[20px] border w-max rounded-lg">
              <h1>Table Number</h1>
              <p>{tableNumber}</p>
            </div>

            <div className="px-[24px] py-[20px] border w-max rounded-lg">
              <h1>Time</h1>
              <div className="flex items-center gap-2">
                <HiOutlineClock />
                <p>{time && time}</p>
              </div>
            </div>

            <div className="px-[24px] py-[20px] border w-max rounded-lg">
              <h1>Guests</h1>
              <div className="flex items-center gap-2">
                <HiOutlineClock />
                <p>{guest}</p>
              </div>
            </div>
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
