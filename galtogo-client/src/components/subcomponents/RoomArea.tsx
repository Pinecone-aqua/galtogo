import { useState } from "react";
import TimeTable from "./TimeTable";

const RoomArea = ({
  tablesData,
  setNewReservation,
  newReservation,
}: {
  tablesData: ITable[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewReservation: any;
  newReservation: IReservation;
}) => {
  const [current, setCurrent] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickTable = (e: any): void => {
    console.log(e.target.id);
    setCurrent(e.target.id);
    setNewReservation((prev: IReservation) => ({
      ...prev,
      table: e.target.id,
    }));
  };

  return (
    <div className="bg-gray-50  w-full p-3 rounded-lg mx-3 my-3 ">
      <p className="font-semibold m-3">Table position</p>

      <div className="relative room-area bg-white border-1 border-[#ECF0F3]  max-w-[800px] h-[600px] mx-auto overflow-x-auto overflow-hidden">
        {tablesData.map((table, index) => (
          <div
            id={table._id}
            key={index}
            onClick={handleClickTable}
            style={{
              top: table.coords.posY,
              left: table.coords.posX,
            }}
            className={`${current === table._id ? "bg-green-500" : ""
              } room-table absolute p-3 m-3 bg-gray-200 active:bg-blue-400 active:scale-95 rounded-md w-fit cursor-pointer`}
          >
            Table {table.name}
          </div>
        ))}
      </div>
      {current && (
        <TimeTable
          setNewReservation={setNewReservation}
          newReservation={newReservation}
        />
      )}
    </div>
  );
};

export default RoomArea;
