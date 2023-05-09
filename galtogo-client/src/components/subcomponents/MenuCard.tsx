import React from 'react';
import { Rating } from "primereact/rating";
import Button from './Button';

export default function MenuCard({ product, }: { product: IProduct; }): JSX.Element {
  return (
    <div className="w-[240px]">

      <picture>
        <img className="w-full h-[270px] object-cover rounded-lg" src={product.img} alt="pic" />
      </picture>

      <div className="bg-white mt-2">
        <div className="p-1 font-bold text-sm text-gray-700">{product.title}</div>
        <div className="hidden p-1 w-full text-sm overflow-hidden">{product.desc}</div>
        <div className="p-1 mt-1 ">
          <Rating value={3} readOnly cancel={false} />
        </div>

        <Button className='w-full mt-4 hidden' size={'lg'}>{product.price}₮</Button>
      </div>
    </div>
  );
}
