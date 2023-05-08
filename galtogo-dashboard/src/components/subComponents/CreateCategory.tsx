/* eslint-disable @typescript-eslint/no-explicit-any */
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import "primeicons/primeicons.css";
import Button from "./Button";

export default function CreateCategory(): JSX.Element {
  function onSubmit(e: any) {
    e.preventDefault();
    
    const categorylist: any = {
      name: e.target.category.value,
    };


    axios
      .post("http://localhost:5050/category/add", categorylist)
      .then((res) => console.log(res));
      console.log(categorylist);
  }
  

  return (
    <div className="w-[50%] mt-2 p-4 bg-white rounded-lg border">
      <h1 className="text-lg font-bold text-sky-800 p-2 rounded-lg">
        Create Category
      </h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="w-full mt-2 p-4 rounded-lg bg-slate-50"
          placeholder="Category Name"
          name="category"
        />
        <div className="w-full mt-3">
          <Button variant={"default"} size={"lg"} type="submit">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
}
