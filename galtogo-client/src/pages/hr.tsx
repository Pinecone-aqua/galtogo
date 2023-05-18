import Layout from "@/components/Layout";
import SubBanner from "@/components/subcomponents/SubBanner";
import Image from "next/image";

export default function HumanResource(): JSX.Element {
  return (
    <Layout>
      <div className="">
        <SubBanner />
      </div>
      <div className="mx-[116px]">
        <div className="flex items-center gap-[64px] my-16 w-full">
          <Image
            className="h-[352px] w-[50%] object-cover object-top"
            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            height={1000}
            width={1000}
            alt="askdnsad"
          />

          <div className="w-[50%] px-[40px]">
            <h1 className="text-[40px] font-bold w-[380px] text-[#0D5C63] mb-[32px]">
              Why you should join our team
            </h1>
            <p className="text-base">
              Joining our restaurant team is an excellent opportunity for anyone
              looking to advance their career in the food industry. Our
              welcoming and inclusive work environment ensures that all
              employees feel respected and valued, while our commitment to
              career growth provides ample opportunities for learning and
              advancement. We offer competitive compensation and benefits
              packages, as well as a flexible work schedule that promotes
              work-life balance. Additionally, our staff is known for their
              strong sense of camaraderie and teamwork, making joining our team
              a great way to become part of a supportive and collaborative
              community.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[64px] my-16 w-full">
          <div className="w-[50%] px-[40px]">
            <h1 className="text-[40px] font-bold w-[320px] text-[#0D5C63] mb-[32px]">
              Career oppurtunity
            </h1>
            <p className="text-base">
              Joining our restaurant team is an excellent opportunity for anyone
              looking to advance their career in the food industry. Our
              welcoming and inclusive work environment ensures that all
              employees feel respected and valued, while our commitment to
              career growth provides ample opportunities for learning and
              advancement. We offer competitive compensation and benefits
              packages, as well as a flexible work schedule that promotes
              work-life balance. Additionally, our staff is known for their
              strong sense of camaraderie and teamwork, making joining our team
              a great way to become part of a supportive and collaborative
              community.
            </p>
          </div>
          <Image
            className="h-[352px] w-[50%] object-cover object-top"
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            height={1000}
            width={1000}
            alt="askdnsad"
          />
        </div>
      </div>
      <div className="relative">
        <video
          className="h-[720px] w-full object-cover"
          src="./promovideo.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute bottom-[38%] left-0 right-0 mx-auto w-[75%]">
          <h1 className="font-bold text-[56px] text-white text-center">
            Unleash your inner culinary genius - learn from the{" "}
            <span className="text-[#e6bb4e]">
              masters themselves in our Michelin
            </span>{" "}
            Chef Masterclass.
          </h1>
        </div>
      </div>
    </Layout>
  );
}
