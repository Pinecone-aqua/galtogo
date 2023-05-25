import FoodCard from "./subcomponents/FoodCard";

export default function MenuField({
  selectedCategory,
  products,
}: {
  selectedCategory: string | null;
  products: IProduct[];
}) {
  return (
    <div className="flex gap-5 overflow-x-auto">
      {products.map(
        (product: IProduct, index: number) =>
          product.category.name === selectedCategory && (
            <div key={index}>
              <FoodCard product={product} />
            </div>
          )
      )}
    </div>
  );
}
