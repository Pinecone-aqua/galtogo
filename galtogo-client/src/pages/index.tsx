import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Category-1");
  return (
    <Layout>
      <div className="hidden md:block p-3">
        <SpecialOffer />
      </div>
      <div className="p-3">
        <Carousel setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="p-3">
        <MenuField selectedCategory={selectedCategory} />
      </div>
      <div className="p-3">Additional information</div>
    </Layout>
  );
}
