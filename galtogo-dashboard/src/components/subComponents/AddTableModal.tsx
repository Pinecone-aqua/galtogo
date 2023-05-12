import { Dispatch, SetStateAction, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { toast } from "react-toastify";

export default function AddTable({
  setTablesDatas,
}: {
  setTablesDatas: Dispatch<SetStateAction<ITable[]>>;
}): JSX.Element {
  const [newTable, setNewTable] = useState<ITable>({
    name: "",
    capacity: "",
    coords: { posX: 0, posY: 0 },
  });
  // const [tableData, setTableData] = useState<ITable[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:5050/table/add", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newTable),
    })
      .then((response) => response.json())
      .then((data) => {
        setTablesDatas((prevTablesData) => [...prevTablesData, data]);
        setNewTable({ name: "", capacity: "", coords: { posX: 0, posY: 0 } });
        toast.success("Table added successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error adding table");
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTable((prevTable) => ({
      ...prevTable,
      [name]: value,
    }));
  };

  return (
    <form className="grid grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="number"
          name="name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Ширээний нэр"
          value={newTable.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-type">
        <input
          type="number"
          name="capacity"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Ширээний багтаамж"
          value={newTable.capacity}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="flex justify-center text-md w-2/8 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 border-green-500 hover:text-green-500"
      >
        Add
        <span className="px-1">
          <BiPlus size={24} />
        </span>
      </button>
    </form>
  );
}
