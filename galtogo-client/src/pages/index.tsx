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
      <div className="p-3">
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
    .get(`${process.env.PORT}/product`) //s
    .then((res) => res.data);
  const categories = await axios
    .get(`${process.env.PORT}/category`) //s
    .then((res) => res.data);

  return { props: { products, categories } };
};
