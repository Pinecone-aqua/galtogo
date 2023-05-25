export default function Carousel({
  setSelectedCategory,
  categories,
  selectedCategory,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedCategory: any;
  categories: ICategory[];
  selectedCategory: string | null;
}): JSX.Element {
  const selected = "px-[32px] py-[12px] text-base font-medium rounded-full";

  return (
    <div className="flex justify-between">
      <h1 className="text-[32px] font-semibold text-[#0D5C63]">
        Our categories
      </h1>
      <div className="flex justify-between gap-2">
        {categories.map((category: ICategory, index: number) => (
          <div
            key={index}
            className={
              selectedCategory == category.name
                ? `${selected} bg-[#0D5C63] text-white`
                : `${selected} text-[#0D5C63] border border-[#0D5C63]`
            }
            onClick={() => {
              setSelectedCategory(category.name),
                localStorage.setItem("active", category.name);
            }}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
