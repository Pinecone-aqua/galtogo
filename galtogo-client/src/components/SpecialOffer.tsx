/* eslint-disable @next/next/no-img-element */
export default function SpecialOffer() {
  return (
    <div className="w-full relative overflow-hidden rounded-[18px]">
      <img
        className="h-[520px] w-full object-cover "
        src="./banner.jpg"
        alt="pic"
      />
      <div className="absolute w-full py-5 bottom-[23%] inset-x-0 text-white text-center z-10">
        <div className="text-[72px] font-extrabold text-rose-600">
          유나에서 감각적인 식사의
        </div>
        <div className="text-[56px]">즐거움을 누리세요</div>
        <div className="flex text-center justify-center gap-4 mt-6">
          <div className="py-2 px-6 rounded-lg border border-white  bg-white text-rose-600 font-bold">
            Details
          </div>
          <div className="py-2 px-6 rounded-md border border-white ">
            Make order
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-black h-full opacity-30" />
    </div>
  );
}
