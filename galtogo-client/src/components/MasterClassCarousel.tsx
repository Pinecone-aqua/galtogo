import Image from "next/image"
import { useState } from "react"

export default function MasterClassCarousel() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  console.log(selectedCategory)
  const CourseCategories = [
    {
      name: "Korean Cuisine",
    },
    {
      name: "Europe Cuisine",
    },
    {
      name: "Chinese Cuisine",
    },
    {
      name: "Indian Cuisine",
    },
  ]

  const categoryStyle = "px-[32px] py-[12px] border w-max text-center rounded-full border-[#0D5C63] font-medium"
  return (
    <div>
      <div className="py-[56px]">
        <h1 className="text-[64px] font-bold w-[780px] text-center mx-auto mb-[32px]">Our <span className="text-[#0D5C63]">Executive</span> Chef’s master class</h1>
        <div className="flex justify-center gap-2 mx-auto">
          {CourseCategories.map((category, index: number) =>
            selectedCategory === index ?
              (<div className={`${categoryStyle} bg-[#0D5C63] text-white`} key={index} onClick={() => setSelectedCategory(index)}>{category.name}</div>)
              :
              (<div className={`${categoryStyle} text-[#0D5C63]`} key={index} onClick={() => setSelectedCategory(index)}>{category.name}</div>)
          )}
        </div>
      </div>
      <div className="flex mt-[56px] gap-[20px] overflow-x-auto snap-x">
        <div className="relative w-full">
          <Image className="h-[520px] object-cover max-w-[1200px]  " src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684381019/Banner1_outkxh.png" width={1000} height={1000} alt="blablal" />
          <h1 className="absolute bottom-0 top-0 my-auto h-max w-[820px] mx-auto left-0 right-0 text-[48px] font-bold text-white text-center">Master the Korean Culture & Advance your career</h1>
        </div>

        <div className="relative w-full">
          <Image className="h-[520px] object-cover max-w-[1200px] snap-center " src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684381019/Banner1_outkxh.png" width={1000} height={1000} alt="blablal" />
          <h1 className="absolute bottom-0 top-0 my-auto h-max w-[820px] mx-auto left-0 right-0 text-[48px] font-bold text-white text-center">Master the Korean Culture & Advance your career</h1>
        </div>

        <div className="relative w-full">
          <Image className="h-[520px] object-cover max-w-[1200px]  " src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684381019/Banner1_outkxh.png" width={1000} height={1000} alt="blablal" />
          <h1 className="absolute bottom-0 top-0 my-auto h-max w-[820px] mx-auto left-0 right-0 text-[48px] font-bold text-white text-center">Master the Korean Culture & Advance your career</h1>
        </div>
      </div>
    </div>

  )
} 