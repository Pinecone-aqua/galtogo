import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useEffect, useState } from "react";
import axios from "axios";
import BranchSection from "@/components/BranchSection";

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
      </div>
      <div className="p-3 mt-5 mb-10">
        <Carousel
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categoryData={categories}
        />
      </div>
      <div className="w-full overflow-x-auto no-scrollbar sm:overflow-x-auto sm:no-scrollbar sm:snap-x snap-mandatory rounded-lg md:overflow-hidden">
        <MenuField selectedCategory={selectedCategory} products={products} />
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
