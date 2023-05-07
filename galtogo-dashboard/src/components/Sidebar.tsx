import Link from "next/link";
import { ReactNode } from "react";
import { NextRouter, useRouter } from "next/router";
import { menuItems } from "../utils/constants";

interface PageProp {
  children: ReactNode;
}

const active = "bg-sky-800 text-white";
const inActive = "bg-gray-100 hover:bg-gray-200";

export default function Sidebar({ children }: PageProp): JSX.Element {
  const currentPath: NextRouter = useRouter();

  return (
    <div className="flex">
      <div className="fixed w-52 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                className={`${
                  item.path !== currentPath.pathname ? inActive : active
                } flex items-center cursor-pointer my-4 p-3 w-36 rounded-lg `}
              >
                <div>{item.image}</div>
                <div className="ms-2">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <main className="ml-52 w-full">{children}</main>
    </div>
  );
}
