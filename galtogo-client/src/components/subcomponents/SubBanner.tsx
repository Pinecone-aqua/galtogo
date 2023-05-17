import Image from "next/image";

export default function SubBanner(): JSX.Element {
  return (
    <div className="relative">
      <Image
        className="w-full h-[420px] object-cover object-center"
        src={
          "https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684325029/sub-banner-hr_ozfpny.png"
        }
        width={1920}
        height={500}
        quality={100}
        alt="sub-banner"
      />

      <p className="absolute top-[180px]  left-[132px] w-[526px] font-bold h-max text-white text-[36px] leading-[44px]">
        Join our team and savor the flavor of a{" "}
        <span className="text-[#17B890]">fulfilling career</span> in the
        restaurant industry!
      </p>
    </div>
  );
}
