import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function SpecialOffer() {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [images, setImages] = useState<any>()
//Udahgui zuragnuud nemeg ymaa IMAGES :)))
  useEffect (() => {
    axios .get('http://localhost:5050/banner')
    .then ((res) => setImages(res.data))
  }, [])
   
  return (
    <div className="hidden sm:block md:block relative overflow-hidden rounded-[18px]">
      <img
        className="h-[520px] md:h-[320px] w-full object-cover "
        src={images && images[0].imageURL}
        alt="pic"
      />
      <div className="absolute w-full py-5 bottom-[23%] inset-x-0 text-white text-center z-10">
        <div className="text-[72px] md:text-[40px] font-extrabold text-rose-600">
          유나에서 감각적인 식사의
        </div>
        <div className="text-[56px] md:text-[28px]">즐거움을 누리세요</div>
        <div className="flex text-center justify-center gap-4 mt-6">
          <div className="py-2 px-6 rounded-lg border md:text-[12px]  border-white  bg-white text-rose-600 font-bold">
            Details
          </div>
          <div className="py-2 px-6 rounded-md border md:text-[12px] border-white ">
            Make order
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-black h-full opacity-30" />
    </div>
  );
}
