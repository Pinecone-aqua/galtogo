import MenuCard from "./subcomponents/MenuCard";

export default function MenuField({
  selectedCategory,
  items,
}: {
  selectedCategory: string;
  items: IProduct[];
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map(
        (item, index) =>
          item.category === selectedCategory && (
            <div key={index} className="flex flex-wrap justify-center">
              <MenuCard product={item} />
            </div>
          )
      )}
    </div>
  );
}
