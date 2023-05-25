import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useEffect, useState } from "react";
import axios from "axios";
import BranchSection from "@/components/BranchSection";
import CategoryMobile from "@/components/subcomponents/CategoryMobile";
import GreetingBanner from "@/components/GreetingBanner";
import MemberShip from "@/components/Membership";
import TestimonialSection from "@/components/TestimonialSection";
import MobileMenuField from "@/components/MobileMenuField";
import Features from "@/components/subcomponents/Features";
import Category from "@/components/subcomponents/Category";

export default function Home(props: {
  products: IProduct[];
  categories: ICategory[];
}): JSX.Element {
  const { products, categories } = props;
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

  useEffect(() => {
    setSelectedCategory(
      localStorage.getItem("active")
        ? localStorage.getItem("active")
        : "Үндсэн цэс"
    );
  }, []);

  return (
    <Layout>
      <div className="hidden md:block p-3">
        <SpecialOffer />

        <Features />
        <Category
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>
      <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory sm:visible md:hidden lg:hidden">
        <CategoryMobile
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>
      <div className="hidden sm:block md:block w-full overflow-x-auto no-scrollbar sm:overflow-x-auto sm:no-scrollbar sm:snap-x snap-mandatory rounded-lg md:overflow-hidden">
        <MenuField selectedCategory={selectedCategory} products={products} />
      </div>
      <div className="block md:hidden">
        <MobileMenuField products={products} deviceType={undefined} />
      </div>
      <div className="my-[24px] lg:my-[96px]">
        <GreetingBanner />
      </div>
      <div className="mx-[40px] my-[72px] hidden md:block">
        <MemberShip />
      </div>
      <div className="md:mx-[40px] my-[72px]">
        <BranchSection />
      </div>
      <div className=" my-[72px]">
        <TestimonialSection />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await axios
    .get(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/product`) //s
    .then((res) => res.data);
  const categories = await axios
    .get(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/category`) //s
    .then((res) => res.data);

  return { props: { products, categories } };
};
