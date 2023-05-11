import { MdTableRestaurant } from "react-icons/md";
import { tableTimes } from "@/utils/constants";
import Button from "./Button";
import { useState } from "react";
import { toast } from "react-toastify";

interface TableBarProps {
  reservations: IReservation[];
  table: ITable;
}

export default function TableBar({
  reservations,
  table: initialTable,
}: TableBarProps) {
  const [table, setTable] = useState(initialTable);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const tableCells = [...tableTimes];

  tableTimes.forEach((el, i) => {
    reservations.forEach((reservation) => {
      if (
        table.name === reservation.table.name &&
        el.time === reservation.time
      ) {
        tableCells[i] = { time: el.time, isOccupied: true };
      }
    });
  });

  function handleAdd(e: any) {
    e.preventDefault();
    console.log(table._id);
  }

  function deleteHandler(id: string): void {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this table?"
    );

    if (confirmDelete) {
      setLoading(true);
      fetch(`http://localhost:5050/table/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        console.log("res: ", res);
        if (res.ok) {
          setTable((prevTable) => ({ ...prevTable, _id: "" }));
          setLoading(false);
          toast.success("Table deleted successfully!");
          setDeleted(true);
        }
      });
    }
  }
  if (deleted) {
    return null;
  }

  return (
    <div className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg m-3">
      <div className="flex items-center ">
        <div className="bg-purple-200 rounded-lg p-3">
          <MdTableRestaurant className="text-purple-800" />
        </div>
        <p className="pl-4">Table {table.name}</p>
        <Button
          type="button"
          variant="red"
          size="sm"
          className="sm:mx-6 m-3"
          onClick={() => deleteHandler(table._id)}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Table"}
        </Button>
      </div>
      <div className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid  sm:grid-cols-6 grid-cols-3 gap-1 items-center justify-between cursor-pointer">
        {tableCells.map((tableCell, index: number) => (
          <div
            key={index}
            className={`${
              tableCell.isOccupied ? "bg-gray-400" : "bg-gray-200"
            } hover:bg-gray-300 rounded-lg p-3`}
          >
            {tableCell.time}
          </div>
        ))}
      </div>
    </div>
  );
}
