import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
}) {
  return (
    <div className="flex -translate-x-[1920px] flex-row ml-[16px] md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 lg:w-[90%] mx-auto gap-[20px] md:mx-[40px] lg:mx-auto">
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
