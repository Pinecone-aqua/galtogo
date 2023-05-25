import { features } from "@/utils/constants";
import Image from "next/image";
export default function Features() {
  return (
    <div className="flex justify-center gap-5">
      {features.map((item, index) => (
        <div
          className="max-w-[371px] min-w-[371px] p-[24px] border border-[#0D5C631A] rounded-[8px]"
          key={index}
        >
          <div className="flex items-center gap-4">
            <Image
              className="min-w-[64px] max-w-[64px]"
              src={item.image}
              height={1000}
              width={1000}
              alt="Feature-Icon"
            />
            <h1 className="text-[20px] font-medium leading-[24px]">
              {item.header}
            </h1>
          </div>
          <p className="mt-[16px] text-[16px] leading=[21px]">
            You can make reservation on every branches on Yuna restaurants from
            anywhere & anytime.
          </p>
        </div>
      ))}
    </div>
  );
}
