import { navMenuItems } from "@/utils/constants";
import Image from "next/image";

export default function NavTest():JSX.Element {
  return (
    <div className="flex justify-between">
      <Image src="/logo.png" alt="logopng" width={96} height={96} />
      <div className="flex gap-2">
        {navMenuItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
