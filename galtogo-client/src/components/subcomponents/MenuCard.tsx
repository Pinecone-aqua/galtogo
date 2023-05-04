import React from 'react'; 
import { Rating } from "primereact/rating";
import Button from './Button';

export default function MenuCard({ product, }: { product: IProduct; }): JSX.Element {
  console.log(product);
  return (
    <div className="w-[260px] h-full overflow-hidden">

      <picture>
        <img className="w-full h-[250px] object-cover rounded-lg" src={product.img} alt="pic" />
      </picture>

      <div className="bg-white mt-2">
        <div className="p-1 font-bold text-gray-700">{product.title}</div>
        <div className="p-1 text-sm w-full h-[64px] overflow-hidden">{product.desc}</div>
        <div className="p-1 mt-1">
            <Rating value={3} readOnly cancel={false} />
        </div>
    
       <Button className='w-full mt-4' size={'lg'}>{product.price}₮</Button>
      </div>
    </div>
  );
}
