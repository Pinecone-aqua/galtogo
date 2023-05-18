import Image from "next/image";


export default function ChefTeam() {
  return (
    <div>
      <div className="mx-auto text-center my-[56px] ">
        <h1 className="text-[56px] font-bold">Our <span className="text-[#0D5C63]">Executive Chef’s</span></h1>
        <p className="text-[32px] font-medium">Instructor team</p>
      </div>
      <div className="flex justify-between mx-[10%]  mt-[56px]">
        <div>
          <Image
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684382617/ChoHeeSook_wagx4h.png"
            className="h-[268px] w-[268px]"
            width={1000}
            height={1000}
            alt="Profile" />
          <div className="mt-[16px]">
            <h1 className="text-[32px] text-[#0D5C63] font-bold">Cho Hee-sook</h1>
            <p className="text-[18px] font-medium text-[#E24F2F]">Executive Chef</p>
          </div>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684382617/MunkhOrgil_gskcis.png"
            className="h-[268px] w-[268px]"
            width={1000}
            height={1000}
            alt="Profile" />
          <div className="mt-[16px]">
            <h1 className="text-[32px] text-[#0D5C63] font-bold">Munkh-Orgil</h1>
            <p className="text-[18px] font-medium text-[#E24F2F]">Executive Chef</p>
          </div>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1684382617/Anntony_qmdtmz.png"
            className="h-[268px] w-[268px]"
            width={1000}
            height={1000}
            alt="Profile" />
          <div className="mt-[16px]">
            <h1 className="text-[32px] text-[#0D5C63] font-bold">Antony Salvodore</h1>
            <p className="text-[18px] font-medium text-[#E24F2F]">Executive Chef</p>
          </div>
        </div>


      </div>
    </div>
  )
}