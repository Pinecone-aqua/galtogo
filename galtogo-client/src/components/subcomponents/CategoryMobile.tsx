export default function CategoryMobile({
  selectedCategory, 
  categories,
  setSelectedCategory,
}: {
  selectedCategory: string | null; 
  categories: ICategory[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedCategory: any;
}):JSX.Element {
  const selected = 'px-[8px] py-[6px] px- rounded-[50px]'
  return (
    <div className="flex w-full gap-2 p-4" >
     {categories.map((category: ICategory, index: number) => (
          <div
            key={index}
            className={
              selectedCategory == category.name ? `${selected} bg-[#0D5C63] text-white` : `${selected}  text-[#505D6F]`
            }
            onClick={() => {
              setSelectedCategory(category.name),
                localStorage.setItem("active", category.name);
            }}
          >
            <h1 className="w-[120px] text-center">
            {category.name}
            </h1>
          </div>
        ))}
    </div>
  )
}