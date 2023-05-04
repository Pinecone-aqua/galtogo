/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategory } from "@/utils/constants";
import { useState } from "react";
import Button from "./Button";

export default function EditCategory({
  categoryList,
}: {
  categoryList: ICategory[];
}): JSX.Element {
  const [selectedId, setSelectedId] = useState<string>();
  const [showSave, setShowSave] = useState<boolean>(false);
  const [activeList, setActiveList] = useState<boolean>(false);
  const handleChange = (e: any) => {
    if (e.target.value.length > 2) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
  };

  function handleForm(e: any) {
    e.preventDefault();
    const formData = new FormData();
    const foodlist: any = {
      category: e.target.category.value,
    };
    formData.append("foodlist", JSON.stringify(foodlist));
    console.log(FormData);
  }

  return (
    <form
      className="w-[50%] p-4 bg-white mt-2 rounded-lg border"
      onSubmit={handleForm}
    >
      <h1 className="text-lg font-bold text-sky-800 p-2">Edit Categories</h1>
      {categoryList.map((item: ICategory, index: number) =>
        selectedId === item._id && activeList == true ? (
          <div
            key={item._id}
            className="flex items-center p-4 bg-blue-200 rounded-lg gap-2"
          >
            <div className="w-full">
              <input
                className="w-full p-4 bg-slate-50  rounded-lg cursor-pointer"
                key={index}
                name="category"
                placeholder={item.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex gap-2">
              {showSave && (
                <Button
                  onClick={() => {
                    setActiveList(false), setShowSave(false);
                  }}
                  size={"default"}
                  className="cursor-pointer  rounded-lg  border text-white"
                >
                  Save
                </Button>
              )}

              <button>
                <i className="pi pi-trash text-red-400" />
              </button>
            </div>
          </div>
        ) : (
          <div
            key={item._id}
            className="flex items-center p-4 rounded-lg gap-2"
          >
            <div
              className="w-full"
              onClick={() => {
                setActiveList(true);
                showSave == true &&
                  selectedId !== item._id &&
                  alert("Save hiigeechee!!!");
                showSave == false && setSelectedId(item._id);
              }}
            >
              <input
                disabled
                className="w-full p-4 bg-slate-50 rounded-lg cursor-pointer"
                key={index}
                placeholder={item.name}
              />
            </div>

            <div className="flex gap-2">
              <button>
                <i className="pi pi-trash text-red-400" />
              </button>
            </div>
          </div>
        )
      )}
    </form>
  );
}
