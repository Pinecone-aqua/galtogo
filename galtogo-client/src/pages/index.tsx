export default function Home() {
  // function testHandler() {}
  return (
    <div>
      <ul className="flex gap-2 text-blue-600 text-xl p-5">
        <li className="px-6 py-2 border border-sky-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Home
        </li>
        <li className="px-6 py-2 border border-sky-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Order
        </li>
        <li className="px-6 py-2 border border-sky-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          About us
        </li>
        <li className="px-6 py-2 border border-sky-600 rounded-full hover:bg-blue-600 hover:text-white transition">
          Contact
        </li>
      </ul>
    </div>
  );
}
