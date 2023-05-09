import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
})  { 
  
  return (
    <div className="mx-auto flex flex-wrap justify-start gap-[16px] w-[1364px]">
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
