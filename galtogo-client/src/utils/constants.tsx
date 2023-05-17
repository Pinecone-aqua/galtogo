import React from "react";
import {
  HiLocationMarker,
  HiOutlineClock,
  HiOutlineLockClosed,
  HiOutlinePhone,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import moment from "moment";

export const navMenuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "My Account",
    path: "/account",
  },
  {
    name: "Special Offer",
    path: "/special",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "Reservation",
    path: "/reservation",
  },
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

export const BranchItems = [
  {
    id: "0",
    branch: "Park side",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.903535, lng: 106.942957 },
  },
  {
    id: "1",
    branch: "Seoul Business center салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.923752, lng: 106.934132 },
  },

  {
    id: "2",
    branch: "Hunnu mall салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.87852183228536, lng: 106.85118469406174 },
  },
  {
    id: "3",
    branch: "Юнеско салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.91268433581378, lng: 106.92699161467874 },
  },
  {
    id: "4",
    branch: "Хүүхдийн 100 салбар",
    path: "/",
    icon: <HiLocationMarker size={20} />,
    location: { lat: 47.91452407935608, lng: 106.91040213194563 },
  },
];

export const socialIcons = [
  {
    icon: <BsInstagram size={20} />,
  },
  {
    icon: <BsFacebook size={20} />,
  },
  {
    icon: <BsTwitter size={20} />,
  },
  {
    icon: <BsLinkedin size={20} />,
  },
];

export const footerMenuItems = [
  {
    name: "Хүний нөөц",
    icon: <HiOutlineUserGroup />,
  },
  {
    name: "Цагийн хуваарь",
    icon: <HiOutlineClock />,
  },
  {
    name: "Нууцлалын бодлого",
    icon: <HiOutlineLockClosed />,
  },
  {
    name: "Холбоо барих",
    icon: <HiOutlinePhone />,
  },
];

export const TestimonialItems = [
  {
    profile:
      "https://www.reuters.com/resizer/KPyPEIt3l_uuN0830xaFD9v2Idc=/1920x2400/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/34GWN2I7W5LJJDYR7VOOLE7MLY.jpg",
    username: "Enkhjin",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis architecto.",
  },
  {
    profile:
      "https://img.freepik.com/premium-vector/nft-pixel-art-cryptopunks-style-103_621504-1.jpg?w=2000",
    username: "Temuulen",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis at non repellat illum repellendus dignissimos incidunt architecto.",
  },
  {
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjhMlQ4o6CMijU7-8oXjStxxsasnpE-c2tVirLatp8_PlT-7GZHCKTe9ZQEDDLB1PC98&usqp=CAU",
    username: "John",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis at non repellat illum repellendus dignissimos incidunt architecto.",
  },
  {
    profile:
      "https://www.reuters.com/resizer/KPyPEIt3l_uuN0830xaFD9v2Idc=/1920x2400/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/34GWN2I7W5LJJDYR7VOOLE7MLY.jpg",
    username: "Suldee",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis at non repellat illum repellendus dignissimos incidunt architecto.",
  },
  {
    profile:
      "https://www.cryptotimes.io/wp-content/uploads/2021/12/CryptoPunk-5671-WEBSITE-800x500.jpg",
    username: "Muugii",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis at non repellat illum repellendus dignissimos incidunt architecto.",
  },
  {
    profile:
      "https://nftevening.com/wp-content/uploads/2022/05/cryptopunk-nft-sold.jpg",
    username: "Guest123",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis at non repellat illum repellendus dignissimos incidunt architecto.",
  },
  {
    profile:
      "https://i1.sndcdn.com/avatars-rfwy5mSeUytFz5Gx-8s06ZQ-t500x500.jpg",
    username: "Eddie",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel quo nobis at non repellat illum repellendus dignissimos incidunt architecto.",
  },
];

