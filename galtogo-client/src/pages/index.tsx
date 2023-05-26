import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useEffect, useState } from "react";
import axios from "axios";
// import BranchSection from "@/components/BranchSection";
// import GreetingBanner from "@/components/GreetingBanner";
// import MemberShip from "@/components/Membership";
import TestimonialSection from "@/components/TestimonialSection";
import Features from "@/components/subcomponents/Features";
import Category from "@/components/subcomponents/Category";
import EventSection from "@/components/EventSection";
import BlogSection from "@/components/BlogSection";

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
      <SpecialOffer />



      <Features />
      <div className="">
        <Category
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
      </div>

      <div className="mx-auto max-w-[80%]">
        <MenuField selectedCategory={selectedCategory} products={products} />
      </div>

      <EventSection />
      <BlogSection />

      {/* <div className="md:mx-[40px] my-[72px]">
        <BranchSection />
      </div> */}
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
