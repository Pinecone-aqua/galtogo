import React from 'react';
import { Rating } from "primereact/rating";
import Button from './Button';

export default function MenuCard({ product, }: { product: IProduct; }): JSX.Element {
  return (
    <div className="min-w-[156px] md:w-full">

      <picture>
        <img className="w-full max-h-[186px]  md:max-h-[180px]  object-cover rounded-lg" src={product.img} alt="pic" />
      </picture>

      <div className="bg-white mt-2">
        <div className="p-1 font-bold text-sm text-gray-700">{product.title}</div>
        <div className="p-1 mt-1 ">
          <Rating value={3} readOnly cancel={false} />
        </div>

        <Button className='w-full mt-4 hidden lg:block border border-slate-100 bg-white text-black' size={'lg'}>{product.price}₮</Button>
      </div>
    </div>
  );
}
