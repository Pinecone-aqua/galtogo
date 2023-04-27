import MenuCard from "./subcomponents/MenuCard";

const items = [
  { name: "Item-1", category: "Category-1", price: "ItemPrice-1-1" },
  { name: "Item-2", category: "Category-1", price: "ItemPrice-2-1" },
  { name: "Item-3", category: "Category-1", price: "ItemPrice-3-1" },
  { name: "Item-4", category: "Category-1", price: "ItemPrice-4-1" },
  { name: "Item-5", category: "Category-1", price: "ItemPrice-5-1" },
  { name: "Item-1", category: "Category-2", price: "ItemPrice-1-2" },
  { name: "Item-2", category: "Category-2", price: "ItemPrice-2-2" },
  { name: "Item-3", category: "Category-2", price: "ItemPrice-3-2" },
  { name: "Item-4", category: "Category-2", price: "ItemPrice-4-2" },
  { name: "Item-5", category: "Category-2", price: "ItemPrice-5-2" },
];
// const product = { name: "Item-1", category: "Category-1" };

export default function MenuField({
  selectedCategory,
}: {
  selectedCategory: string;
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
