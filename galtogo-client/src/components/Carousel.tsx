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
  const selected = 'p-2 rounded-lg text-center font-medium text-[4px]'

  return (

    <div className="mx-auto rounded-lg bg-white shadow-[0_05px_20px_rgb(0,0,0,0.10)]">
      <div
        className="flex justify-center w-full center px-[8px] py-[8px] gap-[4px]"
      >
        {categories.map((category: ICategory, index: number) => (
          <div
            key={index}
            className={
              selectedCategory == category.name ? `${selected} bg-[#0D5C63] text-white text-[4px]` : `${selected} text-[#505D6F]`
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
