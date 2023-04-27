import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import MenuField from "@/components/MenuField";
import SpecialOffer from "@/components/SpecialOffer";
import { useState } from "react";

const items = [
  { name: "Item-1", category: "Category-1", price: "ItemPrice-1-1" },
  { name: "Item-2", category: "Category-1", price: "ItemPrice-2-1" },
  { name: "Item-3", category: "Category-1", price: "ItemPrice-3-1" },
  { name: "Item-4", category: "Category-1", price: "ItemPrice-4-1" },
  { name: "Item-5", category: "Category-1", price: "ItemPrice-5-1" },
  { name: "Item-1", category: "Category-2", price: "ItemPrice-1-2" },
  { name: "Item-2", category: "Category-2", price: "ItemPrice-2-2" },
  { name: "Item-3", category: "Category-2", price: "ItemPrice-3-2" },
  { name: "Item-4", category: "Category-2", price: "ItemPrice-4-2" },
  { name: "Item-5", category: "Category-2", price: "ItemPrice-5-2" },
];

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
        <MenuField selectedCategory={selectedCategory} items={items} />
      </div>
      <div className="p-3">Additional information</div>
    </Layout>
  );
}
