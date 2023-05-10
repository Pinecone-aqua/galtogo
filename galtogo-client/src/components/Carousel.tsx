import { useState } from "react";

const translate = [
  "-translate-x-0",
  "-translate-x-[110px] lg:-translate-x-[240px]",
  "-translate-x-[220px] lg:-translate-x-[480px]",
  "-translate-x-[330px] lg:-translate-x-[720px]",
];
export default function Carousel({
  setSelectedCategory,
  categoryData,
  selectedCategory,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedCategory: any;
  categoryData: ICategory[];
  selectedCategory: string | null;
}): JSX.Element {
  const [slide, setSlide] = useState<number>(0);

  function handleRight(): void {
    console.log(slide);
    if (slide < 3) {
      setSlide((prev) => prev + 1);
    } else {
      setSlide(0);
    }
  }

  function handleLeft(): void {
    console.log(slide);
    if (slide <= 3 && slide > 0) {
      setSlide((prev) => prev - 1);
    } else {
      setSlide(3);
    }
  }

  const selected =
    "p-4 bg-white shadow-[0_05px_20px_rgb(0,0,0,0.10)] border border-sky-800 w-[220px] rounded-lg text-center text-sky-800 font-medium";

  return (
    <div className="px-5">
      <div className="relative w-full">
        <div id="carousel" className={`hover:overflow-x-auto overflow-hidden`}>
          <div
            className={`flex ${translate[slide]} duration-300 md:justify-center`}
          >
            {categoryData.map(
              (
                category: ICategory,
                index: number //categories
              ) => (
                <div
                  key={index}
                  className={
                    selectedCategory == category.name
                      ? `${selected} bg-green-800 text-white`
                      : `${selected}`
                  }
                  onClick={() => {
                    setSelectedCategory(category.name),
                      localStorage.setItem("active", category.name);
                  }}
                >
                  {category.name}
                </div>
              )
            )}
          </div>
        </div>
        <button
          onClick={handleLeft}
          type="button"
          className="absolute top-10 left-0 z-10 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-[#757A84] group-hover:text-blue-800 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
        </button>
        <button
          onClick={handleRight}
          type="button"
          className="absolute top-10 right-0 z-10 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-[#757A84] group-hover:text-blue-800 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
