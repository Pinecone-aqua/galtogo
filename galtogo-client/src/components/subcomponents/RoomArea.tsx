import { Dispatch, SetStateAction, useState } from "react";
import ReactLoading from "react-loading";
import Table from "./Table";

const RoomArea = ({
  tablesData,
  setNewReservation,
  setTableNumber,
}: {
  tablesData: ITable[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewReservation: any;
  newReservation: IReservation;
  setTableNumber: Dispatch<SetStateAction<number>>;
}) => {
  const [current, setCurrent] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickTable = ({ e, name }: { e: any; name: number }): void => {
    setCurrent(e.target.id);
    setTableNumber(name);
    setNewReservation((prev: IReservation) => ({
      ...prev,
      table: e.target.id,
    }));
  };

  return (
    <div className="fit-content rounded-lg">
      <div className="relative room-area bg-white max-w-[800px] h-[600px] mx-auto overflow-x-auto overflow-hidden">
        {tablesData.length === 0 ? (
          <div className="loader-container w-full h-full flex justify-center items-center">
            <ReactLoading color="blue" height={50} width={50} type="spin" />
          </div>
        ) : (
          tablesData.map((table, index) => (
            <div
              id={table._id}
              key={index}
              onClick={(e) => handleClickTable({ e, name: table.name })}
              style={{
                top: table.coords.posY,
                left: table.coords.posX,
              }}
              className={`${
                current === table._id ? "bg-green-500" : ""
              } room-table absolute p-3 m-3 active:scale-95 rounded-md w-fit cursor-pointer`}
            >
              <Table
                variant="default"
                size={table.size}
                shape={table.shape}
                className="table-button text-center"
              >
                #{table.name}
              </Table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default RoomArea;
