/* eslint-disable unicorn/filename-case */
import { FiSettings } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";
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
    image: <FaRegListAlt size={20} />,
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

export enum ReservationStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
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
