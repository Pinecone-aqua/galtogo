import { useState } from "react";

const categories = [
  { name: "Category-1", image: "url-1" },
  { name: "Category-2", image: "url-2" },
  { name: "Category-3", image: "url-3" },
  { name: "Category-4", image: "url-4" },
  { name: "Category-5", image: "url-5" },
];
const translate = {
  0: "-translate-x-0",
  1: "-translate-x-[110px] lg:-translate-x-[240px]",
  2: "-translate-x-[220px] lg:-translate-x-[480px]",
  3: "-translate-x-[330px] lg:-translate-x-[720px]",
};

export default function Carousel({
  setSelectedCategory,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedCategory: any;
}): JSX.Element {
  const [slide, setSlide] = useState(0);

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
  return (
    <div className="px-5 py-10">
      <div className="relative w-full">
        <div id="carousel" className={`overflow-x-auto overflow-hidden`}>
          <div
            className={`flex ${translate[slide]} duration-300 md:justify-center`}
          >
            {categories.map((category: ICategory, index: number) => (
              <div
                key={index}
                className="hover:bg-black/10 rounded-full cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] bg-slate-200 m-1 rounded-full">
                  <p className="text-center mx-auto pt-10 text-xs">
                    {category.name}
                  </p>
                </div>
              </div>
            ))}
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
