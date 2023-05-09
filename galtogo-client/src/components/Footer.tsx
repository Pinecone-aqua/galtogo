import { footerMenuItems } from "@/utils/constants";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div>
        <picture>
          <img className="w-[64px]" src="./logo.png" alt="logo" />
        </picture>
      </div>
      <div className="w-full">
        {footerMenuItems.map((item, index) => (
          <div className="flex items-center gap-1 p-2" key={index}>
            <div>{item.icon}</div>
            <div className="w-full">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
