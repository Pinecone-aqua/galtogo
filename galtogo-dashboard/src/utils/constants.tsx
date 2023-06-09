/* eslint-disable unicorn/filename-case */
import { FiSettings } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { BiDish } from "react-icons/bi";
import moment from "moment";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    image: <RxSketchLogo size={20} />,
  },
  {
    name: "Tables",
    path: "/dashboard/tables",
    image: <RxDashboard size={20} />,
  },
  {
    name: "Reservations",
    path: "/dashboard/reservations",
    image: <FaRegListAlt size={20} />,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    image: <BiDish size={20} />,
  },
  {
    name: "Users",
    path: "/dashboard/users",
    image: <RxPerson size={20} />,
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
    image: <HiOutlineShoppingBag size={20} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    image: <FiSettings size={20} />,
  },
];

export enum ReservationStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
}

export enum TableShape {
  ROUND = "round",
  SQUARE = "square",
  RECTANGLE = "rectangle",
}

export enum TableSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
export const filterBtns = [
  { name: "table" },
  { name: "date" },
  { name: "user" },
];

export const tableTimes = [
  { time: "10:00", isOccupied: false },
  { time: "11:00", isOccupied: false },
  { time: "12:00", isOccupied: false },
  { time: "13:00", isOccupied: false },
  { time: "14:00", isOccupied: false },
  { time: "15:00", isOccupied: false },
  { time: "16:00", isOccupied: false },
  { time: "17:00", isOccupied: false },
  { time: "18:00", isOccupied: false },
  { time: "19:00", isOccupied: false },
  { time: "20:00", isOccupied: false },
  { time: "21:00", isOccupied: false },
];

export const today = {
  year: Number(moment().format("YYYY")),
  month: Number(moment().format("MM")),
  day: Number(moment().format("DD")),
};
