/* eslint-disable @typescript-eslint/no-misused-promises */
import { TableShape, TableSize } from "@/utils/constants";
import React, { useState } from "react";

interface EditTableProps {
  table: ITable;
  setShowTableEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedTable: React.Dispatch<React.SetStateAction<ITable | null>>;
  setTablesDatas: React.Dispatch<React.SetStateAction<ITable[]>>;
}

const EditTable: React.FC<EditTableProps> = ({
  table,
  setShowTableEdit,
  setTablesDatas,
  setEditedTable,
}) => {
  const [name, setName] = useState(table.name);
  const [capacity, setCapacity] = useState(table.capacity);
  const [shape, setShape] = useState(table.shape);
  const [size, setSize] = useState(table.size);

  const tableShapes = Object.values(TableShape);
  const tableSizes = Object.values(TableSize);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitHandlerTable = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/table/${table._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          capacity,
          shape,
          size,
        }),
      }
    );
    if (response.ok) {
      const editedTable = {
        ...table,
        name,
        capacity,
        shape,
        size,
        coord: { posX: 0, posY: 0 },
      };
      setTablesDatas((prevTables) =>
        prevTables.map((prevTable) =>
          prevTable._id === table._id ? editedTable : prevTable
        )
      );
      setEditedTable(editedTable);
      setShowTableEdit(false);
    }
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <div className="relative bg-white rounded-lg max-w-md w-full mx-auto p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Edit Table</h2>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowTableEdit(false)}
            >
              <span className="sr-only">Close</span>
            </button>
          </div>

          <form onSubmit={submitHandlerTable}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Table Name:
              </label>
              <input
                type="number"
                className="border rounded-lg py-2 px-3"
                id="name"
                value={name}
                onChange={(e) => setName(parseInt(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Table Capacity:
              </label>
              <input
                type="number"
                className="border rounded-lg py-2 px-3"
                id="capacity"
                value={capacity}
                onChange={(e) => setCapacity(parseInt(e.target.value))}
              />
            </div>
            <div className="input-type block text-gray-700 text-sm font-bold mb-4">
              Table Size:
              <select
                name="size"
                value={size}
                className="border px-5 py-3 focus:outline-none rounded-md block mt-2"
                onChange={(e) => setSize(e.target.value)}
              >
                {tableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-type block text-gray-700 text-sm font-bold mb-4">
              Table Shape:
              <select
                name="size"
                value={size}
                className="border px-5 py-3 focus:outline-none rounded-md block mt-2"
                onChange={(e) => setShape(e.target.value)}
              >
                {tableShapes.map((shape) => (
                  <option key={shape} value={shape}>
                    {shape}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none mr-3"
                onClick={() => setShowTableEdit(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTable;
