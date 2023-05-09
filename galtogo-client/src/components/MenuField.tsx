import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
})  { 
  
  return (
    <div className="flex w-full gap-[20px] p-4 sm:flex md:flex-wrap md:justify-center">
      {products.map(
        (product:IProduct, index) =>
          product.category.name === selectedCategory && (
            <div key={index}>
              <MenuCard product={product} />
            </div>
          )
      )}
    </div>
  );
}
