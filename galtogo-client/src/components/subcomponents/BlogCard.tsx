import Image from "next/image";

export default function BlogCard({ item }: { item: IBlog }) {
  return (
    <div className="min-w-[250px] max-w-[370px] rounded-lg overflow-hidden">
      <Image
        className="min-h-[156px] max-h-[250px]"
        src={item.image}
        height={500}
        width={500}
        alt="blog image"
      />
      <div className="flex flex-col gap-[12px] p-[16px]">
        <h1 className="text-[18px] font-medium text-[#0D5C63]">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex justify-between">
          <p className="px-[16px] py-[12px]">{item.readTime}</p>
          <button className="px-[32px] py-[12px] bg-[#0D5C630D] text-[#0D5C63] rounded-[8px]">
            Read
          </button>
        </div>
      </div>
    </div>
  );
}
