/* eslint-disable @typescript-eslint/no-explicit-any */
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
export default function CreateCategory():JSX.Element {



  function onSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.categoryImg.files[0]);
    const categorylist: any = {
      category: e.target.category.value,
      categoryImg: e.target.categoryImg.value
    };
    console.log(categorylist);
    formData.append("categorylist", JSON.stringify(categorylist));
    axios
      .post("http://localhost:3001/category/add", formData)
      .then((res) => console.log(res));
  }

  return (
    <div className="w-full mt-2 p-4 bg-white rounded-lg border">

      <h1 className="text-lg font-bold text-sky-800 p-2">Create product</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          placeholder="Name"
          name="category" />

        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          type="file"
          name="categoryImg" />
        <div className="w-full mt-3">
          <Button className="w-full" label="Submit" size={"small"} />
        </div>
      </form>

    </div>
  );
}
