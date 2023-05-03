import Link from "next/link";
import { GrRestaurant } from "react-icons/gr";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="bg-purple-100 rounded-lg p-3 m-5">
        <GrRestaurant size={100} className="text-purple-800" />
      </div>
      <div>GALTOGO</div>
      <Link
        href="/dashboard"
        className="border rounded-lg p-4 mt-4 hover:bg-slate-300 hover:ring-2 hover:ring-offset-2"
      >
        Login
      </Link>
    </div>
  );
}
