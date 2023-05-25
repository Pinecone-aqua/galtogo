import { blogList } from "@/utils/constants";
import BlogCard from "./subcomponents/BlogCard";

export default function BlogSection() {
  return (
    <div className="flex justify-center flex-wrap max-w-[1152px] mx-auto gap-[20px]">
      {blogList.map((item, index) => (
        <BlogCard item={item} key={index} />
      ))}
    </div>
  );
}
