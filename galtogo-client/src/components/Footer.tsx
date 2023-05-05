import { socialIcons } from "@/utils/constants";
import { TbChefHat } from 'react-icons/tb'

export default function Footer() {
  return <div><div className="flex justify-between gap-10 w-full p-10 mt-20">
    <div className="w-1/4">
      <h1 className="font-bold p-2 text-lg text-orange-500">Байршил</h1>
      <p className="p-2 text-gray-400 w-[250px]">Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот, Монгол улс NewHorizon center - 401 тоот</p>
    </div>

    <div className="w-1/4">
      <h1 className="p-2 text-lg font-bold text-orange-500">Цагийн хуваарь</h1>
      <p className="p-2 text-gray-400">11:00 - 18:00 (ажлын өдөр)</p>
      <p className="p-2 text-gray-400">11:00 - 17:00 (амралтын өдөр)</p>
    </div>

    <div className="w-1/4  ">
      <h1 className="p-2 text-lg font-bold text-orange-500">Сошиал сувгууд</h1>
      <div className="flex gap-2 p-2">
        {socialIcons.map((item, index) => <div className="text-gray-400" key={index}>{item.icon}</div>)}
      </div>
    </div>

    <div className="w-1/4 ">
      <h1 className="p-2 font-bold text-lg text-orange-500">Холбоо барих</h1>
      <p className="p-2 text-gray-400">order@galtogo.mn</p>
      <p className="p-2 text-gray-400">hire@galtogo.mn</p>
      <p className="p-2 text-gray-400">Nexus@galtogo.mn</p>
    </div>



  </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 p-4">
        <TbChefHat />

        <div className="p-4 text-gray-500">© 2017-2023 Зохиогчийн эрх хамгаалагдсан</div>
      </div>
      <div className="text-gray-500">Powered by Galtogo team</div>
    </div>
  </div>
}
