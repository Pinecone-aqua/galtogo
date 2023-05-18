import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";
import { MdOutlineTableRestaurant } from "react-icons/md";

export default function OrderDetails({
  newReservation,
  tableNumber,
}: {
  newReservation: IReservation;
  tableNumber: number;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[24px] font-medium">Your order details</h1>
      <div className="flex gap-2 flex-wrap">
        <div className="px-[32px] py-[20px] border rounded-lg w-[190]">
          <h1 className="mb-[4px] font-medium">Reservation Date</h1>
          <div className="flex items-center gap-1">
            <HiOutlineCalendarDays />
            {newReservation.date}
          </div>
        </div>

        <div className="px-[32px] py-[20px] border rounded-lg w-[190]">
          <h1 className="mb-[4px] font-medium">Table Number</h1>
          <div className="flex items-center gap-1">
            <MdOutlineTableRestaurant />
            {tableNumber}
          </div>
        </div>

        <div className="px-[32px] py-[20px] border rounded-lg w-[190]">
          <h1 className="mb-[4px] font-medium">Reservation time</h1>
          <div className="flex items-center gap-1">
            <HiOutlineClock />
            {newReservation.time}
          </div>
        </div>

        <div className="px-[32px] py-[20px] border rounded-lg w-[190]">
          <h1 className="mb-[4px] font-medium">Guests number</h1>
          <div className="flex items-center gap-1">
            <HiOutlineCalendarDays />
            {newReservation.persons}
          </div>
        </div>
      </div>
    </div>
  );
}
