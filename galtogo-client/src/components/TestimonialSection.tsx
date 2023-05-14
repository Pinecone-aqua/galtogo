import { TestimonialItems } from "@/utils/constants";
import Image from "next/image";
import ParallaxText from "./subcomponents/Parallax";

export default function TestimonialSection(): JSX.Element {
  return (
    <div className="w-full">
      <div className="mx-auto w-full text-center text-[64px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0D5C63] to-[#13BCCB] mb-[54px]">
        Сэтгэл ханамж
      </div>
      <div className="flex flex-col w-[100%]">
        <div>
          <ParallaxText baseVelocity={2}>
            {TestimonialItems.map((card, index) => (
              <div
                className="flex flex-col w-[350px] p-[24px] rounded-lg gap-2 border border-[#ECF0F3]"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-[32px] h-[32px] object-cover"
                    src={card.profile}
                    alt={"profile"}
                    width={1000}
                    height={1000}
                  />
                  <div className="text-[#0D5C63] font-bold">
                    {card.username}
                  </div>
                </div>
                <p className="font-[16px] text-[#1E1E1E]">{card.comment}</p>
              </div>
            ))}
          </ParallaxText>
        </div>
        <div className="mt-[32px]">
          <ParallaxText baseVelocity={-2}>
            {TestimonialItems.map((card, index) => (
              <div
                className="flex flex-col w-[350px] p-[24px] rounded-lg gap-2 border border-[#ECF0F3]"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-[32px] h-[32px] object-cover"
                    src={card.profile}
                    alt={"profile"}
                    width={1000}
                    height={1000}
                  />
                  <div className="text-[#0D5C63] font-bold">
                    {card.username}
                  </div>
                </div>
                <p className="text-base text-[#1E1E1E]">{card.comment}</p>
              </div>
            ))}
          </ParallaxText>
        </div>
      </div>
    </div>
  );
}
