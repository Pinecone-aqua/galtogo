import { HiOutlineUsers, HiOutlineCalendarDays } from "react-icons/hi2";
export default function Order({
  reservationData,
}: {
  reservationData: number;
}) {
  return (
    <div>
      <h1 className="text-[24px] p-4">Your order</h1>

      <div className="flex gap-2 m-2">
        <section className="flex flex-col gap-2 px-[16px] py-[20px] w-[186px] border rounded-lg">
          <h1>Table Number</h1>
          <div className="flex items-center gap-2">
            <h1>24</h1>
          </div>
        </section>

        <section className="flex flex-col gap-2 px-[16px] py-[20px] w-[186px] border rounded-lg">
          <h1>Reservation Date</h1>
          <div className="flex items-center gap-2">
            <HiOutlineCalendarDays />
            <h1>06/24</h1>
          </div>
        </section>

        <section className="flex flex-col gap-2 px-[16px] py-[20px] w-[186px] border rounded-lg">
          <h1>Reservation time</h1>
          <div className="flex items-center gap-2">
            <HiOutlineUsers />
            <h1>12:30 PM</h1>
          </div>
        </section>

        <section className="flex flex-col gap-2 px-[16px] py-[20px] w-[186px] border rounded-lg">
          <h1>Guests</h1>
          <div className="flex items-center gap-2">
            <HiOutlineUsers />
            <h1>{reservationData}</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
