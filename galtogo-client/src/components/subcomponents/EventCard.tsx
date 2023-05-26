import Image from "next/image";

export default function EventCard({
  event,
}: {
  event: IEventList;
}): JSX.Element {
  return (
    <div className="w-[100%] md:min-w-[290px] md:max-w-[566px]">
      <Image
        className="min-h-[214px] w-[100%] object-cover rounded-lg hover:opacity-90"
        src={event.image}
        height={500}
        width={500}
        alt="eventImage"
      />
      <div className="flex justify-between px-[16px] py-[24px]">
        <div>
          <h1 className="text-[20px] font-bold text-white">{event.title}</h1>
          <p className="text-[14px] font-medium text-white">{event.date}</p>
        </div>
        <button className="bg-[#0D5C63] px-[24px] py-[16px] rounded-lg text-base font-bold text-white hover:bg-[#116e77] cursor-pointer">
          {`Tax: ${event.price}`}
        </button>
      </div>
    </div>
  );
}
