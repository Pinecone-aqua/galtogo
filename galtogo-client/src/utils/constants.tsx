import { HiLocationMarker } from 'react-icons/hi'
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/Bs'

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
