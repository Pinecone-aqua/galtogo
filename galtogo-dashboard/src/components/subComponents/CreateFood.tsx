/* eslint-disable @typescript-eslint/no-explicit-any */
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export default function CreateFood() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategories(res.data));
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.imageURL.files[0]);
    const newfood: any = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      category: e.target.category.value,
      price: e.target.price.value,
    };
    formData.append("newfood", JSON.stringify(newfood));
    axios
      .post("http://localhost:3001/product/add", formData)
      .then((res) => console.log(res));
  }

  return (
    <div className="w-full mt-2">
      <form onSubmit={(e) => onSubmit(e)}>
        <input className="w-full p-[16px]" placeholder="Name" name="title" />

        <input
          className="w-full p-[16px]"
          placeholder="Description"
          name="desc"
        />
        <select className="w-full py-[16px] border rounded-md" name="category">
          {categories.map((category, index) => (
            <option key={index}>{category.name}</option>
          ))}
        </select>

        <Button label="aaaa" size={"small"} />

        <input className="w-full p-[16px]" placeholder="Price" name="price" />
        <input className="w-full p-[16px]" type="file" name="imageURL" />

        <button
          className="w-full border mt-[16px] p-[8px] rounded-md bg-purple-600 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="w-[250px]">
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
        />
      </div>
    </div>
  );
}
