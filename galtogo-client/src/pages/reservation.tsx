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
import { useReservation } from "@/context/ReservationContext";
import PhoneInput from "@/components/subcomponents/PhoneInput";

export default function Reservation(props: {
  disabledDays: IDisabledDay[];
}): JSX.Element {
  const { disabledDays } = props;

  const { newReservation, setNewReservation } = useReservation();
  const router = useRouter();
  const [date, setDate] = useState<IDate>(today);
  const [tablesData, setTablesData] = useState<ITable[]>([]);
  const [view, setView] = useState<string>("");
  const [tableNumber, setTableNumber] = useState<number>(0);

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
    setView("phoneInput");
  };
  const handleCancel = () => {
    router.push("/reservation");
  };

  switch (view) {
    case "phoneInput":
      return <PhoneInput tableNumber={tableNumber} />;
    // return <div>input</div>;
    case "OtpInput":
      return <div>OtpVerify</div>;
    default:
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
            <div className="">
              <RoomArea
                setTableNumber={setTableNumber}
                tablesData={tablesData}
                setNewReservation={setNewReservation}
                newReservation={newReservation}
              />
            </div>
            <div className="">
              <OrderDetails tableNumber={tableNumber} />

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
