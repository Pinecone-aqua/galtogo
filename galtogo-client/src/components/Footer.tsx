import { footerMenuItems } from "@/utils/constants";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="px-[40px]">
      <div className="flex justify-between py-4">
        <div>
          <picture>
            <img className="w-[72px]" src="./logo.png" alt="logo" />
          </picture>
        </div>
        <div className="flex">
          {footerMenuItems.map((item, index) => (
            <div className="flex items-center gap-2 p-2" key={index}>
              <div>{item.icon}</div>
              <div className="w-full">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border" />
      <div className="flex items-center justify-between py-8">
        <p>© 2023 Developed by Galtogo Team • Бүх эрх хуулиар хамгаалагдсан</p>
        <div className="flex gap-2 text-slate-300">
          <FaFacebook size={'24px'}/>
          <FaFacebookMessenger size={'24px'}/>
          <FaTwitter size={'24px'}/>
          <FaInstagram size={'24px'}/>
          <FaGithub size={'24px'}/>
        </div>
      </div>
    </div>
  );
}
