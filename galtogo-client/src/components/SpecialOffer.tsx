import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpecialOffer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [images, setImages] = useState<any>();
  //Udahgui zuragnuud nemeg ymaa IMAGES :)))
  useEffect(() => {
    axios
      .get("http://localhost:5050/banner")
      .then((res) => setImages(res.data));
  }, []);

  return (
    <div className="hidden sm:block sm:rounded-lg md:block relative overflow-hidden rounded-[32px] mt-[120px]">
      <Image
        className="h-[520px] sm:h-[280px] md:h-[720px] w-full object-cover"
        src={images && images[0].imageURL}
        alt="pic"
        width={1000}
        height={1000}
      />
      <div className="absolute w-full py-5 sm:bottom-[42px] md:bottom-[200px] inset-x-0 text-white text-center z-10">
        <div className="text-[72px] sm:text-[32px] md:text-[96px] font-extrabold text-rose-600">
          유나에서 감각적인 식사의
        </div>
        <div className="sm:text-[24px] md:text-[64px]">즐거움을 누리세요</div>
        <div className="flex text-center justify-center gap-4 mt-6">
          <div className="border px-4 py-3 w-[156px] rounded-md sm:text-md md:text-base">Details</div>
          <div className="border px-4 py-3 w-[156px] rounded-md sm:text-md md:text-base">
            Make order
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-black h-full opacity-30" />
    </div>
  );
}
