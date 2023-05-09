import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
})  { 
  
  return (
    <div className="flex w-full gap-[12px] p-4">
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
