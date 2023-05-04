import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  productData,
}: {
  selectedCategory: string | null;
  productData: IProduct[];
}) {
  return (
    <div className="mx-auto flex flex-wrap justify-start gap-[16px] w-[1364px]">
      {productData.map(
        (product, index) =>
          product.category.name === selectedCategory && (
            <div key={index}>
              <MenuCard product={product} />
            </div>
          )
      )}
    </div>
  );
}
