import { footerMenuItems } from "@/utils/constants"
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <div className="px-[40px]">
      <div className="flex flex-col sm:justify-between sm:items-center md:items-center md:justify-between sm:flex-row py-4">

        <div>
          <picture>
            <img className="w-[72px] mb-4 sm:mb-0" src="./logo.png" alt="logo" />
          </picture>
        </div>
        <div className="border sm:hidden md:hidden" />
        <div className="flex flex-col sm:flex-row">
          {footerMenuItems.map((item: { name: string, icon: JSX.Element }, index: number) => (
            <div className="flex items-center text-sm gap-1 justify-between  p-2 md:text-base lg:text-base" key={index}>
              <div>{item.icon}</div>
              <div className="w-full">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border" />
      <div className="flex flex-col sm:justify-between py-8 sm:items-center sm:flex-row ">
        <p>© 2023 Developed by Galtogo Team</p>
        <div className="flex gap-2 text-slate-300 mt-4 sm:mt-0 md:mt-0">
          <FaFacebook size={'24px'} />
          <FaFacebookMessenger size={'24px'} />
          <FaTwitter size={'24px'} />
          <FaInstagram size={'24px'} />
          <FaGithub size={'24px'} />
        </div>
      </div>
    </div>
  );
}