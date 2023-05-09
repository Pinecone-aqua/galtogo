import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useEffect, useState } from "react";
import axios from "axios";
import BranchSection from "@/components/BranchSection";
import CategoryMobile from "@/components/subcomponents/CategoryMobile";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import GreetingBanner from "@/components/GreetingBanner";

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
      <div className="lg:mx-[40px]">
        <SpecialOffer />
        <div className="hidden md:block w-[80%]  mx-auto bottom-[-24px] -translate-y-6">
          <Carousel
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
      </div>

      <div className="w-full overflow-x-auto no-scrollbar sm:overflow-x-auto sm:no-scrollbar sm:snap-x snap-mandatory rounded-lg md:overflow-hidden">
        <MenuField selectedCategory={selectedCategory} products={products} />
      </div>
      <div className="my-[144px]">
        <GreetingBanner />
      </div>
      <div className="mx-[40px] my-[72px] hidden md:block">
        <Membership />
      </div>
      <div className="md:mx-[40px] my-[72px]">
        <BranchSection />
      </div>

    <Footer/>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const products = await axios
    .get(`${process.env.PORT}/product`)
    .then((res) => res.data);
  const categories = await axios
    .get(`${process.env.PORT}/category`)
    .then((res) => res.data);

  return { props: { products, categories } };
};
