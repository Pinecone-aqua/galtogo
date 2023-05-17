
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HiOutlineUsers, HiPlusCircle, HiMinusCircle } from "react-icons/hi2";

export default function GuestInput({
  setNewReservation,
}: {
  setNewReservation: Dispatch<SetStateAction<IReservation>>;
}) {
  const [countGuest, setCountGuest] = useState(0);


  useEffect(() => {
    setNewReservation((prev) => ({
      ...prev, persons: countGuest

    }))
  }, [countGuest, setNewReservation])


  return (
    <div className="flex items-center justify-between px-[16px] py-[20px] bg-white mt-[8px] rounded-lg  select-none shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex gap-2 items-center">
        <HiOutlineUsers />
        <div>Guests</div>
      </div>
      <div className="flex items-center cursor-pointer">
        <HiMinusCircle
          className={countGuest === 0 ? "text-slate-200" : "text-[#0D5C63]"}
          size={24}
          onClick={() => setCountGuest((prev) => (prev > 0 ? prev - 1 : 0))}
        />
        <p className="p-2">{countGuest}</p>
        <HiPlusCircle
          className={countGuest < 6 ? "text-[#0D5C63]" : "text-slate-200"}
          size={24}
          onClick={() => setCountGuest((prev) => (prev < 6 ? prev + 1 : prev))}
        />
      </div>
    </div>
  );
}
