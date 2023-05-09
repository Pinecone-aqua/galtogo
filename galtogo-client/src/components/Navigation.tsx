import { navMenuItems } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <div className="">
      <div className="hidden sm:flex flex-lg justify-between items-center h-20">
        <picture>
          <img alt="logoPng" src="./logo.png" width={100} height={100} />
        </picture>
        <div className="flex gap-4 pe-80">
          {navMenuItems.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem.path}
              className={`${
                pathname === menuItem.path
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
