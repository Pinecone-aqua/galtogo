import { useState } from "react";



export default function Carousel({
  setSelectedCategory, categoryData
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedCategory: any; 
  categoryData:ICategory[];
}): JSX.Element {
  const [slide, setSlide] = useState(0);



  function handleRight(): void {
    if (slide < 330) {
      setSlide((prev) => prev + 110);
    } else {
      setSlide(0);
    }
  }

  function handleLeft(): void {
    if (slide >= 330) {
      setSlide((prev) => prev - 110);
    } else {
      setSlide(330);
    }
  }
  return (
    <div className="px-5 py-10">
      <div className="relative w-full">
        <div id="carousel" className={`hover:overflow-x-auto overflow-hidden`}>
          <div
            className={`flex -translate-x-[${slide}px] duration-300 sm:justify-center`}
          >
            {categoryData.map((category: ICategory, index: number) => (
              <div
                key={index}
                className="hover:bg-black/10 cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="w-[100px] h-[100px] bg-slate-200 m-1  overflow-hidden">
                  <picture>
                  <img src = {category.img}className="text-center mx-auto object-cover -translate-y-7"  alt="pic"/>
                  </picture>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleLeft}
          type="button"
          className="absolute top-28 left-0 z-10 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
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
          className="absolute top-28 right-0 z-10 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
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
