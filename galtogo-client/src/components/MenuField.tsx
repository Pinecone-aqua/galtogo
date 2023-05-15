import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
}) {
  return (
    <div className="flex flex-row ml-[16px] sm:grid sm:grid-cols-4 sm:mx-[20px] md:grid md:grid-cols-5 md:mx-[40px] lg:w-[90%] lg:grid lg:grid-cols-6 gap-[20px] lg:mx-auto">
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
