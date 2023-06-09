/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function GreetingBanner(): JSX.Element {
  return (
    <div className="relative ">
      <div className="absolute z-10 w-[80%]  right-0 my-[24%] md:-bottom-2 left-0   md:my-0 mx-auto">
        <div className="flex items-center gap-[24px] lg:justify-center">
          <div className="min-w-[256px] lg:max-w-[640px]">
            <h1 className="text-[#FFDC83] text-[24px] text-center md:text-[32px] md:text-start w-full font-bold">
              Тогоочийн санал болгох хоол
            </h1>
            <p className="text-white text-center font-sm mt-[16px] md:text-start">
              Бид танд хамгийн чанартай, эрүүл ахуйн шаардлага хангасан гарал,
              үүсэл тодорхой, мэргэжлийн лаборторид баталгаажсан гахайн махаар
              хийсэн аманд ороод л хайлан уусах, зөөлөн, шүүслэг, бага зэргийн
              шаржигнасан нэг л амталвал дахин дахин амтламаар санагдах гэр
              бүлээрээ идэхэд хамгийн тохиромжтой "БУСАМ" хоолоо санал болгоё.
            </p>
            <div className="flex flex-col items-center md:flex-col md:items-start md:mt-[16px] mt-[36px] gap-4">
              <p className="font-medium text-white md:text-start">
                Yuna restaurant-ын ахлах тогооч
              </p>
              <Image
                className="max-h-[42px] min-h-[16px]"
                src="./Signature.svg"
                alt="signature"
                width={144}
                height={144}
              />
            </div>
          </div>
          <div className="min-w-[324px] lg:w-[524px] hidden md:block">
            <Image
              className="h-[542px] w-full object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684474602/chef_s_image_gmsvqk.png"
              alt="chef-img"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full h-[620px] md:h-[520px] bg-gradient-to-r from-[#0D5C63] to-[#0D5C63B2]" />
      <div className="h-[620px] md:h-[520px] w-full">
        <Image
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1683639802/Rectangle_71_z58pbx.png"
          alt="bannerPhoto"
          width={1000}
          height={1000}
        />
      </div>
      <div className="bg-[#FFDC83] h-[8px] w-full" />
    </div>
  );
}
