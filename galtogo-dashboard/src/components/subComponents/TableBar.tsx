import { MdTableRestaurant } from "react-icons/md";
import { tableTimes } from "@/utils/constants";
import Button from "./Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import EditTable from "./EditTable";

interface TableBarProps {
  reservations: IReservation[];
  table: ITable;
  tablesData: ITable[];
  setTablesDatas: React.Dispatch<React.SetStateAction<ITable[]>>;
  onDeleteTable: (tableId: string) => void;
}

export default function TableBar({
  reservations,
  table: initialTable,
  onDeleteTable,
  setTablesDatas,
}: TableBarProps) {
  const [table] = useState(initialTable);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [showTableEdit, setShowTableEdit] = useState(false);
  const tableCells = [...tableTimes];
  const [editedTable, setEditedTable] = useState<ITable | null>(null);

  tableTimes.forEach((el, i) => {
    reservations.forEach((reservation) => {
      if (
        reservation.table &&
        table.name === reservation.table.name &&
        el.time === reservation.time
      ) {
        tableCells[i] = { time: el.time, isOccupied: true };
      }
    });
  });

  function deleteHandler(id: string): void {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this table?"
    );

    if (confirmDelete) {
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_GALTOGO_SERVER_API}/table/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        console.log("res: ", res);
        if (res.ok) {
          setLoading(false);
          toast.success("Table deleted successfully!");
          setDeleted(true);
          onDeleteTable(table._id);
        }
      });
    }
  }
  if (deleted) {
    return null;
  }

  return (
    <div className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg m-3">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="bg-purple-200 rounded-lg p-3">
            <MdTableRestaurant className="text-purple-800" />
          </div>
          <div className="whitespace-nowrap">
            Table {editedTable ? editedTable.name : table.name}
          </div>
        </div>

        <div className="flex items-center mt-3 sm:mt-0">
          <button
            onClick={() => setShowTableEdit(true)}
            className="bg-green-200 p-2 rounded-lg text-black hover:bg-green-400"
          >
            <AiOutlineEdit />
          </button>
          {showTableEdit && (
            <EditTable
              setShowTableEdit={setShowTableEdit}
              table={table}
              setTablesDatas={setTablesDatas}
              setEditedTable={setEditedTable}
            />
          )}
          <Button
            type="button"
            variant="red"
            size="sm"
            className="ml-2"
            onClick={() => deleteHandler(table._id)}
            disabled={loading}
          >
            {loading ? "Deleting..." : <AiOutlineDelete />}
          </Button>
        </div>
      </div>
      <div className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid sm:grid-cols-6 grid-cols-3 gap-1 items-center justify-between cursor-pointer">
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
