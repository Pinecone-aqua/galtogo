import { HiLocationMarker } from 'react-icons/hi'
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/Bs'
import {HiOutlineUserGroup, HiOutlinePhone, HiOutlineLockClosed, HiOutlineClock} from 'react-icons/hi2'
import moment from "moment";
export const navMenuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Account",
    path: "/Account",
  },
  {
    name: "Special Offer",
    path: "/Special",
  },
  {
    name: "Contact Us",
    path: "/Contact",
  },
];

export interface ILocation {
  lat: number,
  lng: number,
}



export const BranchItems = [
  {
    id: "0",
    branch: "Park side",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.903535, lng: 106.942957 }
  },
  {
    id: "1",
    branch: "Seoul Business center салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.923752, lng: 106.934132 }
  },

  {
    id: "2",
    branch: "Hunnu mall салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.87852183228536, lng: 106.85118469406174 }
  },
  {
    id: "3",
    branch: "Юнеско салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.91268433581378, lng: 106.92699161467874 }
  },
  {
    id: "4",
    branch: "Хүүхдийн 100 салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.91452407935608, lng: 106.91040213194563 }
  },
]

export const socialIcons = [
  {
    icon: <BsInstagram size={20} />
  },
  {
    icon: <BsFacebook size={20} />
  },
  {
    icon: <BsTwitter size={20} />
  },
  {
    icon: <BsLinkedin size={20} />
  },
]

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
  month: Number(moment().format("M")),
  day: Number(moment().format("D")),
};

export const footerMenuItems = [
  {
    name: "Хүний нөөц",
    icon: <HiOutlineUserGroup/>
  },
  {
    name: "Цагийн хуваарь",
    icon: <HiOutlineClock/>
  },
  {
    name: "Нууцлалын бодлого",
    icon: <HiOutlineLockClosed/>
  },
  {
    name: "Холбоо барих",
    icon: <HiOutlinePhone/>
  },
]
