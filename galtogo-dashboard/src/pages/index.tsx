import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Link
        href="/dashboard"
        className="border rounded-lg p-4 hover:bg-slate-300 hover:ring-2 hover:ring-offset-2"
      >
        Login
      </Link>
    </div>
  );
}
