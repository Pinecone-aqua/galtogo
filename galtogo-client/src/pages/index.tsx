import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useState } from "react";
import axios from 'axios'



export default function Home(props: { productData: IProduct[] , categoryData: ICategory[]}): JSX.Element {
  const {productData, categoryData} = props
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(categoryData[0]);
  return (
    <Layout>
      <div className="hidden md:block p-3">
        <SpecialOffer />
      </div>
      <div className="p-3">
        <Carousel setSelectedCategory={setSelectedCategory} categoryData={categoryData}/>
      </div>
      <div className="p-3">
        <MenuField selectedCategory={selectedCategory} productData={productData} />
      </div>
   
      <div className="p-3">Additional information</div>
    </Layout>
  );
}


export const getStaticProps = async () => {
  const productData = await axios
    .get('http://localhost:3001/product')
    .then((res) => res.data)
    const categoryData = await axios
    .get('http://localhost:3001/category')
    .then((res) => res.data)
   
  return { props: { productData, categoryData} }
}