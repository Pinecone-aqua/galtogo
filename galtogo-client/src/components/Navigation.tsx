import { navMenuItems } from "@/utils/constants";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MobilePopover from "./subcomponents/MobilePopover";
import { useUser } from "@/context/UserContext";
import Button from "./subcomponents/Button";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const defaultStyle =
  "hidden px-[8px] py-[16px] md:block md:px-[20px] md:py-[16px] text-sm md:text-base hover:text-[#0D5C63] last:bg-[#0D5C63] last:text-white last:rounded-lg last:hover:text-white";

export default function Navigation(): JSX.Element {
  const [prevScrollPos, SetPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [toggle, setToggleMenu] = useState<boolean>(false);
  const { currentUser } = useUser();
  const router = useRouter();
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos < currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < prevScrollPos
      );
      SetPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const { pathname } = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <div
      className={`fixed z-50 w-[100%] bg-white px-[16px] md:px-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
    >
      <div className="flex justify-between items-center">
        <Image
          className="w-[64px] md:w-[95px]"
          src="/logo.png"
          alt="logopng"
          width={96}
          height={96}
        />

        <div className="flex items-center">
          {navMenuItems.map((menuItem, index) => (
            <Link
              href={menuItem.path}
              className={`${
                menuItem.path === pathname
                  ? `${defaultStyle} text-[#0D5C63]`
                  : `${defaultStyle}`
              }`}
              key={index}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
        {currentUser && (
          <div className="flex items-center">
            <div className="px-3">
              Logged in as:
              <span className="font-bold px-1">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  jwtDecode<any>(currentUser).phone
                }
              </span>
            </div>
            <Button variant={"ghost"} onClick={handleLogout}>
              Log out
            </Button>
          </div>
        )}

        <div
          className="block md:hidden lg:hidden"
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          <Hamburger size={24} />
        </div>
      </div>
      <div className="block md:hidden">
        <MobilePopover toggle={toggle} />
      </div>
    </div>
  );
}
