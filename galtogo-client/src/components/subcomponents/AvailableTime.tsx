import { HiOutlineClock } from "react-icons/hi2";
export default function AvailableTime() {
  return (
    <div>
      <div className="flex items-center gap-2 mt-2 px-[16px] py-[20px] rounded-lg border">
        <HiOutlineClock size={24} />
        <div>Available Times</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
        <div className="px-[20px] py-[16px] border text-center rounded-lg">
          12:30
        </div>
      </div>
    </div>
  );
}
