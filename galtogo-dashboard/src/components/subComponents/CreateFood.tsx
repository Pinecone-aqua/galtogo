/* eslint-disable @typescript-eslint/no-explicit-any */
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "primeicons/primeicons.css";

import { Button } from "primereact/button";


export default function CreateFood() {
  const [categories, setCategories] = useState<ICategory[]>([]);



  useEffect(() => {
    axios
      .get("http://localhost:5050/category")
      .then((res) => setCategories(res.data));
  }, []);

  function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    const foodlist: any = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      category: e.target.category.value,
      price: e.target.price.value,
    };

    formData.append('file',  e.target.imageURL.files[0]);
    

    formData.append("foodlist", JSON.stringify(foodlist));
    axios
      .post("http://localhost:5050/product/add", formData)
      .then((res) => console.log(res));
  }

  return (
    <div className="w-full mt-2 p-4 bg-white rounded-lg border">

      <h1 className="text-lg font-bold text-sky-800 p-2">Create product</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          placeholder="Name"
          name="title" />

        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          placeholder="Description"
          name="desc"
        />

        <div className="mt-2 w-full ">
          <select className="w-full border p-4 rounded-lg" placeholder="Categories" name="category">
            {categories.map((item: any, index: number) =>
              <option key={index} value={item._id}>{item.name}</option>
            )}
          </select>
        </div>



        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          placeholder="Price"
          name="price" />
        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          type="file"
          name="imageURL" />
        <div className="w-full mt-3">
          <Button className="w-full" label="Submit" size={"small"} />
        </div>
      </form>

    </div>
  );
}
