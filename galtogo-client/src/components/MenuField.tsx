import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
}) {

  return (
    <div className="flex flex-row md:grid md:grid-cols-4 lg:grid lg:grid-cols-6  lg:w-[80%] mx-auto gap-[20px] md:mx-[40px] lg:mx-auto">
      {products.map(
        (product: IProduct, index) =>
          product.category.name === selectedCategory && (
            <div key={index}>
              <MenuCard product={product} />
            </div>
          )
      )}
    </div>
  );
}