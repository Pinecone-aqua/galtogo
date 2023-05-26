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
  const selected =
    "px-[32px] py-[12px] text-base font-medium rounded-full text-center min-w-max";

  return (
    <div className="mx-auto max-w-[80%]">
      <h1 className="text-[36px] font-semibold text-[#0D5C63] min-w-max my-[16px]">
        Our categories
      </h1>
      <div className="flex gap-2 mb-[32px] mx-auto overflow-x-auto">
        <div className="flex gap-2 overflow-x-auto ">
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
    </div>
  );
}
