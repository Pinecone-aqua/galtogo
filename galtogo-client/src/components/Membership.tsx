/* eslint-disable react/no-unescaped-entities */
export default function MemberShip() {
  return (
    <div className="relative">
      <div className=" w-full rounded-lg overflow-hidden">
        <picture>
          <img
            className="h-[350px] w-full object-cover object-bottom"
            src="https://res.cloudinary.com/dr3rpqkpb/image/upload/v1683639802/Rectangle_71_z58pbx.png"
            alt=""
          />
        </picture>
      </div>
      <div className="absolute left-0 right-0  bottom-[56px] mx-auto text-center text-white text-[40px] md:text-[32px] font-bold w-[620px] md:w-[520px]">
        <div>
          <span className="text-[#F4CE45] ">Join our membership</span> and get
          discount up to 25%
        </div>

        <div className="text-base font-normal mt-[32px]">
          <input
            className="rounded-l-lg px-[24px] py-[12px] text-black outline-none"
            placeholder="enter your email"
          />
          <button className="bg-[#0D5C63] hover:bg-[#0E6C74] px-[24px] py-[12px] rounded-r-lg">
            Subscription
          </button>
        </div>
        <p className="text-base mt-4 font-normal cursor-pointer">
          I'm new User
        </p>
      </div>
    </div>
  );
}
