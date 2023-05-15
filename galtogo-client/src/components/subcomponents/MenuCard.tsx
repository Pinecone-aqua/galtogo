import React from "react";
import { Rating } from "primereact/rating";
import Button from "./Button";
import Image from "next/image";


export default function MenuCard({
  product,
}: {
  product: IProduct;
}): JSX.Element {
  return (
    <div className="md:w-full">
      <Image
        className=" object-cover rounded-lg md:min-h-[164px] md:max-h-[232px] lg:min-h-[164px] lg:max-h-[352px]"
        src={product.img}
        alt={"test"}
        width={1000}
        height={1000}
      />

      <div className="bg-white mt-2">
        <div className="p-1 font-bold text-sm text-gray-700">
          {product.title}
        </div>
        <div className="p-1 mt-1 ">
          <Rating value={3} readOnly cancel={false} />
        </div>

        <Button
          className="w-full mt-4 hidden lg:block border border-slate-100 bg-white text-black"
          size={"lg"}
        >
          {product.price}₮
        </Button>
      </div>
    </div>
  );
}