export default function CategoryMobile({
  selectedCategory,
  categories,
  setSelectedCategory,
}: {
  selectedCategory: string | null;
  categories: ICategory[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedCategory: any;
}): JSX.Element {
  const selected = "px-[16px] py-[12px] rounded-[50px]";
  return (
    <div className="flex w-full gap-2 p-4 mt-[64px]">
      {categories.map((category: ICategory, index: number) => (
        <div
          key={index}
          className={
            selectedCategory == category.name
              ? `${selected} bg-[#0D5C63] text-white font-medium`
              : `${selected}  text-[#505D6F] border`
          }
          onClick={() => {
            setSelectedCategory(category.name),
              localStorage.setItem("active", category.name);
          }}
        >
          <div className="w-[120px] text-center">{category.name}</div>
        </div>
      ))}
    </div>
  );
}
