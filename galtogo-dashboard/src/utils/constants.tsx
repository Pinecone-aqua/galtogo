/* eslint-disable unicorn/filename-case */
import { FiSettings } from "react-icons/fi";
import { GrRestaurant } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";

export const menuItems = [
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
