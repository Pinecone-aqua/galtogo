import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GrRestaurant } from "react-icons/gr";
import { NextRouter, useRouter } from "next/router";

interface PageProp {
  children: ReactNode;
}

const menuItems = [
  { name: "Dashboard", path: "/dashboard", image: <RxSketchLogo size={20} /> },
  {
    name: "Tables",
    path: "/dashboard/Tables",
    image: <RxDashboard size={20} />,
  },
  {
    name: "Reservations",
    path: "/dashboard/Reservations",
    image: <GrRestaurant size={20} />,
  },
  { name: "Users", path: "/dashboard/Users", image: <RxPerson size={20} /> },
  {
    name: "Orders",
    path: "/dashboard/Orders",
    image: <HiOutlineShoppingBag size={20} />,
  },
  {
    name: "Settings",
    path: "/dashboard/Settings",
    image: <FiSettings size={20} />,
  },
];

export default function Sidebar({ children }: PageProp): JSX.Element {
  const currentPath: NextRouter = useRouter();
  console.log(currentPath.pathname);

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              // legacyBehavior
              // onClick={clickHandle}
            >
              <div
                className={
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  item.path !== currentPath.pathname
                    ? "bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block"
                    : "bg-purple-800 text-white cursor-pointer my-4 p-3 rounded-lg inline-block"
                }
              >
                {item.image}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}
