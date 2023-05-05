import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useEffect, useState } from "react";
import axios from "axios";
import BranchSection from "@/components/BranchSection";

export default function Home(props: {
  productData: IProduct[];
  categoryData: ICategory[];
}): JSX.Element {
  const { productData, categoryData } = props;
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

  useEffect(() => {
    setSelectedCategory(
      localStorage.getItem("active")
        ? localStorage.getItem("active")
        : "Beverages"
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
          categoryData={categoryData}
        />
      </div>
      <div className="p-3">
        <MenuField
          selectedCategory={selectedCategory}
          productData={productData}
        />
      </div>

      <div className="p-3">
        <BranchSection />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const productData = await axios
    .get("http://localhost:3001/product")
    .then((res) => res.data);
  const categoryData = await axios
    .get("http://localhost:3001/category")
    .then((res) => res.data);

  return { props: { productData, categoryData } };
};
