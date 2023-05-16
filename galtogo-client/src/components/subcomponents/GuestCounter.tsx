import { Dispatch, SetStateAction } from "react";
import { HiPlusCircle, HiMinusCircle, HiOutlineUsers } from "react-icons/hi2";
export default function GuestCounter({
  setReservationData,
  reservationData,
}: {
  setReservationData: Dispatch<SetStateAction<number>>;
  reservationData: number;
}) {
  return (
    <div className="flex items-center justify-between gap-2 mt-[8px] py-[24px] px-[16px] border rounded-lg">
      <div className="flex items-center gap-2">
        <HiOutlineUsers size={24} />
        <div>Хүний тоо оруулах</div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={
            reservationData === 0 ? "text-slate-200" : "text-[#0D5C63]"
          }
        >
          <HiMinusCircle
            size={24}
            onClick={() =>
              setReservationData((prev) => (prev > 0 ? prev - 1 : 0))
            }
          />
        </div>
        <div className="w-[16px] text-center">{reservationData}</div>
        <div
          className={
            reservationData === 6 ? "text-slate-200" : "text-[#0D5C63]"
          }
        >
          <HiPlusCircle
            size={24}
            onClick={() =>
              setReservationData((prev) => (prev < 6 ? prev + 1 : 6))
            }
          />
        </div>
      </div>
    </div>
  );
}
