import ChefTeam from "@/components/ChefTeam";
import Layout from "@/components/Layout";
import MasterClassCarousel from "@/components/MasterClassCarousel";
import Contributors from "@/components/subcomponents/Contributors";
import CountdownBanner from "@/components/subcomponents/CountdownBanner";

import Timer from "@/components/subcomponents/Timer";

export default function Special() {
  return (
    <Layout>
      <div className="relative overflow-hidden w-full">
        <CountdownBanner />

        <div className="absolute text-white text-[56px] font-bold top-[38%] mx-[20%] left-0 right-0">
          <div className="flex items-center justify-between flex-wrap">
            <h1 className="w-[50%]">Our Executive Chef’s Masterclass</h1>
            <Timer />
          </div>
        </div>
      </div>
      <div className="my-[56px]">
        <MasterClassCarousel />
      </div>
      <ChefTeam />
      <Contributors />
    </Layout>
  );
}
