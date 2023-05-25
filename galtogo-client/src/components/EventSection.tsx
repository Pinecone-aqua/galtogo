import { eventList } from "@/utils/constants";
import EventCard from "./subcomponents/EventCard";

export default function EventSection(): JSX.Element {
  return (
    <div className="bg-[#082F33] py-[56px]">
      <h1 className="max-w-[1152px] mx-auto text-[36px] font-bold text-white py-[32px] ">
        Upcoming and latest Events
      </h1>
      <div className="max-w-[1152px] mx-auto justify-center flex flex-wrap gap-[20px]">
        {eventList.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>
    </div>
  );
}
