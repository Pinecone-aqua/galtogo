import { useReservation } from "@/context/ReservationContext";
import { HiOutlineCalendarDays, HiOutlineClock } from "react-icons/hi2";
import { MdOutlineTableRestaurant } from "react-icons/md";

const OrderDetails = ({
  tableNumber,
}: {
  tableNumber: number;
}): JSX.Element => {
  const { newReservation } = useReservation();

  return (
    <div className="flex flex-col gap-4 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4">
      <h1 className="text-[24px] font-medium">Your order details</h1>
      <div className="flex gap-2 flex-wrap justify-center">
        <div className="px-[32px] py-[20px] border rounded-lg w-[190px]">
          <h1 className="mb-[4px] font-medium">Reservation Date</h1>
          <div className="flex items-center gap-1">
            <HiOutlineCalendarDays />
            {newReservation.date}
          </div>
        </div>

        <div className="px-[32px] py-[20px] border rounded-lg w-[190px]">
          <h1 className="mb-[4px] font-medium">Table Number</h1>
          <div className="flex items-center gap-1">
            <MdOutlineTableRestaurant />
            {tableNumber}
          </div>
        </div>

        <div className="px-[32px] py-[20px] border rounded-lg w-[190px]">
          <h1 className="mb-[4px] font-medium">Reservation time</h1>
          <div className="flex items-center gap-1">
            <HiOutlineClock />
            {newReservation.time}
          </div>
        </div>

        <div className="px-[32px] py-[20px] border rounded-lg w-[190px]">
          <h1 className="mb-[4px] font-medium">Guests number</h1>
          <div className="flex items-center gap-1">
            <HiOutlineCalendarDays />
            {newReservation.persons}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
