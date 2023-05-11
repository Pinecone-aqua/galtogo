import { navMenuItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <div className="">
      <div className="hidden sm:flex flex-lg justify-between items-center h-20 px-[40px]">
        <Link href="/">
          <Image className="w-[64px]" src="/logo.png" alt="logoPng" width={500} height={500} />
        </Link>
        <div className="flex gap-4 pe-80">
          {navMenuItems.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem.path}
              className={`${pathname === menuItem.path
                ? "bg-sky-800 text-white font-bold"
                : "bg-slate-100 text-slate-800"
                }  hover:bg-slate-200 hover:text-black rounded-xl px-4 py-2 min-w-fit `}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex sm:hidden justify-end p-3 bg-slate-600 min-w-fit cursor-pointer">
        O
      </div>
    </div>
  );
}
