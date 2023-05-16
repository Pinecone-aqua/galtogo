import RoomArea from "@/components/subcomponents/RoomArea";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import GuestCounter from "@/components/subcomponents/GuestCounter";
import AvailableTime from "@/components/subcomponents/AvailableTime";
import Order from "@/components/subcomponents/Order";
import BreadCrumb from "@/components/subcomponents/BreadCrumb";
import { useRouter } from "next/router";

export default function Reservation1(props: {
  disabledDays: IDisabledDay[];
}): JSX.Element {
  const { disabledDays } = props;
  const router = useRouter();
  const [tablesData, setTablesData] = useState<ITable[]>([]);
  const [newReservation, setNewReservation] = useState({
    time: "",
    date: "",
    persons: 0,
    user: "",
    table: "",
  });
  const [reservationData, setReservationData] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDay = (date: any) => {
    setTablesData([]);
    // setDate(date);
    console.log("ClickDay: ", date);
    setNewReservation((prev) => ({
      ...prev,
      date: `${date.year}-${date.month < 10 ? "0" : ""}${date.month}-${
        date.day < 10 ? "0" : ""
      }${date.day}`,
    }));

    axios
      .get(`${process.env.NEXT_PUBLIC_PORT}/table`)
      .then((res) => setTablesData(res.data))
      .catch((err) => toast.error(err));
  };
  return (
    <div className="h-[100%] flex w-full gap-4 m-2">
      <div className="w-max h-full">
        <div className="w-full">
          <div className="px-[16px] py-[20px]">
            <BreadCrumb />
          </div>
          <div className="flex items-center justify-center mb-[8px] py-[24px] px-[16px] rounded-lg gap-2 border">
            <HiOutlineCalendarDays />
            <div>Өдөр сонгох</div>
          </div>
          <Calendar onChange={handleClickDay} disabledDays={disabledDays} />
          <GuestCounter
            setReservationData={setReservationData}
            reservationData={reservationData}
          />
          <AvailableTime />
        </div>
      </div>
      <div className=" w-[80%] h-[60%]">
        <div className="border w-[100%]">
          <RoomArea
            tablesData={tablesData}
            setNewReservation={setNewReservation}
            newReservation={newReservation}
          />
        </div>
        <div className="h-[30%] mt-3">
          <Order reservationData={reservationData} />
        </div>
        <button
          className="px-[24px] py-[24px] text-white bg-green-800"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => router.push("/Reservation/Confirmation")}
        >
          Confirm
        </button>
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
    .get(`${process.env.NEXT_PUBLIC_PORT}/days`)
    .then((res) => res.data);
  return {
    props: {
      disabledDays,
    },
  };
};
