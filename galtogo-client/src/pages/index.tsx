import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useEffect, useState } from "react";
import axios from "axios";
import BranchSection from "@/components/BranchSection";
import CategoryMobile from "@/components/subcomponents/CategoryMobile";

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
      <div className="">
        <SpecialOffer />
        <div className="hidden md:block w-[80%] mx-auto bottom-[-24px] -translate-y-6">
          <Carousel
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            categories={categories}
          />
        </div>
        <div className="w-full overflow-x-auto snap-x snap-mandatory sm:hidden md:hidden lg:hidden">
            <CategoryMobile setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} categories={categories}/>
          </div>
      </div>
      <div className="w-full overflow-x-auto snap-x snap-mandatory rounded-lg">
        <MenuField
          selectedCategory={selectedCategory}
          products={products}
        />
      </div>

      <div className="p-3">
        <BranchSection />
      </div>
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
