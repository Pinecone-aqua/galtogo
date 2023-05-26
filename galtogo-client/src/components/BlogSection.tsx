import { blogList } from "@/utils/constants";
import BlogCard from "./subcomponents/BlogCard";

export default function BlogSection() {
  return (
    <div className="w-[100%] max-w-[1152px] mx-auto my-[72px]">
      <h1 className="mb-[32px] text-[36px] text-[#0D5C63] font-bold">Blog</h1>
      <div className="flex justify-center flex-wrap max-w-[1152px] mx-auto gap-[20px]">
        {blogList.map((item, index) => (
          <BlogCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
